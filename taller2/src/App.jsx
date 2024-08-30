import React, { useState } from 'react';
import './App.css';
import ProductList from './productList';
import ProductDetails from './productDetails';
import Cart from './cart';
import Header from './header';

const App = () => {
  const [products] = useState([
    {
      "id": 1,
      "name": "Camiseta de Algodón",
      "price": 55000,
      "description": "Camiseta de algodón 100% suave y cómoda.",
      "image": "https://via.placeholder.com/150?text=Camiseta",
    },
    {
      "id": 2,
      "name": "Pantalones de Jean",
      "price": 120000,
      "description": "Pantalones de Jean  resistentes y de moda.",
      "image": "https://via.placeholder.com/150?text=Pantalones"
    },
    {
      "id": 3,
      "name": "Reloj Deportivo",
      "price": 78000,
      "description": "Reloj deportivo resistente al agua con cronómetro.",
      "image": "https://via.placeholder.com/150?text=Reloj"
    },
    {
      "id": 4,
      "name": "Gorra de Béisbol",
      "price": 220000,
      "description": "Gorra de béisbol ajustable con logo bordado.",
      "image": "https://via.placeholder.com/150?text=Gorra"
    },
    {
      "id": 5,
      "name": "Zapatillas de Futbol",
      "price": 180000,
      "description": "Zapatillas ligeras y cómodas para correr.",
      "image": "https://via.placeholder.com/150?text=Zapatillas"
    },
    {
      "id": 6,
      "name": "Bolsos",
      "price": 150000,
      "description": "Bolsos con múltiples compartimentos y resistente al agua.",
      "image": "https://via.placeholder.com/150?text=Mochila"
    },
    {
      "id": 7,
      "name": "Auriculares Inalámbricos",
      "price": 99000,
      "description": "Auriculares con sonido HD y batería de larga duración.",
      "image": "https://via.placeholder.com/150?text=Auriculares"
    },
    {
      "id": 9,
      "name": "Tablet 10 pulgadas",
      "price": 700000,
      "description": "Tablet con pantalla de alta resolución y 64GB de almacenamiento.",
      "image": "https://via.placeholder.com/150?text=Tablet"
    },
    {
      "id": 10,
      "name": "Teclado Mecánico",
      "price": 250000,
      "description": "Teclado mecánico retroiluminado con switches Cherry MX.",
      "image": "https://via.placeholder.com/150?text=Teclado"
    },
    {
      "id": 13,
      "name": "Silla de Oficina",
      "price": 129990,
      "description": "Silla ergonómica con soporte lumbar ajustable.",
      "image": "https://via.placeholder.com/150?text=Silla"
    },
    {
      "id": 14,
      "name": "Cargador Inalámbrico",
      "price": 178000,
      "description": "Cargador rápido inalámbrico compatible con Qi.",
      "image": "https://via.placeholder.com/150?text=Cargador"
    },
    {
      "id": 15,
      "name": "Smartwatch",
      "price": 390900,
      "description": "Reloj inteligente con seguimiento de actividad y notificaciones.",
      "image": "https://via.placeholder.com/150?text=Smartwatch"
    }]);

  const [cartItems, setCartItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isCartVisible, setIsCartVisible] = useState(false); // Nuevo estado para la visibilidad del carrito


  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (product) => {
    setCartItems(cartItems.filter(item => item.id !== product.id));
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <div className="app">
       <Header onCartClick={toggleCartVisibility} /> {/* Pasa la función al header */}
      <div className="content">
        <ProductList products={products} onAddToCart={addToCart} productClick={handleProductClick} />
        <ProductDetails product={selectedProduct} />
        {isCartVisible && <Cart cartItems={cartItems} onRemoveFromCart={removeFromCart} />} {/* Renderiza el carrito solo si es visible */}
      </div>
    </div>
  );
};

export default App;
