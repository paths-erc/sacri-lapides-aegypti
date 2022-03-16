/* import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import geoJson from "./places.json"

export default function Map(props) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(props.lng);
  const [lat] = useState(props.lat);
  const [popupHtml] = useState(props.popupHtml);
  const [zoom] = useState(props.zoom);
  const [API_KEY] = useState("NpaEYD1cCEf6bmrpKKm9");

  useEffect(() => {
    if (map.current) return;
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/topo/style.json?key=${API_KEY}`,
      center: [lng, lat],
      zoom: zoom,
      scrollZoom: false,
    });

     geoJson.features.forEach((feature) => {
       // Create a React ref
       const ref = React.createRef();
       // Create a new DOM node and save it to the React ref
       ref.current = document.createElement("div");
       // Render a Marker Component on our new DOM node
       ReactDOM.render(
         <Marker onClick={markerClicked} feature={feature} />,
         ref.current
       );

    map.current.addControl(new maplibregl.NavigationControl(), "top-right");
    new maplibregl.Marker({ color: "#822433" })
      .setLngLat(feature.geometry.coordinates)
      .setPopup(new maplibregl.Popup({ offset: 50 }).setHTML(popupHtml))
      .addTo(map.current);
  });

  return (
      <div className="map-wrap">
        <div ref={mapContainer} className="map" />
      </div>
  );
}; */