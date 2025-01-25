import React from 'react';
import './App.css';

function Nav() {
  return (
    <nav>
      <ul>
      <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#specials">Specials</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#booking">Book a Table</a></li>
      </ul>
    </nav>
  );
}

export default Nav;