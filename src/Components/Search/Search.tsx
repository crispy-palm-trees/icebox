import React from "react";

import NavbarSite from "./../Navbar/NavbarSite/NavbarSite";

import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Search.scss";

class Search extends React.Component {
  scrollDown() {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  }

  render() {
    return (
      <div className="app-search">
        <NavbarSite />
        <h1>SEARCH</h1>
        <div className="btn-container">
          <button className="more-info-btn" onClick={e => this.scrollDown()}>
            <FontAwesomeIcon icon={faAngleDown} size="2x" color="grey" />
          </button>
        </div>
      </div>
    );
  }
}

export default Search;
