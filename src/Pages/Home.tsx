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


const images = [hero1, hero2, hero3, hero4, hero5, hero6,hero7];

const slideContent = [
  {
    title: "Welcome To Cheerpeak Fashion Store",
    description:
      "Step into summer with confidence and grace.  linens, breathable cottons."
  },
  {
    title: "Luxe Comfort, Everyday",
    description:
      "Indulge in everyday luxury with our thoughtfully designed pieces that balance comfort and class."
  },
  {
    title: "Own the Spotlight",
    description:
      "Bold colors. Statement silhouettes. Radiant textures. Our power pieces are crafted for those who love to stand out."
  },
  {
    title: "Classic Never Goes Out of Style",
    description:
      "Invest in timeless elegance. Explore our curation of classic blazers."
  },
  {
    title: "Chic Redefined",
    description:
      "Minimal meets modern in this refined collection. Think monochrome palettes, high-waist cuts, oversized blazers, and sculptural accessories. "
  },
  {
    title: "Effortless Expression",
    description:
      "Celebrate your unique style with our range of expressive pieces. "
  },

  {
    title: " Expression",
    description:
      "Celebrate your unique style with our range of expressive pieces. "
  },

  {
    title: " Expression--1",
    description:
      "Celebrate your unique style with our range of expressive pieces. "
  },

   {
    title: " Expression--1",
    description:
      "Celebrate your unique style with our range of expressive pieces. "
  },


];


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
        <motion.div
          className="hero-section"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-home-welcome">{slideContent[index].title}</h1>
        </motion.div>

        <div className="home-text">
          <div className="sub-text-home">
            <p className="text-home-body">{slideContent[index].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
