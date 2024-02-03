// src/components/ProductList.js
import React from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import productsData from './db.json';

const ProductList = () => {
  const { products } = productsData;

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Product List</h2>
      <div className="product-list">
        {products.map((product, index) => (
          <Link key={product.id} to={`/product/${product.id}`} className={`product-card ${index % 5 === 4 ? 'last-in-row' : ''}`}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>Price: Rs {product.amount}</p>
            <div className="product-icons">
              <span>
                <FaHeart />
              </span>
              <span>
                <FaShoppingCart />
              </span>
            </div>
            <p>Rating: {product.rating}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;





