import React from "react";

import "./Contact.scss";

class Contact extends React.Component {
  render() {
    return (
      <div className="app-contact block-web">
        <div className="row">
          <div className="col-6">
            <div id="map" />
            <p className="address">Our Location: 10153 King George Blvd, Surrey, BC V3T 2W1</p>
          </div>
          <div className="col-6">
            <h1>Say hello!</h1>
            <p>Email or give us a call</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
