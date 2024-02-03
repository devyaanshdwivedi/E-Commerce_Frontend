// src/App.js
import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './HomePage';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import Cart from './Cart'; // Import the Cart component
import './index.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Mock authentication logic
    setIsLoggedIn(true);
    setCurrentUser({ email });
  };

  const handleLogout = () => {
    // Mock logout logic
    setIsLoggedIn(false);
    setCurrentUser(null);
  };

  return (
    <Router>
      <div>
        {/* Header */}
        <div className="header">
          <h1>ShopKart.</h1>
          <div className="header-icons">
            <Link to="/products">Products</Link>
            {isLoggedIn ? (
              <a href="#logout" onClick={handleLogout}>Logout</a>
            ) : (
              <Link to="/login">Login</Link>
            )}
            <Link to="/cart" className="cart-icon">
              <FaShoppingCart />
              {/* You can use a dynamic value here based on the number of items in the cart */}
              <span className="cart-badge">2</span>
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <Routes>
          <Route path="/" element={<HomePage currentUser={currentUser} />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

        {/* Login/Register Forms */}
        {!isLoggedIn && (
          <div className="container">
            <div className="login-container">
              <h1>Login</h1>
              <form className="login-form">
                <label>Email Address:</label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                />
                <br />
                <label>Password:</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                />
                <br />
                <button className="login-button" onClick={handleLogin}>
                  Login
                </button>
              </form>
              <p>New User? <Link to="/register">Create an account</Link></p>
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;



