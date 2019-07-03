import React from "react";

import GoogleMaps from "./../../GoogleMapsAPI/Maps";
import Form from "./../../Form/Form";

import "./Contact.scss";

class Contact extends React.Component {
  render() {
    return (
      <div className="app-contact">
        <div className="row">
          <div className="maps-container col-7 left">
            <div id="map">
              <GoogleMaps />
            </div>
          </div>
          <div className="contact-form col-5 right">
            <Form />
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
