import React from "react";

import NavbarSite from "./../Navbar/NavbarSite/NavbarSite";

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
        <div className="btn-container">
          <button className="more-info-btn" onClick={e => this.scrollDown()}>
            <img className="down-arrow" alt="down arrow" />
          </button>
        </div>
      </div>
    );
  }
}

export default Search;
