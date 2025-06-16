import React from "react";
import "../common/bag.css";

import TextField from "@mui/material/TextField";

import { Link } from "react-router-dom";
import shoes from "../Images/bag.png";
import cat1w from "../Images/cate1b.png";
import cat2w from "../Images/cate2b.png";
import cat3w from "../Images/cate3b.png";
import cat4w from "../Images/cate4b.png";

export default function Shoes() {
  return (
    <div>
      <div className="bag-main">
        <div className="bag-o-1">
          <div className="bag-text">
            <div className="bag-tt-1">
              <b>
               Shoes made  for comfort and style every move


 <br />
                <p className="bag-tt-2">
                 From casual kicks to standout pairs.
                </p>
              </b>
            </div>
          </div>
          <div className="bag-pic">
            <img src={shoes} className="bag-p" alt="bag" />
          </div>
        </div>
        <div className="bag-o-2">
          <div className="bag-category-text">
            <strong className="b-t">Our Main Categories</strong>
          </div>
        </div>
        <div className="bag-o-3">
          <div className="bag-c-p">
            <div className="bag-item-t">
              <div className="bag-item-n">Casual Shoes</div>
            </div>
            <div className="catg-b-01">
              <img src={cat1w} className="catg-pic-b" alt="cate" />
              <div className="bag-item-t">
                <div className="shop-btn-b">
                     <button className="bag-btn" type="submit">
                  Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bag-c-p">
            <div className="bag-item-t">
              <div className="bag-item-n">Formal Shoes</div>
            </div>
            <div className="catg-b-01">
              <img src={cat2w} className="catg-pic-b" alt="cate" />
              <div className="bag-item-t">
                <div className="shop-btn-b">
                     <button className="bag-btn" type="submit">
                  Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bag-c-p">
            <div className="bag-item-t">
              <div className="bag-item-n">Sandals & Slippers</div>
            </div>
            <div className="catg-b-01">
              <img src={cat3w} className="catg-pic-b" alt="cate" />
              <div className="bag-item-t">
                <div className="shop-btn-b">
                     <button className="bag-btn" type="submit">
                  Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bag-c-p">
            <div className="bag-item-t">
              <div className="bag-item-n">Boots</div>
            </div>
            <div className="catg-b-01">
              <img src={cat4w} className="catg-pic-b" alt="cate" />
              <div className="bag-item-t">
                <div className="shop-btn-b">
                  <button className="bag-btn" type="submit">
                  Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
