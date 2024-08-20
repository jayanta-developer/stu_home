import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap({}) {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
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
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyASuHB3mHDPuwK6-umuauZJQBe38VKKaOg" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker lat={59.955413} lng={30.337844} text="My Marker" />
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
}
