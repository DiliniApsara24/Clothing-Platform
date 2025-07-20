// src/pages/CategoryPage.tsx

import React from "react";
import { useParams } from "react-router-dom";
import "./CategoryPageMen.css";

const products = new Array(12).fill(null).map((_, index) => ({
  id: index + 1,
  name: `Product ${index + 1}`,
  image: `https://via.placeholder.com/150?text=Item+${index + 1}`,
}));

export default function CategoryPageMen() {
  const { categoryName } = useParams();

  return (
    <div className="category-page">
      <h2 className="category-title">{categoryName?.toUpperCase()}</h2>
      <div className="product-grid">
        {products.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
            <button className="add-btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
