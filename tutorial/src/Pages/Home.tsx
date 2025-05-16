import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../common/home.css";

import hero1 from "../Images/dress1.jpg";
import hero2 from "../Images/dress2.jpg";
import hero3 from "../Images/dress3.jpg";
import hero4 from "../Images/dress4.jpg";
import hero5 from "../Images/dress5.jpg";
import hero6 from "../Images/dress6.png";
import hero7 from "../Images/dress7.png";
import hero8 from "../Images/dress8.png"

const images = [hero1, hero2, hero3,hero4,hero5,hero6,hero7,hero8];

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


      <div className="home-text">
        <div className="sub-text-home">
        <p className="text-home-welcome">
         <strong>Welcome to our fashion store</strong> 
        </p>
        <p className="text-home-body"></p>
        
        </div>
      </div>
    </div>
  );
};

export default Home;
