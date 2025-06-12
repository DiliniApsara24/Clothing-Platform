import React from "react";
import "../common/shopWomen.css";

import TextField from "@mui/material/TextField";

import { Link } from "react-router-dom";
import womenpic from "../Images/womenpic.png";
import cat1 from "../Images/cate1.png";
import cat2 from "../Images/cate2.png";
import cat3 from "../Images/cate3.png";
import cat4 from "../Images/cate4.png";

export default function shopWomen() {
  return (
    <div>
      <div className="women-main">
        <div className="women-o-1">
          <div className="women-text">
            <div className="women-tt-1">
              <b>
                Women’s Wear <br />
                <p className="women-tt-2">
                  Find your perfect fit from soft essentials to standout styles.
                </p>
              </b>
            </div>
          </div>
          <div className="women-pic">
            <img src={womenpic} className="women-p" alt="womenpic" />
          </div>
        </div>
        <div className="women-o-2">
          <div className="women-category-text">
            <strong className="w-t">Our Main Categories</strong>
          </div>
        </div>
        <div className="women-o-3">
          <div className="women-c-p">
            <div className="women-item-t">
              <div className="women-item-n">T-Shirts & Polos</div>
            </div>
            <div className="catg-w-01">
              <img src={cat1} className="catg-pic-w" alt="cate" />
              <div className="women-item-t">
                <div className="shop-btn-w">
                     <button className="women-btn" type="submit">
                  Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="women-c-p">
            <div className="women-item-t">
              <div className="women-item-n">Shirts</div>
            </div>
            <div className="catg-w-01">
              <img src={cat2} className="catg-pic-w" alt="cate" />
              <div className="women-item-t">
                <div className="shop-btn-w">
                     <button className="women-btn" type="submit">
                  Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="women-c-p">
            <div className="women-item-t">
              <div className="women-item-n">Hoodies & Sweatshirts</div>
            </div>
            <div className="catg-w-01">
              <img src={cat3} className="catg-pic-w" alt="cate" />
              <div className="women-item-t">
                <div className="shop-btn-w">
                     <button className="women-btn" type="submit">
                  Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="women-c-p">
            <div className="women-item-t">
              <div className="women-item-n">Pants & Trousers</div>
            </div>
            <div className="catg-w-01">
              <img src={cat4} className="catg-pic-w" alt="cate" />
              <div className="women-item-t">
                <div className="shop-btn-w">
                  <button className="women-btn" type="submit">
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
