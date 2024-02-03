// src/Cart.js
import React, { useState, useEffect } from 'react';
import CounterBox from './CounterBox'; // Import the CounterBox component

const Cart = () => {
  const [cartItems, setCartItems] = useState([]); // Now we need to modify cartItems using setCartItems
  const [priceDetails, setPriceDetails] = useState({
    price: 0,
    discountPrice: 0,
    deliveryCharge: 50, // Assume a fixed delivery charge for now
  });

  useEffect(() => {
    // Assuming you have a function to calculate total price and discount
    const totalPrice = calculateTotalPrice(cartItems);
    const discountPrice = calculateDiscountPrice(cartItems);

    setPriceDetails((prevPriceDetails) => ({
      ...prevPriceDetails,
      price: totalPrice,
      discountPrice,
    }));
  }, [cartItems]);

  // Mock functions for calculating total price and discount
  const calculateTotalPrice = (items) => {
    return items.reduce((total, item) => total + parseFloat(item.amount), 0);
  };

  const calculateDiscountPrice = (items) => {
    // Assuming a simple discount calculation for demonstration
    return items.length * 10; // $10 discount for each item
  };

  // Mock function for handling counter updates
  const handleCounterUpdate = (itemId, newCount) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) => (item.id === itemId ? { ...item, count: newCount } : item))
    );
  };

  return (
    <div className="cart-container">
      <div className="cart-items">
        <h2>Your Cart</h2>
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} />
            <div className="item-details">
              <p>{item.title}</p>
              <p>Cost: {item.amount}</p>
              <CounterBox itemId={item.id} count={item.count} onUpdate={handleCounterUpdate} />
            </div>
          </div>
        ))}
      </div>

      <div className="price-details">
        <h2>Price Details</h2>
        <p>Price: {priceDetails.price}</p>
        <p>Discount Price: {priceDetails.discountPrice}</p>
        <p>Delivery Charge: {priceDetails.deliveryCharge}</p>
        <hr />
        <p>Total: {priceDetails.price - priceDetails.discountPrice + priceDetails.deliveryCharge}</p>
      </div>
    </div>
  );
};

export default Cart;

