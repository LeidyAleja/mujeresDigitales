import React from 'react';
import './ProductList.css';
import ProductItem from './productItem';

const ProductList = ({ products, onAddToCart, productClick }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductItem key={product.id} product={product} onAddToCart={onAddToCart} productClick={productClick} />
      ))}
    </div>
  );
};

export default ProductList;
