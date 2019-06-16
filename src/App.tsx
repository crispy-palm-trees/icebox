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
        <p>
          Join us in our efforts to help raise awareness about food waste and
          the monetary benefits that come along with reducing food waste in the
          Greater Vancouver area.
        </p>
        <img alt="Video" />
      </div>
      <div className="">Why use this application</div>
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
