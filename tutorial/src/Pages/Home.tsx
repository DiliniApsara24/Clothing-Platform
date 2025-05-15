import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../common/home.css";

import hero1 from "../Images/dress1.jpg";
import hero2 from "../Images/dress2.jpg";
import hero3 from "../Images/dress3.jpg";

const images = [hero1, hero2, hero3];

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
      <div className="home">
        {/* Hero Text Section */}
        <motion.div
          className="hero-section"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
         
        </motion.div>

        {/* Slideshow Section */}
        <div className="hero-slideshow">
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={images[index]}
              alt={`Hero ${index + 1}`}
              className="hero-img"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
            />
          </AnimatePresence>
        </div>
      </div>

      {/* Additional Section */}
      <div className="home-text">
        <h2 className="h-text-1"> Welcome To Cheerpeak Fashion</h2>
        <p>
          Welcome To Cheerpeak Fashion <br />
        </p>
      </div>
    </div>
  );
};

export default Home;
