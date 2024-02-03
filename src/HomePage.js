
// src/components/HomePage.js
import React from 'react';
import ProductList from './ProductList'; // Import the ProductList component
import './ProductList.css'; // Import the CSS file

const HomePage = ({ currentUser }) => {
  return (
    <div>
      <h1>Welcome {currentUser ? currentUser.email : 'Guest'}!</h1>
      <ProductList />
      {/* Add any other components or content you want to display on the homepage */}
    </div>
  );
};

export default HomePage;

