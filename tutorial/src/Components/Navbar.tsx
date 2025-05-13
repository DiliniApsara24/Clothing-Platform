import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";
import cart from "../Images/cart.png";
import "../Components/navBar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.className = dark ? "dark" : "";
  }, [dark]);

  return (
    <div className="main-nav-outer">
        <div className="main-nav-sub">
    <nav className={dark ? "nav dark" : "nav"}>
        
      <div className="left">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>

      <div className={`links ${menuOpen ? "show" : ""}`}>
        <Link to="/">Home</Link>

        <div className="shop">
          <button onClick={() => setShopOpen(!shopOpen)}>Shop ▾</button>
          {shopOpen && (
            <div className="drop">
              <Link to="/shop/men">Men's Wear</Link>
              <Link to="/shop/women">Women's Wear</Link>
              <Link to="/shop/children">Children's Wear</Link>
              <Link to="/shop/accessories">Accessories</Link>
              <Link to="/shop/bags">Bags</Link>
              <Link to="/shop/shoes">Shoes</Link>
            </div>
          )}
        </div>

        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">
          <img src={cart} alt="Cart" className="cart" />
        </Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>

        <button onClick={() => setDark(!dark)} className="mode">
          {dark ? "☀️" : "🌙"}
        </button>
      </div>

      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
    </nav>
    </div>
    </div>
  );
};

export default Navbar;
