import React from "react";
import "../common/shoes.css";

import TextField from "@mui/material/TextField";

import { Link } from "react-router-dom";
import shoes from "../Images/shoes.png";
import cat1w from "../Images/cate1s.png";
import cat2w from "../Images/cate2s.png";
import cat3w from "../Images/cate3s.png";
import cat4w from "../Images/cate4s.png";

export default function Shoes() {
  return (
    <div>
      <div className="shoes-main">
        <div className="shoes-o-1">
          <div className="shoes-text">
            <div className="shoes-tt-1">
              <b>
               Shoes made  for comfort and style every move


 <br />
                <p className="shoes-tt-2">
                 From casual kicks to standout pairs.
                </p>
              </b>
            </div>
          </div>
          <div className="shoes-pic">
            <img src={shoes} className="shoes-p" alt="shoes" />
          </div>
        </div>
        <div className="shoes-o-2">
          <div className="shoes-category-text">
            <strong className="s-t">Our Main Categories</strong>
          </div>
        </div>
        <div className="shoes-o-3">
          <div className="shoes-c-p">
            <div className="shoes-item-t">
              <div className="shoes-item-n">Casual Shoes</div>
            </div>
            <div className="catg-s-01">
              <img src={cat1w} className="catg-pic-s" alt="cate" />
              <div className="shoes-item-t">
                <div className="shop-btn-s">
                     <button className="shoes-btn" type="submit">
                  Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="shoes-c-p">
            <div className="shoes-item-t">
              <div className="shoes-item-n">Formal Shoes</div>
            </div>
            <div className="catg-s-01">
              <img src={cat2w} className="catg-pic-s" alt="cate" />
              <div className="shoes-item-t">
                <div className="shop-btn-s">
                     <button className="shoes-btn" type="submit">
                  Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="shoes-c-p">
            <div className="shoes-item-t">
              <div className="shoes-item-n">Sandals & Slippers</div>
            </div>
            <div className="catg-s-01">
              <img src={cat3w} className="catg-pic-s" alt="cate" />
              <div className="shoes-item-t">
                <div className="shop-btn-s">
                     <button className="shoes-btn" type="submit">
                  Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="shoes-c-p">
            <div className="shoes-item-t">
              <div className="shoes-item-n">Boots</div>
            </div>
            <div className="catg-s-01">
              <img src={cat4w} className="catg-pic-s" alt="cate" />
              <div className="shoes-item-t">
                <div className="shop-btn-s">
                  <button className="shoes-btn" type="submit">
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
