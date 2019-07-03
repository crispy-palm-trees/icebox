import React from "react";

import "./ScrollToTop.scss";

class ScrollToTop extends React.Component {
  scrollToNav() {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  }

  render() {
    return (
      <div className="backToTop" onClick={e => this.scrollToNav()}>
        ^
        <img alt="Back To Top" />
      </div>
    );
  }
}
export default ScrollToTop;
