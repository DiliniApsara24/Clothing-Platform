import React from "react";
import { useParams } from "react-router-dom";
import "../common/CategoryPage.css";

const categoryData = {
  tshirts: {
    images: [
  
],
  },
  shirts: {
    images: [
      "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg",
      "https://images.pexels.com/photos/1100794/pexels-photo-1100794.jpeg",
      "https://images.pexels.com/photos/428341/pexels-photo-428341.jpeg",
      "https://images.pexels.com/photos/1027139/pexels-photo-1027139.jpeg",
      "https://images.pexels.com/photos/1152995/pexels-photo-1152995.jpeg",
      "https://images.pexels.com/photos/2905549/pexels-photo-2905549.jpeg",
      "https://images.pexels.com/photos/843476/pexels-photo-843476.jpeg",
      "https://images.pexels.com/photos/936076/pexels-photo-936076.jpeg",
      "https://images.pexels.com/photos/2851716/pexels-photo-2851716.jpeg",
      "https://images.pexels.com/photos/62693/pexels-photo-62693.jpeg",
      "https://images.pexels.com/photos/1420719/pexels-photo-1420719.jpeg",
      "https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg",
    ],
  },
  hoodies: {
    images: [
      "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg",
      "https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg",
      "https://images.pexels.com/photos/313690/pexels-photo-313690.jpeg",
      "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg",
      "https://images.pexels.com/photos/428342/pexels-photo-428342.jpeg",
      "https://images.pexels.com/photos/4256257/pexels-photo-4256257.jpeg",
      "https://images.pexels.com/photos/4215110/pexels-photo-4215110.jpeg",
      "https://images.pexels.com/photos/3793213/pexels-photo-3793213.jpeg",
      "https://images.pexels.com/photos/4215112/pexels-photo-4215112.jpeg",
      "https://images.pexels.com/photos/1152993/pexels-photo-1152993.jpeg",
      "https://images.pexels.com/photos/5744256/pexels-photo-5744256.jpeg",
      "https://images.pexels.com/photos/7528819/pexels-photo-7528819.jpeg",
    ],
  },
  pants: {
    images: [
      "https://images.pexels.com/photos/2529146/pexels-photo-2529146.jpeg",
      "https://images.pexels.com/photos/1005632/pexels-photo-1005632.jpeg",
      "https://images.pexels.com/photos/2613266/pexels-photo-2613266.jpeg",
      "https://images.pexels.com/photos/2983467/pexels-photo-2983467.jpeg",
      "https://images.pexels.com/photos/2990645/pexels-photo-2990645.jpeg",
      "https://images.pexels.com/photos/1324454/pexels-photo-1324454.jpeg",
      "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg",
      "https://images.pexels.com/photos/2691419/pexels-photo-2691419.jpeg",
      "https://images.pexels.com/photos/3748224/pexels-photo-3748224.jpeg",
      "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg",
      "https://images.pexels.com/photos/2088423/pexels-photo-2088423.jpeg",
      "https://images.pexels.com/photos/4215114/pexels-photo-4215114.jpeg",
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
