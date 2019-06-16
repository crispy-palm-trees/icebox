import React from "react";
import logo from "./logo.svg";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="IceboxApp wrapper">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
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
            <li className="nav-item">
              <a className="nav-link">Hello</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="app-banner">Insert Image Here</div>
      <button className="btn">Login</button>
      <button className="btn">Sign Up</button>

      <div className="app-intro">
        <h1>Food Waste</h1>
        <p>
          Food waste is a major problem in the Metro Vancouver area. This
          problem is caused by a general lack of awareness of the impact that
          food waste has on the environment.
        </p>
        <div>
          Join us in our efforts to help raise awareness about food waste and
          the monetary benefits that come along with reducing food waste in the
          Greater Vancouver area.
        </div>
        <img alt="Video" />
      </div>

      <div className="app-marketing">
        <h1>Icebox</h1>
        <p>
          Icebox is a web based grocery application that keeps track of items
          currently in your fridge as well as their expiry dates.
        </p>
        <div className="row">
          <div className="col-3">
            <img />
            <h3>Save food</h3>
            <div>
              Keep track of all the food in your kitchen while reducing food
              waste. Help save the world!
            </div>
          </div>
          <div className="col-3">
            <img />
            <h3>Save money</h3>
            <div>
              Stay up to date with your finances as we show how much money you
              could potentially be saving!
            </div>
          </div>
          <div className="col-3">
            <img />
            <h3>Save the environment</h3>
            <div>
              Its in the name! Keep track of your food's expiry dates with our
              reminders. Our calendar views will keep you posted on your food's
              life.
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
              We are a group of BCIT students with a mission to end food waste.
              In collaboration with Metro Vancouver, we've created Icebox, a web
              application that keeps track of the grocery items in your
              possession, to help in our fight against food waste.
            </p>
            <img alt="metro-vancouver-logo" />
            <img alt="bcit-logo" />
          </div>
        </div>
        <div className="profiles">
          <div className="profile-card">
            <img />
            <div>Fname Lname</div>
            <div>Role</div>
            <div className="row">
              <img className="col-6" alt="email" />
              <img className="col-6" alt="linkedin" />
            </div>
          </div>
          <div className="profile-card">
            <img />
            <div>Fname Lname</div>
            <div>Role</div>
            <div className="row">
              <img className="col-6" alt="email" />
              <img className="col-6" alt="linkedin" />
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
            <h1>Our Freinds split screen</h1>
            <p>Check out our friends who also love to reduce food waste!</p>
          </div>
        </div>
      </div>

      <div className="app-affiliates">
        <h1>Affiliates</h1>
        <div className="affiliates-card">
          <h1>Affliate 1</h1>
          <div className="row">
            <img className="col-6" alt="affiliate1-img" />
            <div className="col-6">Something about the affiliate here!</div>
          </div>
        </div>
        <div className="affiliates-card">
          <h1>Affliate 2</h1>
          <div className="row">
            <img className="col-6" alt="affiliate2-img" />
            <div className="col-6">Something about the affiliate here!</div>
          </div>
        </div>
        <div className="affiliates-card">
          <h1>Affliate 3</h1>
          <div className="row">
            <img className="col-6" alt="affiliate3-img" />
            <div className="col-6">Something about the affiliate here!</div>
          </div>
        </div>
      </div>

      <footer>
        <div className="row">
          <div className="col-6">
            <h2>Grow with us!</h2>
            <div>We are open source. Help grow Icebox!</div>
            <button>Collaborate</button>
          </div>
          <div className="col-6">
            <h2>Friends</h2>
            <img alt="aff1" />
            <img alt="aff2" />
            <img alt="aff3" />
          </div>
        </div>
        <div>&copy;2019 Copyright Crispy Palm Trees</div>
      </footer>
    </div>
  );
};

export default App;
