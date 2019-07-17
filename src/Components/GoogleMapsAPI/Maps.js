import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import React from "react";

const mapStyles = {
  width: "100%",
  height: "100%"
};

export class MapContainer extends React.Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={13}
        style={mapStyles}
        initialCenter={{
          lat: 49.186517,
          lng: -122.848922
        }}
      >
        <Marker position={{ lat: 49.186517, lng: -122.848922 }} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAmCAvT_PRnQQ8FQktczuL75iAjaSNvWxs"
})(MapContainer);
