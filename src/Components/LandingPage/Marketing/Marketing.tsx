import React from "react";

import "./Marketing.scss";

import book from "./images/book.png";
import list from "./images/list.png";
import calendar from "./images/calendar.png";

const Marketing: React.FC = () => {
  return (
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
            Our greatest invention yet! The Foodipedia lets you search for any food product and provides you with some
            information on how to cook, use, preserve, and much more. Try it out today!
          </div>
        </div>
        <div className="col-4">
          <div className="center-icon">
            <img src={calendar} alt="calendar" />
          </div>
          <h3>Food Tracker</h3>
          <div>
            Keep track of all the food in your home with a handy calendar tool which provides personalized notifications
            sent to your phone or email.
          </div>
        </div>
        <div className="col-4">
          <div className="center-icon">
            <img src={list} alt="list" />
          </div>
          <h3>Grocery Shopper</h3>
          <div>
            Our system takes your weekly/monthly grocery shopping habits and learns about you, generating grocery lists
            with recommendations for your next shopping trip.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
