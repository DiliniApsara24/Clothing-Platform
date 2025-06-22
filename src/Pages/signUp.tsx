import React from "react";
import "../common/signUp.css";
import background from "../Images/back-sign.jpg";
import logo from "../Images/logo.png";
import TextField from "@mui/material/TextField";
import icon1 from "../Images/icon1.png";
import icon2 from "../Images/icon2.png";
import icon3 from "../Images/icon3.png";
import { Link } from "react-router-dom";
import logosign from "../Images/logo.png";

export default function Signup() {
  return (
    <div>
      <div className="sign-main-outer">
        <div className="main-sub-sign">
          <div className="first-outer-sign">
            <img
              src={background}
              className="background-img-sign"
              alt="background"
            />
          </div>
          <div className="second-outer-sign">
            <div className="sec-sign">
              <div className="sign-logo-p">
                <div className="sign-logo">
                  <img src={logosign} className="logo-sign-1" alt="logo" />
                </div>
              </div>
              <div className="sign-text-P">
                <div className="sign-text-1">
                  <div className="sign-sub">
                    <div className="text-s">
                      <strong>First Name</strong>
                      <TextField
                        className="text-a-s"
                        placeholder="Enter Your First Name"
                        fullWidth
                        variant="outlined"
                        size="small"
                      />
                    </div>
                  </div>
                  <div className="sign-sub">
                    <div className="text-s">
                      <strong>Last Name</strong>
                      <TextField
                        className="text-a-s"
                        placeholder="Enter Your Last Name"
                        fullWidth
                        variant="outlined"
                        size="small"
                      />
                    </div>
                  </div>
                  <div className="sign-sub">
                    <div className="text-s">
                    <strong>Email</strong>
                      <TextField
                        className="text-a-s"
                        placeholder="Enter Your Email Address"
                        fullWidth
                        variant="outlined"
                        size="small"
                      />
     
                    </div>
                  </div>
                </div>
                <div className="sign-text-1">
                  <div className="sign-sub">
                    <div className="text-s">
                      <strong>Username</strong>
                      <TextField
                        className="text-a-s"
                        placeholder="Enter Your Username "
                        fullWidth
                        variant="outlined"
                        size="small"
                      />
                    </div>
                  </div>
                  <div className="sign-sub">
                    <div className="text-s">
                      <strong>Passowrd</strong>
                      <TextField
                        className="text-a-s"
                        type="password"
                        placeholder="Enter Your Passowrd"
                        fullWidth
                        variant="outlined"
                        size="small"
                      />
                    </div>
                  </div>
                  <div className="sign-sub">
                    <div className="text-s">
                      <strong>Confirm Passowrd</strong>
                      <TextField
                        className="text-a-s"
                        type="password"
                        placeholder="Re-enter Passowrd"
                        fullWidth
                        variant="outlined"
                        size="small"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="sign-text-button">
                <div className="button-outer-sign">
                  <button className="sign-button" type="submit">
                    Sign Up
                  </button>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
