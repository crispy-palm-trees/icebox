import React from "react";

import "./AboutUs.scss";

import goose from "./images/goose.jpg";
import swan from "./images/swan.jpg";

import github from "./images/github.png";
import email from "./images/email.png";
import linkedin from "./images/linkedin.png";

const AboutUs: React.FC = () => {
  return (
    <div className="app-about block-web">
      <h1>Who are we?</h1>
      <img className="crispy-logo" alt="cpt logo" />
      <p className="who-paragraph">
        We are Crispy Palm Trees; a pair of software developers, passionate on reducing food waste with the help of
        modern technology. Together, we want to provide a way to further preserve the earth we live on today. Help us
        acheive or dream of automating the food preservation process! Feel free to visit our github repo and contribute
        to this open source project. Let us prolong our stay on earth as long as possible!
      </p>
      <div className="profiles">
        <div className="row">
          <div className="profile-card col-6">
            <img src={goose} alt="goose" />
            <div>Jaxon</div>
            <div>Goose</div>
            <div>
              <a href="">
                <img className="custom-icon" src={email} alt="email" />
              </a>
              <a href="">
                <img className="custom-icon" src={linkedin} alt="linkedin" />
              </a>
            </div>
          </div>
          <div className="profile-card col-6">
            <img src={swan} alt="swan" />
            <div>Shelzebub</div>
            <div>Swan</div>
            <div>
              <a href="">
                <img className="custom-icon" src={email} alt="email" />
              </a>
              <a href="">
                <img className="custom-icon" src={linkedin} alt="linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
