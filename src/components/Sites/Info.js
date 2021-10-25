//Gatsby
import React from "react";
import styled from "styled-components";

//Bootstrap
import { Container, Row, Col } from "react-bootstrap";

//Component
import Title from "../Title";

//markup
const Info = (props) => {
  return (
    <Wrapper>
      <Container>
        <Title title="general information" align="right" />
      </Container>

      <Container>
        <Row className="info" xs={1} md={4}>
          <Col>
            <h5>PLACE NAMES</h5>
            <h6>OTHER NAMES: {props.other_names}</h6>
            <h6>EGYPTIAN NAMES: {props.egyptian_name}</h6>
            <h6>COPTIC NAMES: {props.coptic_name}</h6>
            <h6>GREEK NAMES: {props.greek_name}</h6>
            <h6> ARABIC NAMES: {props.arabic_name}</h6>
            <h6> ARABIC TRANSLATION: {props.arabic_transl}</h6>
          </Col>
          <Col>
            <h5>GEO INFO</h5>
            <h6>AREA: {props.area}</h6>
            <h6>PAThs ID: {props.paths_id}</h6>
            <h6>PLEIADES ID: {props.pleiades_id}</h6>
            <h6>TRISMEGISTOS GeoID: {props.tm_id}</h6>
          </Col>
          <Col>
            <h5>SITE INFO</h5>
            <h6>TYPOLOGY: {props.typology}</h6>
            <h6>DATE FROM: {props.year_from}</h6>
            <h6>DATE TO: {props.year_to}</h6>
            <h6>DATING CRITERIA: {props.dating_criteria}</h6>
            <h6>EPISCOPAL SEE FROM: {props.episcopal_see_from_year}</h6>
          </Col>
          <Col>
            <h5>ABOUT</h5>
            <h6>STATUS: {props.status}</h6>
            <h6>EDITOR: {props.editors}</h6>
            <h6>LAST MODIFIED: {props.date}</h6>
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
    line-height: 1rem;
    display: swap;
    text-align: left;
    color: #777777;
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
    padding-top: 50px;
  }
`;
export default Info;
