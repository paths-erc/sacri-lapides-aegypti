//React
import React from "react";

//Gatsby
import styled from "styled-components";

//Leaflet
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

//Bootstrap
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
            center={[lng, lat]}
            zoom={zoom ? zoom : 5}
            scrollWheelZoom={false}
            style={{ height: "400px", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[lng, lat]}>
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
    width: 75%;
    float: left;
    z-index: -1;
  }
`;
export default Map;
