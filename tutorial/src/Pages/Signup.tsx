import React from "react";
import "../common/signup.css";
import background from "../Images/p.jpg";
import logo from "../Images/logo.png";
import TextField from "@mui/material/TextField";

export default function Signup() {
  return (
    <div>
      <div className="main-outer">
        <div className="main-sub">
          <div className="first-outer">
            <div className="text-feilds">
              <div className="sub-1">
                <div className="logo">
                  <img src={logo} className="logo-1" alt="logo" />
                </div>
              </div>

              <div className="sub-2">
                <div className="text-L1">
                  <strong>User Name or E-mail</strong>
                  <TextField
                    className="text-a"
                    placeholder="Enter Your User name or Email Address"
                    fullWidth
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>

              <div className="sub-3">
                <div className="text-L2">
                  <strong>Your Password</strong>
                  <TextField
                    className="text-b"
                    type="password" // ✅ fixed input type
                    placeholder="Enter Your Password"
                    fullWidth
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>

              <div className="sub-4">
                <div className="text-L3">
                  <div className="checkbox">
                    <label className="keepme-label">
                      <input type="checkbox" className="keepme-checkbox" />
                      Keep Me Signed In
                    </label>
                  </div>
                  <div className="forget-outer">
                    <a href="/forgot-password" className="forgot-link">
                      Forgot Password?
                    </a>
                  </div>
                </div>
              </div>
              
            </div>
          </div>

          <div className="second-outer">
            <img src={background} className="background-img" alt="background" />
          </div>
        </div>
      </div>
    </div>
  );
}
