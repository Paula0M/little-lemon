import React from 'react';
import Nav from './Nav'; // Importar el componente Nav
import './App.css';

function Header() {
  return (
    <header className="App-header" role="banner" aria-label="Main header">
    <div className="header-content">
        <Nav />
      </div>
    </header>
  );
}

export default Header;