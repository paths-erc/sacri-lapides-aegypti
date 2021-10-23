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
            <h6>OTHER NAMES</h6>
            <p>{props.other_names}</p>
            <h6>EGYPTIAN NAMES</h6>
            <p>{props.egyptian_name}</p>
            <h6>COPTIC NAMES</h6>
            <p>{props.coptic_name}</p>
            <h6>GREEK NAMES</h6>
            <p>{props.greek_name}</p>
            <h6> ARABIC NAMES</h6>
            <p>{props.arabic_name}</p>
            <h6> ARABIC TRANSLATION</h6>
            <p>{props.arabic_transl}</p>
          </Col>
          <Col>
            <h5>GEO INFO</h5>
            <h6>AREA</h6>
            <p>{props.area}</p>
            <h6>PAThs ID</h6>
            <p>{props.paths_id}</p>
            <h6>PLEIADES ID</h6>
            <p>{props.pleiades_id}</p>
            <h6>TM ID</h6>
            <p>{props.tm_id}</p>
          </Col>
          <Col>
            <h5>SITE INFO</h5>
            <h6>TYPOLOGY</h6>
            <p>{props.typology}</p>
            <h6>DATE FROM</h6>
            <p>{props.year_from}</p>
            <h6>DATE TO</h6>
            <p>{props.year_to}</p>
            <h6>DATING CRITERIA</h6>
            <p>{props.dating_criteria}</p>
            <h6>EPISCOPAL SEE FROM</h6>
            <p>{props.episcopal_see_from_year}</p>
            <h6>TIMM REF</h6>
          </Col>
          <Col>
            <h5>ABOUT</h5>
            <h6>STATUS</h6>
            <p>{props.status}</p>
            <h6>EDITOR</h6>
            <p>{props.editors}</p>
            <h6>LAST MODIFIED</h6>
            <p>{props.date}</p>
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
    text-align: right;
    color: #777777;
  }
  h6 {
    font-family: "Montserrat", sans-serif;
    font-weight: normal;
    font-size: 0.7rem;
    line-height: 1rem;
    display: swap;
    text-align: right;
    color: #777777;
  }
  p {
    font-family: "Montserrat", sans-serif;
    font-weight: 200;
    font-size: 0.7rem;
    line-height: 1rem;
    display: swap;
    text-align: right;
    color: #777777;
  }
  .row {
    padding-top: 50px;
  }
`;
export default Info;
