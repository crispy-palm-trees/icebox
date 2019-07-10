import React from "react";

import logo from "./../../../logo.svg";

import "./NavbarSite.scss";

class NavbarSite extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="/">
          <img src={logo} />
          icebox
        </a>
        <div className="collapse navbar-collapse d-sm-inline-flex flex-sm-row-reverse">
          <ul className="navbar-nav ml-auto" id="navList">
            <li className="nav-item">
              <a className="nav-link" href="/signup">Signup</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="login">Login</a>
            </li>
            <li className="nav-item active" hidden>
              <a className="nav-link">Home</a>
            </li>
            <li className="nav-item" hidden>
              <a className="nav-link">Food Library</a>
            </li>
            <li className="nav-item" hidden>
              <a className="nav-link">Grocery List</a>
            </li>
            <li className="nav-item" hidden>
              <a className="nav-link">Stats</a>
            </li>
            <li className="nav-item" hidden>
              <a className="nav-link">Calendar</a>
            </li>
            <li className="nav-item" hidden>
              <a className="nav-link">Logout</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavbarSite;
