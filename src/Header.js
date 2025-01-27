import React from 'react';
import Nav from './Nav'; // Importar el componente Nav
import logo from './Assets/logo2.svg'; 
import './App.css';

function Header() {
  return (
    <header className="App-header">
      <div className="header-content">
        <img src={logo} className="App-logo" alt="Little Lemon Logo" />
        <Nav />
      </div>
    </header>
  );
}

export default Header;