import React from "react";

import "./NavbarLanding.scss";
import "./../../../styles.scss";

import logo from "./../../../logo.svg";

class NavbarLanding extends React.Component {
  render() {
    return (
      <nav className="landing-navbar navbar navbar-expand-lg">
        <a className="navbar-brand" href="#">
          <img src={logo} />
          icebox
        </a>
        <div className="collapse navbar-collapse d-sm-inline-flex flex-sm-row-reverse">
          <ul className="navbar-nav ml-auto" id="navList">
            <li className="nav-item active">
              <a className="nav-link">Search</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavbarLanding;
