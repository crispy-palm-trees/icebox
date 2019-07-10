import React from "react";

import NavBarSite from "./../../Components/Navbar/NavbarSite/NavbarSite";

import "./Signup.scss";

class Signup extends React.Component {
  render () {
    return (
      <div>
      <NavBarSite />
        <div id="signupContainer">
          <div id="signupTitle">Create a new icebox account</div>
          <div className="input-row">
            <input id="firstName" className="signup-input" type="text" placeholder="First Name" />
          </div>
          <div className="input-row">
            <input id="lastName" className="signup-input" type="text" placeholder="Last Name" />
          </div>
          <div className="input-row">
            <input id="email" className="signup-input" type="email" placeholder="Email" />
          </div>
          <div className="input-row">
            <input id="confirmEmail" className="signup-input" type="email" placeholder="Confirm Email" />
          </div>
          <div className="input-row">
            <input id="password" className="signup-input" type="password" placeholder="Password" />
          </div>
          <div className="input-row">
            <input id="confirmPassword" className="signup-input" type="password" placeholder="Confirm Password" />
          </div>

          <button id="createAccountBtn">CREATE ACCOUNT</button>

          <div className="already-have-account">Already have an account? <a href="/login" id="loginHere">Login here</a>!</div>
        </div>
      </div>
      
    );
  };
};

export default Signup;
