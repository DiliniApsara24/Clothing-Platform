// src/Pages/Home.tsx

import React from "react";
import { motion } from "framer-motion";
import "../common/home.css"; // You can add custom styles here
import heroImage from "../Images/clothing.jpg"; // Replace with your image

const Home: React.FC = () => {
  return (
    <div className="home">
      <motion.div
        className="hero-section"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        
        
      </motion.div>

      <motion.img
        src={heroImage}
        alt="Clothing banner"
        className="hero-img"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      />
    </div>
  );
};

export default Home;
