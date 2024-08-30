import React from 'react';
import './Header.css';

const Header = ({ onCartClick }) => {
  return (
    <header className="header">
      <h1>Leidy Store</h1>
      <button onClick={() => onCartClick()} className="cart-button">
        🛒 Carrito de Compras
      </button>
    </header>
  );
};

export default Header;
