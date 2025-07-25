import React from "react";
import { useParams } from "react-router-dom";
import "../common/CategoryPage.css";
import m1 from "../Images/mt1.jpg"
import m2 from "../Images/mt2.jpg"
import m3 from "../Images/mt3.jpg"
import m4 from "../Images/mt4.jpg"
import m5 from "../Images/mt5.jpg"
import m6 from "../Images/mt6.jpg"
import m7 from "../Images/mt7.jpg"
import m8 from "../Images/mt8.jpg"
import m9 from "../Images/mt9.jpg"
import m10 from "../Images/mt10.jpg"
import m11 from "../Images/mt11.jpg"
import m12 from "../Images/mt12.jpg"
const categoryData = {
  tshirts: {
    images: [
      
      
  
],
  },
  shirts: {
    images: [
     
    ],
  },
  hoodies: {
    images: [
      
    ],
  },
  pants: {
    images: [
      
    ],
  },
};

export default function CategoryPageMen() {
  const { categoryName } = useParams();

  const category = categoryData[categoryName as keyof typeof categoryData];

  if (!category) {
    return <h2 style={{ padding: "20px" }}>Category not found</h2>;
  }

  return (
    <div className="men-i-main">
      {[0, 1, 2].map((row) => (
        <div className="men-i" key={row}>
          {category.images.slice(row * 4, row * 4 + 4).map((img, i) => (
            <div className="sub-men" key={i}>
              <div className="m-i-image">
                <img
                  src={`${img}?auto=compress&cs=tinysrgb&h=500&w=400`}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "4px",
                  }}
                />
              </div>
              <div className="add">
                <button className="m-i-btn">Add To Cart</button>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
