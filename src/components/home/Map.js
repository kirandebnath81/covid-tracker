import React from "react";

import "./style/Map.css";

import { MapContainer, TileLayer, useMap } from "react-leaflet";

import showMapCircle from "../../utils/showMapCircle";

//child component for changeing the map
const ChangeMap = ({ center, zoom }) => {
  const map = useMap();
  map.setView(center, zoom);
  return null;
};

//Main Map component
const Map = ({ center, zoom, countries, caseType }) => {
  return (
    <div className="map">
      <MapContainer center={center} zoom={zoom}>
        <ChangeMap center={center} zoom={zoom} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <div>{showMapCircle(countries, caseType)}</div>
      </MapContainer>
    </div>
  );
};

export default Map;
