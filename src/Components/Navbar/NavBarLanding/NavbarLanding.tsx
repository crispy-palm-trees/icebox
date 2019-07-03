import React from "react";
import "./NavbarLanding.scss";
import "./../../../styles.scss";

import logo from "./../../../logo.svg";

class NavbarLanding extends React.Component {
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  render() {
    return (
      <nav className="landing-navbar navbar navbar-expand-lg">
        <a className="navbar-brand" onClick={e => this.scrollToTop()}>
          <img src={logo} />
          <span>icebox</span>
        </a>
        <div className="collapse navbar-collapse d-sm-inline-flex flex-sm-row-reverse">
          <ul className="navbar-nav ml-auto" id="navList">
            <li className="nav-item active">
              <a className="nav-link" onClick={e => this.scrollToTop()}>
                Search
              </a>
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
