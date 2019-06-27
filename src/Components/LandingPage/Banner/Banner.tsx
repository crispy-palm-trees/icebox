import React from "react";

import "./Banner.scss";

class Banner extends React.Component {
  render() {
    return (
      <div className="app-banner">
        <div className="button-group">
          <button>Login</button>
          <button>Sign-up</button>
        </div>
      </div>
    );
  }
}

export default Banner;
