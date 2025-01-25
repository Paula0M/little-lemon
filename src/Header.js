import React from 'react';
import logo from './logo2.svg'; 
import './App.css';

function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="Little Lemon Logo" />
    </header>
  );
}

export default Header;