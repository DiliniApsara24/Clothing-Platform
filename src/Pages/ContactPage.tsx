import "../common/contact.css";


import Con1 from "../Images/phone-call.png";
import Con2 from "../Images/chat.png";
import Con3 from "../Images/order-tracking.png";
import contact from "../Images/cont.png"

export default function Contact() {
  return (
    <div>
      <div className="cont-main">
        <div className="contact-outer1">
          <div className="con-text">
            

          
          
          <p>
              <strong className="c-t-c">Contact Us About Cheerpeak Fashions </strong><br />
              <span className="c-m-t">We’d love to help you with anything,whether it’s about your order, our latest styles, sizing help, or anything fashion-related. </span>
            </p>
          
          
          
          
          
          </div>
          <div className="con-pic">
             <img src={contact} className="con-pic" alt="contact" />
          </div>
        </div>
        <div className="contact-outer2">
          <div className="info-outer">
            <div className="info-1">
              <div className="c-pic">
                <img src={Con1} className="con1" alt="contact" />
              </div>
              <div className="info-t">
                <strong className="in-tt"> Call or Email Us</strong>
                <br />
                Want to speak to someone directly? <br />
                Phone: +1 (123) 456-0890 <br />
                Email: support@cheerpeak.com
              </div>
              <div className="c-btn">
                <button className="con-btn" type="submit">
                  Send an Email
                </button>
              </div>
            </div>
            <div className="info-1">
              <div className="c-pic">
                <img src={Con2} className="con1" alt="contact" />
              </div>
              <div className="info-t">
                <strong className="in-tt">Chat With Our Style Team</strong>
                <br />
                Not sure about sizing or styling? Chat with our team for quick
                advice and personalized help.
              </div>
              <div className="c-btn1">
                <button className="con-btn" type="submit">
                  Chat Now
                </button>
              </div>
            </div>
            <div className="info-1">
              <div className="c-pic">
                <img src={Con3} className="con1" alt="contact" />
              </div>
              <div className="info-t1">
                <strong className="in-tt">Track or Ask About an Order</strong>
                <br />
                Need help with shipping, returns, or your order status? We're
                here to help.
              </div>
              <div className="c-btn1">
                <button className="con-btn" type="submit">
                  Request Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
