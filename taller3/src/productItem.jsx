import React from 'react';
import './ProductItem.css';

const ProductItem = ({ product, onAddToCart, productClick }) => {
  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} className="product-image"onClick={() => productClick(product)}/>
      <h3 className="product-name" onClick={() => productClick(product)}>{product.name}</h3>
      <p className="product-price" onClick={() => productClick(product)}>{product.price} COP</p>
      <button className="add-to-cart-btn" onClick={() => onAddToCart(product)}>Añadir al Carrito</button>
    </div>
  );
};

export default ProductItem;
