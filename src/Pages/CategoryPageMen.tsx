import React from "react";
import "../common/CategoryPage.css";

const productImages: string[] = [
  "https://images.pexels.com/photos/10404291/pexels-photo-10404291.jpeg",
  "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
  "https://images.pexels.com/photos/1082528/pexels-photo-1082528.jpeg",
  "https://images.pexels.com/photos/3766946/pexels-photo-3766946.jpeg",
  "https://images.pexels.com/photos/5325898/pexels-photo-5325898.jpeg",
  "https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg",
  "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg",
  "https://images.pexels.com/photos/1006227/pexels-photo-1006227.jpeg",
  "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
  "https://images.pexels.com/photos/220887/pexels-photo-220887.jpeg",
  "https://images.pexels.com/photos/977503/pexels-photo-977503.jpeg",
  "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg",
];

export default function CategoryPageMen() {
  return (
    <div>
      <div className="men-i-main">
        {[0, 1, 2].map((row) => (
          <div className="men-i" key={row}>
            {productImages.slice(row * 4, row * 4 + 4).map((img, idx) => (
              <div className="sub-men" key={idx}>
                <div className="m-i-image">
                  <img
                    src={`${img}?auto=compress&cs=tinysrgb&h=500&w=400`}
                    alt={`Product ${row * 4 + idx + 1}`}
                    style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "4px" }}
                  />
                </div>
                <div className="add">
                  <button className="m-i-btn" type="button">
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
