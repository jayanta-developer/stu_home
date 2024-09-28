import React from "react";
import GoogleMapReact from "google-map-react";

const Marker = ({ text }) => (
  <div
    style={{
      color: "white",
      background: "red",
      padding: "10px 15px",
      borderRadius: "50%",
      textAlign: "center",
      width: "50px",
    }}
  >
    {text}
  </div>
);

export default function SimpleMap({ latVal, lngVal, zoomVal }) {
  const defaultProps = {
    center: {
      lat: latVal,
      lng: lngVal,
    },
    zoom: zoomVal,
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }} // Use environment variable
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {/* <Marker lat={latVal} lng={lngVal} text="My Marker" /> */}
      </GoogleMapReact>
    </div>
  );
}
