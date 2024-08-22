import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap({ latVal, lngVal }) {
  const defaultProps = {
    center: {
      lat: 28.459306,
      lng: 77.026488,
    },
    zoom: 11,
  };

  const Marker = ({ text }) => (
    <div
      style={{
        color: "white",
        background: "red",
        padding: "10px 15px",
        borderRadius: "50%",
        textAlign: "center",
      }}
    >
      {text}
    </div>
  );

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyASuHB3mHDPuwK6-umuauZJQBe38VKKaOg" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {/* <Marker lat={latVal} lng={lngVal} text="My Marker" /> */}
        <AnyReactComponent lat={latVal} lng={lngVal} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
}
