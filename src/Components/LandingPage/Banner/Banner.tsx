import React from "react";

import "./Banner.scss";

class Banner extends React.Component {
  render() {
    return (
      <div className="app-banner">
        <div className="button-group">
          <button className="account-btn">Login</button>
          <button className="account-btn">Sign-up</button>
        </div>
      </div>
    );
  }
}

export default Banner;
