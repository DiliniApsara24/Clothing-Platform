import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../common/home.css";

import hero1 from "../Images/dress1.jpg";
import hero2 from "../Images/dress2.jpg";
import hero3 from "../Images/dress3.jpg";
import hero4 from "../Images/dress4.jpg";
import hero5 from "../Images/dress5.jpg";
import hero6 from "../Images/dress6.jpg";

const images = [hero1, hero2, hero3, hero4, hero5, hero6];

const slideContent = [
  {
    title: "Sun-Kissed Styles",
    description:
      "Step into summer with confidence and grace. Our latest collection features lightweight linens, breathable cottons, and flowing silhouettes perfect for golden-hour strolls, beachside brunches, and everything in between. Embrace sunshine-ready style with earthy tones and flattering cuts made to turn heads."
  },
  {
    title: "Luxe Comfort, Everyday",
    description:
      "Indulge in everyday luxury with our thoughtfully designed pieces that balance comfort and class. Discover plush knitwear, buttery-soft loungewear, and tailored sets that make casual dressing effortlessly elegant. Because looking good should feel even better."
  },
  {
    title: "Own the Spotlight",
    description:
      "Bold colors. Statement silhouettes. Radiant textures. Our power pieces are crafted for those who love to stand out. Whether it’s a dramatic sleeve, a daring cut, or an unforgettable print — these are the looks that let your style do all the talking."
  },
  {
    title: "Classic Never Goes Out of Style",
    description:
      "Invest in timeless elegance. Explore our curation of classic blazers, crisp white shirts, structured dresses, and smart trousers — all designed with a modern edge. These are the versatile essentials that take you from morning meetings to evening soirées with ease."
  },
  {
    title: "Chic Redefined",
    description:
      "Minimal meets modern in this refined collection. Think monochrome palettes, high-waist cuts, oversized blazers, and sculptural accessories. For the fashion lover who believes less is more — and quality speaks louder than trends."
  },
  {
    title: "Effortless Expression",
    description:
      "Celebrate your unique style with our range of expressive pieces. From artsy prints and vibrant layers to boho chic and streetwear cool, this collection is about freedom — to explore, to express, to wear what makes you feel alive."
  }
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
