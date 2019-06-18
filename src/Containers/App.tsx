import React from "react";
import logo from "./logo.svg";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="IceboxApp wrapper">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          icebox
        </a>
        <div className="collapse navbar-collapse d-sm-inline-flex flex-sm-row-reverse">
          <ul className="navbar-nav ml-auto">
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

      <div className="app-banner">Insert Image Here</div>

      <div className="app-intro">
        <h1>Welcome to icebox</h1>
        <p>
          Too much good food wasted? Fear no more. Join the icebox community
          today and reap the benefits. Save your food, save your money, and why
          not save the earth as well! Discover a library full of food knowledge.
          Learn to better preserve your food and have a personal products
          tracker all at your fingertips.
        </p>
        <div>Sign up today to start your food saving journey.</div>
      </div>

      <div className="app-marketing">
        <h1>icebox</h1>
        <p>
          Icebox provides multiple services made to help you track the food in
          your household.
        </p>
        <div className="row">
          <div className="col-3">
            <img />
            <h3>Foodipedia</h3>
            <div>
              Our greatest invention yet! The Foodipedia lets you search for any
              food product and provides you with some information on how to
              cook, use, preserve, and much more. Try it out today!
            </div>
          </div>
          <div className="col-3">
            <img />
            <h3>Food Tracker</h3>
            <div>
              Keep track of all the food in your home with a handy calendar tool
              which provides personalized notifications sent to your phone or
              email.
            </div>
          </div>
          <div className="col-3">
            <img />
            <h3>Grocery Shopper</h3>
            <div>
              Our system takes your weekly/monthly grocery shopping habits and
              learns about you, generating grocery lists with recommendations
              for your next shopping trip.
            </div>
          </div>
        </div>
      </div>

      <div className="app-about">
        <h1>Who are we?</h1>
        <div className="row">
          <img className="col-6" alt="group-photo" />
          <div>
            <p>
              We are Crispy Palm Trees; a pair of software developers,
              passionate on reducing food waste with the help of modern
              technology. Together, we want to provide a way to further preserve
              the earth we live on today. Help us acheive or dream of automating
              the food preservation process! Feel free to visit our github repo
              and contribute to this open source project. Let us prolong our
              stay on earth as long as possible!
            </p>
          </div>
        </div>
        <div className="profiles">
          <div className="profile-card">
            <img />
            <div>Shelzebub</div>
            <div>Turkey</div>
            <div className="row">
              <a href="">
                <img className="col-6" alt="email" />
              </a>
              <a href="">
                <img className="col-6" alt="linkedin" />
              </a>
            </div>
          </div>
          <div className="profile-card">
            <img />
            <div>Jaxon</div>
            <div>Eggroll</div>
            <div className="row">
              <a href="">
                <img className="col-6" alt="email" />
              </a>
              <a href="">
                <img className="col-6" alt="linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="app-affiliates-banner">
        <div className="row">
          <div className="col-6">
            <img alt="friends" />
          </div>
          <div className="col-6">
            <h1>Say hello!</h1>
            <p>Email or give us a call</p>
          </div>
        </div>
      </div>

      <footer>
        <div className="">
          <h2>Save with us!</h2>
          <div>We are open source. Help improve icebox!</div>
          <button>Collaborate</button>
        </div>
        <div>
          &copy;2019 Copyright Crispy Palm Trees | Software Developer | Zero
          Food Waste
        </div>
      </footer>
    </div>
  );
};

export default App;
