import "../common/accessories.css";


import cat1a from "../Images/cate1a.png";
import cat2a from "../Images/cate2a.png";
import cat3a from "../Images/cate3a.jpg";
import cat4a from "../Images/cate4a.jpg";
import accessories from "../Images/access.png"
export default function Accessories() {
  return (
    <div>
      <div className="acces-main">
        <div className="acces-o-1">
          <div className="acces-text">
            <div className="acces-tt-1">
              <b>
               Find modern accessories to complete your look  <br />
                <p className="acces-tt-2">
                 stylish, fun, and full of personality.
                </p>
              </b>
            </div>
          </div>
          <div className="acces-pic">
            <img src={accessories} className="acces-p" alt="acces" />
          </div>
        </div>
        <div className="acces-o-2">
          <div className="acces-category-text">
            <strong className="a-t">Our Main Categories </strong>
          </div>
        </div>
        <div className="acces-o-3">
          <div className="acces-c-p">
            <div className="acces-item-t">
              <div className="acces-item-n">Hats & Caps</div>
            </div>
            <div className="catg-a-01">
              <img src={cat1a} className="catg-pic-a" alt="cate" />
              <div className="acces-item-t">
                <div className="shop-btn-a">
                  <button className="acces-btn" type="submit">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="acces-c-p">
            <div className="acces-item-t">
              <div className="acces-item-n">Hair Accessories</div>
            </div>
            <div className="catg-a-01">
              <img src={cat2a} className="catg-pic-a" alt="cate" />
              <div className="acces-item-t">
                <div className="shop-btn-a">
                  <button className="acces-btn" type="submit">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="acces-c-p">
            <div className="acces-item-t">
              <div className="acces-item-n">Belts</div>
            </div>
            <div className="catg-a-01">
              <img src={cat3a} className="catg-pic-a" alt="cate" />
              <div className="acces-item-t">
                <div className="shop-btn-a">
                  <button className="acces-btn" type="submit">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="acces-c-p">
            <div className="acces-item-t">
              <div className="acces-item-n">Socks & Tights</div>
            </div>
            <div className="catg-a-01">
              <img src={cat4a} className="catg-pic-a" alt="cate" />
              <div className="acces-item-t">
                <div className="shop-btn-a">
                  <button className="acces-btn" type="submit">
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
