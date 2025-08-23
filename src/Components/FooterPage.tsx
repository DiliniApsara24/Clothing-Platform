import React from "react";
import "../Components/footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer-outer">
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Cheerpeak Fashion. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
