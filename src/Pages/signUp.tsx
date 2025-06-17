import React from "react";
import "../common/login.css";
import background from "../Images/product1.jpg";
import logo from "../Images/logo.png";
import TextField from "@mui/material/TextField";
import icon1 from "../Images/icon1.png";
import icon2 from "../Images/icon2.png";
import icon3 from "../Images/icon3.png";
import { Link } from "react-router-dom";
import 

export default function Signup() {
  return (
    <div>
      <div className="sign-main-outer">
        <div className="main-sub-sign">
          <div className="first-outer-sign"></div>
          <div className="second-outer-sign">
            <img src={signup}  className="sign-up"alt="signup" />
          </div>
        </div>
      </div>
    </div>
  );
}
