import "../common/shopWomen.css";


import womenpic from "../Images/womenpic.png";
import cat1w from "../Images/cate1w.png";
import cat2w from "../Images/cate2w.png";
import cat3w from "../Images/cate3w.png";
import cat4w from "../Images/cate4w.png";

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
              <div className="women-item-n">Tops</div>
            </div>
            <div className="catg-w-01">
              <img src={cat1w} className="catg-pic-w" alt="cate" />
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
              <div className="women-item-n">Trousers & Pants</div>
            </div>
            <div className="catg-w-01">
              <img src={cat2w} className="catg-pic-w" alt="cate" />
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
              <div className="women-item-n">Dresses</div>
            </div>
            <div className="catg-w-01">
              <img src={cat3w} className="catg-pic-w" alt="cate" />
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
              <div className="women-item-n">Ethnic Wear</div>
            </div>
            <div className="catg-w-01">
              <img src={cat4w} className="catg-pic-w" alt="cate" />
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
