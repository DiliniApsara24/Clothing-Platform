import React, { useState } from "react";
import "../common/shopMen.css";

import menpic from "../Images/men-pic.png";
import cat1 from "../Images/cate1.png";
import cat2 from "../Images/cate2.png";
import cat3 from "../Images/cate3.png";
import cat4 from "../Images/cate4.png";

export default function ShopMen() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    { name: "T-Shirts & Polos", img: cat1 },
    { name: "Shirts", img: cat2 },
    { name: "Hoodies & Sweatshirts", img: cat3 },
    { name: "Pants & Trousers", img: cat4 },
  ];

  // 🧠 All 12 products for each category
  const productsData = {
    "T-Shirts & Polos": Array.from({ length: 12 }, (_, i) => ({
      id: `tshirt-${i}`,
      name: `T-Shirt Style ${i + 1}`,
      image: `https://source.unsplash.com/300x400/?tshirt,man&sig=${i}`,
    })),
    Shirts: Array.from({ length: 12 }, (_, i) => ({
      id: `shirt-${i}`,
      name: `Classic Shirt ${i + 1}`,
      image: `https://source.unsplash.com/300x400/?shirt,man&sig=${i}`,
    })),
    "Hoodies & Sweatshirts": Array.from({ length: 12 }, (_, i) => ({
      id: `hoodie-${i}`,
      name: `Hoodie Look ${i + 1}`,
      image: `https://source.unsplash.com/300x400/?hoodie,man&sig=${i}`,
    })),
    "Pants & Trousers": Array.from({ length: 12 }, (_, i) => ({
      id: `pants-${i}`,
      name: `Trousers ${i + 1}`,
      image: `https://source.unsplash.com/300x400/?pants,man&sig=${i}`,
    })),
  };

  return (
    <div className="men-main">
      {/* Top Section */}
      <div className="men-o-1">
        <div className="men-text">
          <div className="men-tt-1">
            <b>
              Men’s Wear <br />
              <p className="men-tt-2">
                Built for confidence, movement, and everyday life.
              </p>
            </b>
          </div>
        </div>
        <div className="men-pic">
          <img src={menpic} className="men-p" alt="menpic" />
        </div>
      </div>

      {/* Category Section */}
      <div className="men-o-2">
        <strong className="m-t">Our Main Categories</strong>
      </div>

      <div className="men-o-3">
        {categories.map((cat, index) => (
          <div className="men-c-p" key={index}>
            <div className="item-t">
              <div className="item-n">{cat.name}</div>
            </div>
            <div className="catg-m-01">
              <img src={cat.img} className="catg-pic" alt={cat.name} />
              <div className="item-t">
                <div className="shop-btn">
                  <button
                    className="men-btn"
                    type="button"
                    onClick={() => setSelectedCategory(cat.name)}
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Products List */}
      {selectedCategory && (
        <div className="products-grid">
          <h2>{selectedCategory} Items</h2>
          <div className="products-list">
            {productsData[selectedCategory].map((item) => (
              <div className="product-card" key={item.id}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="product-img"
                />
                <p>{item.name}</p>
                <button className="add-cart-btn">Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
