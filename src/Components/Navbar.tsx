import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../Images/logo.png";
import cart from "../Images/cart.png";
import "../Components/navBar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [hasNavigatedToMen, setHasNavigatedToMen] = useState(false); // track if user already navigated
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // close dropdown when clicking outside
    function handleClickOutside(event: MouseEvent) {
      if (
        shopOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setShopOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [shopOpen]);

  const handleShopClick = () => {
    if (!hasNavigatedToMen) {
      // first time click: navigate & close dropdown
      navigate("/shop/men");
      setShopOpen(false);
      setHasNavigatedToMen(true);
    } else {
      // subsequent clicks: toggle dropdown
      setShopOpen((prev) => !prev);
    }
  };

  return (
    <div className="main-nav-outer">
      <div className="sub-outer-1">
        <nav className="nav-1">
          <Link to="/">
            <img src={logo} alt="Logo" className="logo-1" />
          </Link>
        </nav>
      </div>

      <div className="sub-outer-2">
        <nav className="nav-2">
          <div className={`links ${menuOpen ? "show" : ""}`}>
            <Link to="/">Home</Link>

            <div className="shop" style={{ position: "relative" }}>
              <button
                ref={buttonRef}
                onClick={handleShopClick}
                style={{ cursor: "pointer", background: "none", border: "none", fontWeight: 500, fontSize: 16 }}
              >
                Shop
              </button>

              {shopOpen && (
                <div className="drop" ref={dropdownRef} style={{ position: "absolute", top: "100%", left: 0 }}>
                  <Link to="/shop/men" onClick={() => setShopOpen(false)}>
                    Men's Wear
                  </Link>
                  <Link to="/shop/women" onClick={() => setShopOpen(false)}>
                    Women's Wear
                  </Link>
                  <Link to="/shop/children" onClick={() => setShopOpen(false)}>
                    Kids's Wear
                  </Link>
                  <Link to="/shop/accessories" onClick={() => setShopOpen(false)}>
                    Accessories
                  </Link>
                  <Link to="/shop/bags" onClick={() => setShopOpen(false)}>
                    Bags
                  </Link>
                  <Link to="/shop/shoes" onClick={() => setShopOpen(false)}>
                    Shoes
                  </Link>
                </div>
              )}
            </div>

            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </div>
        </nav>
      </div>

      <div className="sub-outer-3">
        <div className={`links-1 ${menuOpen ? "show" : ""}`}>
          <nav className="accounts-outer">
            <Link to="/login">Log In</Link>
          </nav>

          <nav className="cart-outer">
            <Link to="/cart">
              <img src={cart} alt="Cart" className="cart" />
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
