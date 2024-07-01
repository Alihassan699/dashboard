import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <div className="header-container">
      <nav className="nav-menu">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/Dashboard">Dashboard</Link>
      </nav>
    </div>
  );
}

export default Header;
