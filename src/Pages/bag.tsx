import React from "react";
import "../common/bag.css";

import TextField from "@mui/material/TextField";

import { Link } from "react-router-dom";
import shoes from "../Images/bag.png";
import cat1w from "../Images/cate1b.png";
import cat2w from "../Images/cate2b.png";
import cat3w from "../Images/cate3b.png";
import cat4w from "../Images/cate4b.png";

export default function Bags() {
  return (
    <div>
      <div className="bag-main">
        <div className="bag-o-1">
          <div className="bag-text">
            <div className="bag-tt-1">
              <b>
              Carry your style with ease 


 <br />
                <p className="bag-tt-2">
                 Find the perfect bag for every moment.
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
              <div className="bag-item-n">Tote Bags</div>
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
              <div className="bag-item-n">Backpacks</div>
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
              <div className="bag-item-n">Crossbody Bags</div>
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
              <div className="bag-item-n">Handbags & Shoulder Bags</div>
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
