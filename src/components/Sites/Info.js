import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

//markup
const Info = (props) => {
  return (
    <Wrapper>
      <Container className=" info">
        <Row xs={2} md={2}>
          <Col className="my-3">
            <h5>PLACE NAMES</h5>
            <h6>
              <strong>OTHER NAMES</strong>: {props.other_names}
            </h6>
            <h6>
              <strong>EGYPTIAN NAMES</strong>: {props.egyptian_name}
            </h6>
            <h6>
              <strong>COPTIC NAMES</strong>: {props.coptic_name}
            </h6>
            <h6>
              <strong>GREEK NAMES</strong>: {props.greek_name}
            </h6>
            <h6>
              <strong>LATIN NAMES</strong>: {props.latin_name}
            </h6>
            <h6>
              <strong>ARABIC NAMES</strong>: {props.arabic_name}
            </h6>
            <h6>
              <strong>ARABIC TRANSLATION</strong>: {props.arabic_transl}
            </h6>
          </Col>
          <Col className="my-3">
            <h5>GEO INFO</h5>
            <h6>
              <strong>AREA</strong>: {props.area}
            </h6>
            <h6>
              <strong>PAThs ID</strong>:
              {props.paths_id.split(",").map((paths_id) => {
                return (
                  <>
                    <a href={`https://atlas.paths-erc.eu/places/${paths_id}`}>
                      {paths_id}
                    </a>
                  </>
                );
              })}
            </h6>
            <h6>
              <strong>PLEIADES ID</strong>:{" "}
              {props.pleiades_id.split(",").map((pleiades_id, key) => {
                return (
                  <React.Fragment key={key}>
                    <a href={`https://pleiades.stoa.org/places/${pleiades_id}`}>
                      {pleiades_id}
                    </a>{" "}
                  </React.Fragment>
                );
              })}
            </h6>
            <h6>
              <strong>TRISMEGISTOS GeoID</strong>:{" "}
              {props.tm_id.split(",").map((tm_id) => {
                return (
                  <>
                    <a
                      href={`https://www.trismegistos.org/geo/detail.php?quick=${tm_id}`}
                    >
                      {tm_id}
                    </a>
                  </>
                );
              })}
            </h6>
            <h6>
              <strong>TOPOSTEXT ID</strong>:
              {props.topotext_id.split(",").map((topotext_id) => {
                return (
                  <>
                    <a href={`https://topostext.org/place/${topotext_id}`}>
                      {topotext_id}
                    </a>
                  </>
                );
              })}
            </h6>
          </Col>
        </Row>
        <Row xs={2} md={2}>
          <Col>
            <h5>SITE INFO</h5>
            <h6>
              <strong>TYPOLOGY</strong>: {props.typology}
            </h6>
            <h6>
              <strong>DATE FROM</strong>: {props.year_from}
            </h6>
            <h6>
              <strong>DATE TO</strong>: {props.year_to}
            </h6>
            <h6>
              <strong>DATING CRITERIA</strong>: {props.dating_criteria}
            </h6>
            <h6>
              <strong>EPISCOPAL SEE FROM</strong>:{" "}
              {props.episcopal_see_from_year}
            </h6>
            <h6>
              <strong>NOTES ON EPISCOPAL SEE</strong>:{" "}
              {props.notes_on_episcopal_see}
            </h6>
          </Col>
          <Col>
            <h5>ABOUT</h5>
            <h6>
              <strong>STATUS</strong>: {props.status}
            </h6>
            <h6>
              <strong>EDITOR</strong>: {props.editors}
            </h6>
            <h6>
              <strong>LAST MODIFIED</strong>: {props.date}
            </h6>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

//styled
const Wrapper = styled.section`
  
`;
export default Info;
