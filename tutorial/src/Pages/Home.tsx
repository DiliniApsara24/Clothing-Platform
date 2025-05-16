import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../common/home.css";

import hero1 from "../Images/dress1.jpg";
import hero2 from "../Images/dress2.jpg";
import hero3 from "../Images/dress3.jpg";
import hero4 from "../Images/dress4.jpg";
import hero5 from "../Images/dress5.jpg";
import hero6 from "../Images/dress6.jpg";
import hero7 from "../Images/dress7.jpg";
import hero8 from "../Images/dress8.jpg";
import hero9 from "../Images/dress9.jpg";
import hero10 from "../Images/dress10.jpg";

const images = [hero1, hero2, hero3, hero4, hero5, hero6, hero7, hero8, hero9, hero10];

const Home: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="main-home-outer">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="background-slideshow"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          style={{ backgroundImage: `url(${images[index]})` }}
        />
      </AnimatePresence>

      <div className="home">
        {/* Hero Text Section */}
        <motion.div
          className="hero-section"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-home-welcome">Welcome to our fashion store</h1>
        </motion.div>

        <div className="home-text">
          <div className="sub-text-home">
            <p className="text-home-body">
              Discover the best styles, curated for elegance and comfort.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
