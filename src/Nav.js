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
  <li className={location.pathname === "/" ? "active-link" : ""}>
    <Link to="/" aria-label="Home" tabIndex="0" aria-current={location.pathname === "/" ? "page" : undefined}>Home</Link>
  </li>
  <li className={location.pathname === "/about" ? "active-link" : ""}>
    <Link to="/about" aria-label="About" tabIndex="0" aria-current={location.pathname === "/about" ? "page" : undefined}>About</Link>
  </li>
  <li className={location.pathname === "/menu" ? "active-link" : ""}>
    <Link to="/menu" aria-label="Menu" tabIndex="0" aria-current={location.pathname === "/menu" ? "page" : undefined}>Menu</Link>
  </li>
  <li className={location.pathname === "/specials" ? "active-link" : ""}>
    <Link to="/specials" aria-label="Specials" tabIndex="0" aria-current={location.pathname === "/specials" ? "page" : undefined}>Specials</Link>
  </li>
  <li className={location.pathname === "/contact" ? "active-link" : ""}>
    <Link to="/contact" aria-label="Contact" tabIndex="0" aria-current={location.pathname === "/contact" ? "page" : undefined}>Contact</Link>
  </li>
  <li className={location.pathname === "/booking" ? "active-link" : ""}>
    <Link to="/booking" aria-label="Book a Table" tabIndex="0" aria-current={location.pathname === "/booking" ? "page" : undefined}>Book a Table</Link>
  </li>
</ul>
    </nav>
  );
}

export default Nav;