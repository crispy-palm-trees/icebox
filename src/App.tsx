import React from "react";
import logo from "./logo.svg";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="IceboxApp wrapper">
      <nav>
        <ul>
          <li>Home</li>
          <li>Food Library</li>
          <li>Grocery List</li>
          <li>Stats</li>
          <li>Calendar</li>
          <li>Hello?</li>
        </ul>
      </nav>
      <div className="banner">Insert Image Here</div>
      <button className="btn">Login</button>
      <button className="btn">Sign Up</button>
      <div className="">Food Waste</div>
      <div>
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
        <div className="row">
          <div className="col-3">
            <img />
            <h3>Plenty of Thyme</h3>
            <div>
              Its in the name! Keep track of your food's expiry dates with our
              reminders. Our calendar views will keep you posted on your food's
              life.
            </div>
          </div>
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
            <h3>Keep you money</h3>
            <div>
              Stay up to date with your finances as we show how much money you
              could potentially be saving!
            </div>
          </div>
        </div>
        <img alt="Video" />
      </div>
      <div className="">
        <h1>Why Use Plenty of Thyme?</h1>
        <p>
          Plenty of Thyme is a web based grocery application that keeps track of
          items currently in your fridge as well as their expiry dates.
        </p>
      </div>
      <div className="">About the Author</div>
      <div className="">Our Freinds split screen</div>
      <div className="">Affiliates</div>
      <footer>
        <div>Site Info</div>
        <div>Copyright</div>
      </footer>
    </div>
  );
};

export default App;
