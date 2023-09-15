import React from "react";
import { useState } from "react";
import ReactMapGL from "react-map-gl";

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 37.8136,
    longitude: 144.9631,
    zoom: 8,
  });

  return (
    <div className="map_wrap">
      <div className="map">
        <ReactMapGL
          mapStyle={"mapbox://style/mapbox/dark-v9"}
          mapboxApiAccessToken=""
          {...viewport}
          onViewportChange={(nextViewport) => setViewport(nextViewport)}
        />
      </div>
    </div>
  );
};

export default Map;
