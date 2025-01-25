import React from 'react';
import logo from 'public/logo192.png'; 
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