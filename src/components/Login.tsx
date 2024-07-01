import React from 'react';
import '../styles/Login.css'; 
import { Link } from 'react-router-dom';
import Signup from './Signup';

const Login = () => {
  return (
    <div className="login-container">
      <form className="login-form">
        <h1 className="login-form-heading">Login</h1>
        <div className="login-form-group">
          <label htmlFor="email" className="login-form-label">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="login-form-input"
            required
          />
        </div>
        <div className="login-form-group">
          <label htmlFor="password" className="login-form-label">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            className="login-form-input"
            required
          />
        </div>
        <button type="submit" className="login-form-button">Login</button>
        <p className="login-form-text">Don't have an account? <Link to="/signup" >Sign up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
