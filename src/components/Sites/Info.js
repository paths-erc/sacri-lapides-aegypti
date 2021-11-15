//React
import React from "react";

//Gatsby
import styled from "styled-components";

//Bootstrap
import { Container, Row, Col } from "react-bootstrap";

//Component
import Title from "../Title";

//markup
const Info = (props) => {
  return (
    <Wrapper>
      {/* <Container>
        <Title title="general information" align="right" />
      </Container> */}

      <Container>
        <Row xs={1} md={2} className="info">
          <Col>
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
          <Col>
            <h5>GEO INFO</h5>
            <h6>
              <strong>AREA</strong>: {props.area}
            </h6>
            <h6>
              <strong>PAThs ID</strong>:{" "}
              {props.paths_id.split(",").map((paths_id) => {
                return (
                  <>
                    <a
                      className="link"
                      href={`https://atlas.paths-erc.eu/places/${paths_id}`}
                    >
                      {paths_id}
                    </a>{" "}
                  </>
                );
              })}
            </h6>
            <h6>
              <strong>PLEIADES ID</strong>:{" "}
              {props.pleiades_id.split(",").map((pleiades_id) => {
                return (
                  <>
                    <a
                      className="link"
                      href={`https://pleiades.stoa.org/places/${pleiades_id}`}
                    >
                      {pleiades_id}
                    </a>{" "}
                  </>
                );
              })}
            </h6>
            <h6>
              <strong>TRISMEGISTOS GeoID</strong>:{" "}
              {props.tm_id.split(",").map((tm_id) => {
                return (
                  <>
                    {" "}
                    <a
                      className="link"
                      href={`https://www.trismegistos.org/geo/detail.php?quick=${tm_id}`}
                    >
                      {tm_id}
                    </a>{" "}
                  </>
                );
              })}
            </h6>
          </Col>
        </Row>
        <Row xs={1} md={2} className="info">
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
  h5 {
    font-family: "Montserrat", sans-serif;
    font-weight: bolder;
    font-size: 0.9rem;
    line-height: 1.2rem;
    display: swap;
    text-align: left;
    color: rgb(0, 103, 120);
  }
  h6 {
    font-family: "Montserrat", sans-serif;
    font-weight: normal;
    font-size: 0.7rem;
    line-height: 0.9rem;
    display: swap;
    text-align: left;
    color: #777777;
  }
  h6 .link {
    font-family: "Montserrat", sans-serif;
    font-weight: normal;
    font-size: 0.7rem;
    line-height: 1rem;
    display: swap;
    text-align: left;
    color: #777777;
    /* text-decoration: underline; */
  }
  h6 .link:hover {
    font-family: "Montserrat", sans-serif;
    font-weight: normal;
    font-size: 0.7rem;
    line-height: 1rem;
    display: swap;
    text-align: left;
    color: rgb(0, 103, 120);
  }
  p {
    font-family: "Montserrat", sans-serif;
    font-weight: 200;
    font-size: 0.7rem;
    line-height: 1rem;
    display: swap;
    text-align: left;
    color: #777777;
  }
  .row {
    padding-top: 10px;
  }
`;
export default Info;
