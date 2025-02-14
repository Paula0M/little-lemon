import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './App.css';
import Logo from './Assets/logo.png';

function Nav() {
  const location = useLocation();
  return (
    <nav className="nav-header" aria-label="Main Navigation" role="navigation">
      <div className="logo-container">
        <img src={Logo} alt="Little Lemon Logo" className="logo" />
      </div>
      <ul>
        <li><Link to="/" aria-label="Home" abIndex="0" aria-current={location.pathname === "/" ? "page" : undefined}>Home</Link></li>
        <li><Link to="/about" aria-label="About" tabIndex="0" aria-current={location.pathname === "/about" ? "page" : undefined}>About</Link></li>
        <li><Link to="/menu" aria-label="Menu" tabIndex="0"aria-current={location.pathname === "/menu" ? "page" : undefined}>Menu</Link></li>
        <li><Link to="/specials" aria-label="Specials" tabIndex="0" aria-current={location.pathname === "/specials" ? "page" : undefined}>Specials</Link></li>
        <li><Link to="/contact" aria-label="Contact" tabIndex="0" aria-current={location.pathname === "/contact" ? "page" : undefined}>Contact</Link></li>
        <li><Link to="/booking" aria-label="Book a Table" tabIndex="0" aria-current={location.pathname === "/booking" ? "page" : undefined}>Book a Table</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;