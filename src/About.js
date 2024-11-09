import React from 'react';
import "./App.css"; 

const products = [
  { id: 1, name: 'Classic White T-Shirt', price: 25, stock: 30, sizes: ['S', 'M', 'L', 'XL'], category: 'Men', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Blue Jeans', price: 45, stock: 20, sizes: ['S', 'M', 'L', 'XL'], category: 'Men', image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Floral Dress', price: 60, stock: 25, sizes: ['S', 'M', 'L'], category: 'Women', image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Red Skirt', price: 35, stock: 15, sizes: ['S', 'M', 'L'], category: 'Women', image: 'https://via.placeholder.com/150' },
  { id: 5, name: 'Black Hoodie', price: 50, stock: 40, sizes: ['S', 'M', 'L', 'XL'], category: 'Men', image: 'https://via.placeholder.com/150' },
  { id: 1, name: 'Classic White T-Shirt', price: 25, stock: 30, sizes: ['S', 'M', 'L', 'XL'], category: 'Men', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Blue Jeans', price: 45, stock: 20, sizes: ['S', 'M', 'L', 'XL'], category: 'Men', image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Floral Dress', price: 60, stock: 25, sizes: ['S', 'M', 'L'], category: 'Women', image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Red Skirt', price: 35, stock: 15, sizes: ['S', 'M', 'L'], category: 'Women', image: 'https://via.placeholder.com/150' },
  { id: 5, name: 'Black Hoodie', price: 50, stock: 40, sizes: ['S', 'M', 'L', 'XL'], category: 'Men', image: 'https://via.placeholder.com/150' },
  { id: 1, name: 'Classic White T-Shirt', price: 25, stock: 30, sizes: ['S', 'M', 'L', 'XL'], category: 'Men', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Blue Jeans', price: 45, stock: 20, sizes: ['S', 'M', 'L', 'XL'], category: 'Men', image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Floral Dress', price: 60, stock: 25, sizes: ['S', 'M', 'L'], category: 'Women', image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Red Skirt', price: 35, stock: 15, sizes: ['S', 'M', 'L'], category: 'Women', image: 'https://via.placeholder.com/150' },
  { id: 5, name: 'Black Hoodie', price: 50, stock: 40, sizes: ['S', 'M', 'L', 'XL'], category: 'Men', image: 'https://via.placeholder.com/150' },
  { id: 1, name: 'Classic White T-Shirt', price: 25, stock: 30, sizes: ['S', 'M', 'L', 'XL'], category: 'Men', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Blue Jeans', price: 45, stock: 20, sizes: ['S', 'M', 'L', 'XL'], category: 'Men', image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Floral Dress', price: 60, stock: 25, sizes: ['S', 'M', 'L'], category: 'Women', image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Red Skirt', price: 35, stock: 15, sizes: ['S', 'M', 'L'], category: 'Women', image: 'https://via.placeholder.com/150' },
  { id: 5, name: 'Black Hoodie', price: 50, stock: 40, sizes: ['S', 'M', 'L', 'XL'], category: 'Men', image: 'https://via.placeholder.com/150' },
  
];

const ProductCard = ({ product }) => (
  <div className="product-card">
    <img src={product.image} alt={product.name} className="product-image" />
    <h3>{product.name}</h3>
    <p>Price: ${product.price}</p>
    <p>Stock: {product.stock}</p>
    <p>Category: {product.category}</p>
    <p>Available Sizes: {product.sizes.join(', ')}</p>
  </div>
);

const About = () => (
  <div className="store">
    <h1>Clothing Store</h1>
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
);

export default About;
