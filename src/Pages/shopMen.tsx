import React from "react";
import "../common/shopMen.css";

import TextField from "@mui/material/TextField";

import { Link } from "react-router-dom";
import menpic from "../Images/men-pic.png";

export default function shopMen() {
  return (
    <div>
      <div className="men-main">
        <div className="men-o-1">
          <div className="men-text">
            <div className="men-tt-1">
              <b>
                Men’s Wear  <br />
                <p className="men-tt-2">Built for confidence, movement, and everyday life.</p>
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
            <div className="shop-btn"></div>
          </div>
          <div className="catg-m-01">
            <div className="shop-btn"></div>
          </div>
          <div className="catg-m-01">
            <div className="shop-btn"></div>
          </div>
          <div className="catg-m-01">
            <div className="shop-btn"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
