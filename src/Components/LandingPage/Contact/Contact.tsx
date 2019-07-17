import React from "react";

import Form from "./../../Form/Form";

import "./Contact.scss";
import map from "./images/surrey-central-map.png";

class Contact extends React.Component {
  render() {
    return (
      <div className='app-contact row'>
        <div className='map-container col-8'>
          <img className='map' src={map} />
        </div>
        <div className='contact-form col-4'>
          <Form />
        </div>
      </div>
    );
  }
}

export default Contact;
