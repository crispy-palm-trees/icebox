import React from "react";

import "./ScrollToTop.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

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
        <FontAwesomeIcon icon={faAngleUp} size="2x" color="white" />
      </div>
    );
  }
}
export default ScrollToTop;
