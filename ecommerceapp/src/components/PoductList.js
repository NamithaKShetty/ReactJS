import React, { useState } from "react";
import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Laptop", price: 1000, image: "https://via.placeholder.com/150" },
  { id: 2, name: "Smartphone", price: 500, image: "https://via.placeholder.com/150" },
  { id: 3, name: "Headphones", price: 100, image: "https://via.placeholder.com/150" }
];

function ProductList({ cart, setCart }) {
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">🛍️ Product Catalogue</h1>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4">
            <div className="card mb-4">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">${product.price}</p>
                <button onClick={() => addToCart(product)} className="btn btn-primary">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link to="/cart" className="btn btn-warning mt-3">View Cart ({cart.length})</Link>
    </div>
  );
}

export default ProductList;
