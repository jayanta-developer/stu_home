import React, { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import "./style.css";
import markIcon1 from "../../Assets/Images/locationIcon2.png"; // Your custom icon

const MapComponent = ({ latitude, longitude, description }) => {
  const mapContainer = useRef(null);
  const mapInstance = useRef(null);
  const markerRef = useRef(null);

  useEffect(() => {
    // Initialize the map
    mapInstance.current = new maplibregl.Map({
      container: mapContainer.current,
      style:
        "https://api.jawg.io/styles/jawg-dark.json?access-token=mm8Fby5IHniYBn6LudtCtxAYTJOplhRsn77BkcfxdmL0sBZ07835gPFUi31DECmE",
      center: [longitude, latitude], // Set the initial center of the map
      zoom: 12, // Set the zoom level
    });

    // Cleanup on unmount
    return () => {
      mapInstance.current?.remove();
    };
  }, [latitude, longitude]);

  useEffect(() => {
    if (!mapInstance.current) return;

    // Remove the previous marker, if any
    markerRef.current?.remove();

    // Add the new marker with the custom icon
    const markerElement = document.createElement("img");
    markerElement.src = markIcon1; // Use your custom icon

    markerRef.current = new maplibregl.Marker({ element: markerElement })
      .setLngLat([longitude, latitude])
      .setPopup(
        new maplibregl.Popup({ offset: 25 }).setText(description || "Marker")
      )
      .addTo(mapInstance.current);

    // Open the popup by default
    markerRef.current.getPopup().addTo(mapInstance.current);
  }, [latitude, longitude, description]);

  return (
    <div
      ref={mapContainer}
      className="map-container"
      style={{ width: "100%", height: "400px" }}
    />
  );
};

export default MapComponent;
