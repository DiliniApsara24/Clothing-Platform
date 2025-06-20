import React from "react";
import "../common/signUp.css";
import background from "../Images/back-sign.png";
import logo from "../Images/logo.png";
import TextField from "@mui/material/TextField";
import icon1 from "../Images/icon1.png";
import icon2 from "../Images/icon2.png";
import icon3 from "../Images/icon3.png";
import { Link } from "react-router-dom";
import logosign from "../Images/logo.png"

export default function Signup() {
  return (
    <div>
      <div className="sign-main-outer">
        <div className="main-sub-sign">
          <div className="first-outer-sign">
             <img src={background} className="background-img-sign" alt="background" />
          </div>
          <div className="second-outer-sign">
            <div className="sec-sign">
              <div className="sign-logo-p">
                             <div className="sign-logo">

                 <img src={logosign} className="logo-sign-1" alt="logo" />
              </div>
              </div> 
              <div className="sign-text-P">
              <div className="sign-text-1"></div>
              <div className="sign-text-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


