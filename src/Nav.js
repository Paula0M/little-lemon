import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Logo from './Assets/logo.png';

function Nav() {
  return (
    <nav className="nav-header">
      <div className="logo-container">
        <img src={Logo} alt="Little Lemon Logo" className="logo" />
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/specials">Specials</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/booking">Book a Table</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;