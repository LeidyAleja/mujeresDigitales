import React from 'react';
import './ProductDetails.css';

const ProductDetails = ({ product }) => {
  if (!product) return <div className="product-details empty">Selecciona un producto para ver los detalles.</div>;

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} className="details-image" />
      <h2 className="details-name">{product.name}</h2>
      <p className="details-description">{product.description}</p>
      <p className="details-price">{product.price} USD</p>
    </div>
  );
};

export default ProductDetails;
