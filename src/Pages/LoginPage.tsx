import "../common/login.css";
import background from "../Images/product1.jpg";
import logo from "../Images/logo.png";
import TextField from "@mui/material/TextField";
import icon1 from "../Images/icon1.png";
import icon2 from "../Images/icon2.png";
import icon3 from "../Images/icon3.png";
import { Link } from "react-router-dom";

export default function Login() {
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
              <div className="sub-5">
                <div className="button-outer">
                  <button className="login-button" type="submit">
                    Login
                  </button>
                </div>
              </div>

              <div className="sub-6">
                <strong>OR</strong>
              </div>

              <div className="sub-7">
                <div className="icon">
                  <div className="box">
                    <img src={icon1} alt="icon 1" />
                  </div>
                  <div className="box">
                    <img src={icon2} alt="icon 2" />
                  </div>
                  <div className="box">
                    <img src={icon3} alt="icon 3" />
                  </div>
                </div>
              </div>

              <div className="sub-8">
                <div className="text-L5">
                  <span className="signup-text">Don’t have an account?</span>
                  <Link to="/signup" className="signup-link">
                    Sign Up
                  </Link>
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
