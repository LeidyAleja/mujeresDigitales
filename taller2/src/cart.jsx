import React from 'react';
import './Cart.css';

const Cart = ({ cartItems, onRemoveFromCart }) => {
  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h4>{item.name}</h4>
              <p>{item.price} USD</p>
            </div>
            <button className="remove-btn" onClick={() => onRemoveFromCart(item)}>Eliminar</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
