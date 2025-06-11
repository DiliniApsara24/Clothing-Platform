import React from "react";
import "../common/shopMen.css";

import TextField from "@mui/material/TextField";

import { Link } from "react-router-dom";
import menpic from "../Images/men-pic.png";
import cat1 from "../Images/cate1.png"
import cat2 from "../Images/cate2.png"
import cat3 from "../Images/cate3.png"
import cat4 from "../Images/cate4.png"

export default function shopMen() {
  return (
    <div>
      <div className="men-main">
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
        <div className="men-o-2">
          <div className="category-text">
            <strong className="m-t">Our Main Categories</strong>
          </div>
        </div>
        <div className="men-o-3">
          <div className="catg-m-01">
            <div className="men-c-p">
            <img src={cat1} className="catg-pic" alt="cate" />
</div>
            <div className="shop-btn"></div>
          </div>
          <div className="catg-m-01">
            <div className="men-c-p">
            <img src={cat2} className="catg-pic" alt="cate" />
</div>
            <div className="shop-btn"></div>
          </div>
          <div className="catg-m-01">
             <div className="men-c-p">
            <img src={cat3} className="catg-pic" alt="cate" />
</div>
            <div className="shop-btn"></div>
          </div>
          <div className="catg-m-01">
             <div className="men-c-p">
            <img src={cat4} className="catg-pic" alt="cate" />
</div>
            <div className="shop-btn"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
