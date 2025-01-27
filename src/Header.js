import React from 'react';
import Nav from './Nav'; // Importar el componente Nav
import logo from './Assets/logo2.svg'; 
import './App.css';

function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="Little Lemon Logo" />
      <Nav />
  
    </header>
  );
}

export default Header;