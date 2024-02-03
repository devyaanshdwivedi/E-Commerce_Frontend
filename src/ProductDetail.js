// src/components/ProductDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import productsData from './db.json'; // Adjust the path accordingly

const ProductDetail = () => {
  const { id } = useParams();
  const product = productsData.products.find((p) => p.id.toString() === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <div style={{ flex: '0 0 75%', paddingRight: '20px', textAlign: 'center' }}>
        <img
          src={product.image}
          alt={product.title}
          style={{ maxWidth: '100%', height: '75%', maxHeight: '75vh' }}
        />
      </div>
      <div style={{ flex: '0 0 25%', textAlign: 'left' }}>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>Price: Rs {product.amount}</p>
        <div>
          <button style={{ marginRight: '10px' }}>Buy Now</button>
          <button>Add to Basket</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;




