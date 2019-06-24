import React from "react";
import "./Login.css";

const Login: React.FC = () => {
  return (
    <div id="loginContainer">
      <div id="loginTitle">Login with your icebox account</div>
      <div className="input-row">
        <img className="login-icons" src="../../assets/images/username.png" alt="Email Icon" />
        <input className="login-input" id="email" type="text" placeholder="Enter your email address" />
      </div>
      <div className="input-row">
        <img className="login-icons" src="../../assets/images/password.png" alt="Password Icon" />
        <input className="login-input" id="password" type="password" placeholder="Enter your password" />
      </div>
      <div id="forgotPasswordContainer">
        <a id="forgotPassword">Forgot Password?</a>
      </div>
      <button id="loginBtn">LOGIN</button>

      {/* <div id="googleLogin">Login with your google account</div>
        <div id="facebookLogin">Login with your facebook account</div> */}

      <div>
        <a id="newAccount">Create a new account</a>
      </div>
    </div>
  );
};

export default Login;
