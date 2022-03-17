import React from "react";
import styled from "styled-components";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Container } from "react-bootstrap";

const Map = (props) => {
  const lng = props.lng;
  const lat = props.lat;
  const zoom = props.zoom;
  const popupHtml = props.popupHtml;

  //markup
  return (
    <div>
      <Wrapper>
        <Container>
          <MapContainer
            center={[lat, lng]}
            zoom={zoom ? zoom : 5}
            scrollWheelZoom={false}
            style={{ height: "400px", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=NpaEYD1cCEf6bmrpKKm9"
            />
            <Marker position={[lat, lng]}>
              {popupHtml ? <Popup>{popupHtml}</Popup> : ""}
            </Marker>
          </MapContainer>
        </Container>
      </Wrapper>
    </div>
  );
};

//styles
const Wrapper = styled.section`
  .map {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    height: 100%;
    width: 100%;
    float: right;
    z-index: -1;
  }
  .leaflet-control-attribution.leaflet-control a {
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 0.6rem;
    line-height: 1.2rem;
    display: swap;
    text-align: left;
    color: rgb(0, 103, 120);
  }
`;
export default Map;
