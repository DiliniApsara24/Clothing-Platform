import React from "react";
import "../common/child.css";

import TextField from "@mui/material/TextField";

import { Link } from "react-router-dom";
import womenpic from "../Images/child.png";
import cat1c from "../Images/cate1c.png";
import cat2c from "../Images/cate2c.png";
import cat3c from "../Images/cate3c.png";
import cat4c from "../Images/cate4c.png";

export default function Children() {
  return (
    <div>
      <div className="child-main">
        <div className="child-o-1">
          <div className="child-text">
            <div className="child-tt-1">
              <b>
                Kids’s Wear  <br />
                <p className="child-tt-2">
                 Bright, soft, and durable styles they’ll love every day.
                </p>
              </b>
            </div>
          </div>
          <div className="child-pic">
            <img src={womenpic} className="child-p" alt="child" />
          </div>
        </div>
        <div className="child-o-2">
          <div className="child-category-text">
            <strong className="c-t">Our Main Categories</strong>
          </div>
        </div>
        <div className="child-o-3">
          <div className="child-c-p">
            <div className="child-item-t">
              <div className="child-item-n">T-Shirts & Shirts</div>
            </div>
            <div className="catg-c-01">
              <img src={cat1c} className="catg-pic-c" alt="cate" />
              <div className="child-item-t">
                <div className="shop-btn-c">
                  <button className="child-btn" type="submit">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="child-c-p">
            <div className="child-item-t">
              <div className="child-item-n">Shorts & joggers,</div>
            </div>
            <div className="catg-c-01">
              <img src={cat2c} className="catg-pic-c" alt="cate" />
              <div className="child-item-t">
                <div className="shop-btn-c">
                  <button className="child-btn" type="submit">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="child-c-p">
            <div className="child-item-t">
              <div className="child-item-n">Casual and party dresses</div>
            </div>
            <div className="catg-c-01">
              <img src={cat3c} className="catg-pic-c" alt="cate" />
              <div className="child-item-t">
                <div className="shop-btn-c">
                  <button className="child-btn" type="submit">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="child-c-p">
            <div className="child-item-t">
              <div className="child-item-n">Nightwear</div>
            </div>
            <div className="catg-c-01">
              <img src={cat4c} className="catg-pic-c" alt="cate" />
              <div className="child-item-t">
                <div className="shop-btn-c">
                  <button className="child-btn" type="submit">
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
