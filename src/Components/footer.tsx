import React from "react";
import logo from "../Images/logo.png";
import "../Components/footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer-outer">
      <div className="footer-content">

        {/* Left: Logo & Description */}
        <div className="footer-section">
          <img src={logo} alt="Logo" className="footer-logo" />
          <p className="footer-desc">
            Style meets comfort. Explore the latest trends in fashion at Cheearpeak stores.
          </p>
        </div>

        {/* Center: Contact Info */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: info@cheerpeakfashions.com</p>
          <p>Phone: +94 76 123 4567</p>
          <p>Location: Colombo, Sri Lanka</p>
        </div>

        {/* Right: Newsletter */}
        <div className="footer-section">
          <h4>Stay Updated</h4>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Cheerpeak Fashion. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
