import React from "react";

import NavBarSite from "./../../Components/Navbar/NavbarSite/NavbarSite";

import "./Login.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUnlock } from "@fortawesome/free-solid-svg-icons";


class Login extends React.Component {
  render() {
    return (
      <div>
        <NavBarSite />
        <div id="loginContainer">
          <div id="loginTitle">Login with your icebox account</div>
          <div className="input-row">
            <FontAwesomeIcon icon={faEnvelope} size="1x" color="grey" />
            <input className="login-input" id="email" type="text" placeholder="Enter your email address" />
          </div>
          <div className="input-row">
            <FontAwesomeIcon icon={faUnlock} size="1x" color="grey" />
            <input className="login-input" id="password" type="password" placeholder="Enter your password" />
          </div>
          <div id="forgotPasswordContainer">
            <a id="forgotPassword">Forgot Password?</a>
          </div>
          <button id="loginBtn">LOGIN</button>

          {/* <div id="googleLogin">Login with your google account</div>
            <div id="facebookLogin">Login with your facebook account</div> */}

          <div>
            <a href="signup" id="newAccount">Create a new account</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
