import React from "react";
import "../common/about.css";

import TextField from "@mui/material/TextField";

import { Link } from "react-router-dom";
import about1 from "../Images/about-1.jpg"
import about2 from "../Images/about-2.jpg"

export default function About() {
  return (

    
    <div>
      <div className="about-main-outer">
        <div className="about-1">
          <div className="about-welcome">
            <p>
              <strong className="p-t">Welcome to Cheerpeak Fashion </strong><br />
              <span className="p-m-t">A space where style meets strength. We create clothing that helps
              women feel confident, empowered, and ready for anything.</span>
            </p>
          </div>
          <div className="welcom-pic">
            <img src={about1} className="about1-pic" alt="about" />
          </div>
        </div>
        <div className="about-2">
          <div className="mid-about">
            <p className="vertical-text">About Us</p>
          </div>
          <div className="about-text">
            <p>Since 2018, <strong>Cheerpeak Fashions</strong> has created stylish, high-quality clothing that empowers women to feel confident and express their individuality. More than fashion, we're about building a supportive community through events, stories, and collaboration. Every piece we make is designed to fit your lifestyle from everyday comfort to standout moments.</p>
          </div>
          <div className="mid-about"></div>
        </div>
        <div className="about-3">
          <div className="vision-pic">
             <img src={about2} className="about2-pic" alt="about" />
          </div>
          <div className="vision-text">
        
          
          <p>
              <strong className="p-t">Our Mission</strong><br />
              <span className="p-m-t">Our mission is to empower women through fashion that’s not only beautiful but meaningful. By wearing Cheerpeak Fashions, you're joining a movement that encourages authenticity, confidence and support ,because when women uplift each other, powerful things happen.</span>
            </p>
          
          </div>
        </div>
      </div>
    </div>
  );
}
