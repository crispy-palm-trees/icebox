import React from "react";

import GoogleMaps from "./../../GoogleMapsAPI/Maps";
import Form from "./../../Form/Form";

import "./Contact.scss";
import map from "./images/surrey-central-map.png";

class Contact extends React.Component {
  render() {
    return (
      <div className='app-contact row'>
        <div className='col-9 map'>
          <img src={map} />
        </div>
        <div className='contact-form col-3'>
          <Form />
        </div>
      </div>
    );
  }
}

export default Contact;
