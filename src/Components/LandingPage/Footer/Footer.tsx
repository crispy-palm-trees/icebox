import React from "react";

import "./Footer.scss";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="row footer-filler-wrapper">
        <div className="footer-filler col-6">
          <div className="social-media-icons">
            <div>Connect with us</div>
            <div>We are open source. Help improve icebox!</div>
            <button>Collaborate</button>
            <a href="https://www.facebook.com/" target="_blank" className="facebook">
              {/* <img src="./images/facebook-logo.png" alt="facebook" /> */}
            </a>
            <a href="https://www.linkedin.com/" target="_blank" className="linkedin">
              {/* <img src="./images/linkedin-logo.png" alt="linked" /> */}
            </a>
            <a href="https://www.instagram.com/" target="_blank" className="instagram">
              {/* <img src="./images/instagram-logo.png" alt="instagram" /> */}
            </a>
            <a href="https://twitter.com/" target="_blank" className="twitter">
              {/* <img src="./images/twitter-logo.png" alt="twitter" /> */}
            </a>
          </div>
        </div>
        <div className="footer-about-company col-6">
          <strong>Crispy Palm Trees</strong>
          <br />
          10153 King George Blvd, Surrey, BC V3T 2W1 <br />
          (604)000-0000
        </div>
      </div>

      <div className="footer-copyright">
        <hr />
        &copy; 2019 Copyright Crispy Palm Trees | All rights reserved | Software Developer | Zero Food Waste
      </div>
    </footer>
  );
};

export default Footer;
