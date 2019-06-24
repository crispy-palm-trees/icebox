import React from "react";
import logo from "../../logo.svg";
import "./App.css";

// images

import goose from "./images/goose.jpg";
import swan from "./images/swan.jpg";
import github from "./images/github.png";
import email from "./images/email.png";
import linkedin from "./images/linkedin.png";
import book from "./images/book.png";
import list from "./images/list.png";
import calendar from "./images/calendar.png";

const App: React.FC = () => {
  return (
    <div className="IceboxApp wrapper">
      <div className="app-banner" />

      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="#">
          icebox
        </a>
        <div className="collapse navbar-collapse d-sm-inline-flex flex-sm-row-reverse">
          <ul className="navbar-nav ml-auto" id="navList">
            <li className="nav-item active">
              <a className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Food Library</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Grocery List</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Stats</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Calendar</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="app-content">
        <div className="button-group">
          <button>Login</button>
          <button>Sign-up</button>
        </div>
        <div className="app-intro block-web">
          <h1>Welcome to icebox</h1>
          <p>
            Too much good food wasted? Fear no more. Join the icebox community today and reap the benefits. Save your
            food, save your money, and why not save the earth as well! Discover a library full of food knowledge. Learn
            to better preserve your food and have a personal products tracker all at your fingertips.
          </p>
          <div>Sign up today to start your food saving journey.</div>
        </div>

        <div className="app-marketing block-web">
          <h1>Use icebox</h1>
          <p>icebox provides multiple services made to help you track the food in your household.</p>
          <div className="row app-services block-web">
            <div className="col-4">
              <div className="center-icon">
                <img src={book} alt="book" />
              </div>
              <h3>Foodipedia</h3>
              <div>
                Our greatest invention yet! The Foodipedia lets you search for any food product and provides you with
                some information on how to cook, use, preserve, and much more. Try it out today!
              </div>
            </div>
            <div className="col-4">
              <div className="center-icon">
                <img src={calendar} alt="calendar" />
              </div>
              <h3>Food Tracker</h3>
              <div>
                Keep track of all the food in your home with a handy calendar tool which provides personalized
                notifications sent to your phone or email.
              </div>
            </div>
            <div className="col-4">
              <div className="center-icon">
                <img src={list} alt="list" />
              </div>
              <h3>Grocery Shopper</h3>
              <div>
                Our system takes your weekly/monthly grocery shopping habits and learns about you, generating grocery
                lists with recommendations for your next shopping trip.
              </div>
            </div>
          </div>
        </div>

        <div className="app-about block-web">
          <h1>Who are we?</h1>
          <img className="crispy-logo" alt="cpt logo" />
          <p className="who-paragraph">
            We are Crispy Palm Trees; a pair of software developers, passionate on reducing food waste with the help of
            modern technology. Together, we want to provide a way to further preserve the earth we live on today. Help
            us acheive or dream of automating the food preservation process! Feel free to visit our github repo and
            contribute to this open source project. Let us prolong our stay on earth as long as possible!
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

        <div className="app-contact block-web">
          <div className="row">
            <div className="col-6">
              <div id="map" />
              <p className="address">Our Location: 10153 King George Blvd, Surrey, BC V3T 2W1</p>
            </div>
            <div className="col-6">
              <h1>Say hello!</h1>
              <p>Email or give us a call</p>
            </div>
          </div>
        </div>
      </div>
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
    </div>
  );
};

export default App;
