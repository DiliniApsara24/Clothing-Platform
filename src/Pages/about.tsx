import React from "react";
import "../common/about.css";

import TextField from "@mui/material/TextField";

import { Link } from "react-router-dom";
import about1 from "../Images/about-1.jpg"

export default function Login() {
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
            
          </div>
          <div className="mid-about"></div>
        </div>
        <div className="about-3">
          <div className="vision-pic"></div>
          <div className="vision-text"></div>
        </div>
      </div>
    </div>
  );
}
