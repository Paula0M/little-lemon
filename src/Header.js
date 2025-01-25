import React from 'react';
import logo from './logo2.svg'; 
import './App.css';

function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="Little Lemon Logo" />
      <h1>Little Lemon</h1>
    </header>
  );
}

export default Header;