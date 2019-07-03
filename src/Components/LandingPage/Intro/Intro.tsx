import React from "react";

import "./Intro.scss";

const Intro: React.FC = () => {
  return (
    <div className="app-intro block-web">
      <h1>Welcome to icebox</h1>
      <p>
        Too much good food wasted? Fear no more. Join the icebox community today and reap the benefits. Save your food,
        save your money, and why not save the earth as well! Discover a library full of food knowledge. Learn to better
        preserve your food and have a personal products tracker all at your fingertips.
      </p>
      <div>
        <a>Sign up</a> today to start your food saving journey.
      </div>
    </div>
  );
};

export default Intro;
