import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

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
      style: `https://api.maptiler.com/maps/streets/style.json?key=${API_KEY}`,
      center: [lng, lat],
      zoom: zoom,
      scrollZoom: false,
    });
    
    map.current.addControl(new maplibregl.NavigationControl(), "top-right");
    new maplibregl.Marker({ color: "#822433" })
      .setLngLat([lng, lat])
      .setPopup(new maplibregl.Popup({ offset: 50 }).setHTML(popupHtml))
      .addTo(map.current);
  });

  return (
    <Wrapper>
      <div className="map-wrap">
        <div ref={mapContainer} className="map" />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .map-wrap {
    position: relative;
    width: 100%;
    height: calc(50vh - 100px);
  }
  .map {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .maplibregl-popup {
    width: 150px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
  }
  .maplibregl-popup-content {
    font-family: "Roboto Condensed", sans-serif;
    font-weight: 300;
    font-size: 1rem;
    color: #777777;
    text-align: center;
    padding-top: 1.rem;
    padding-bottom: 1.2rem;
  }
`;
