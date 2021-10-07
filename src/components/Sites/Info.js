import React from "react";
import TitleR from "../Title/TitleR";
import { graphql, useStaticQuery } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const Info = (props) => {
  return (
    <Wrapper>
      <Container>
        <TitleR title="general information"></TitleR>
      </Container>
      <Container>
        <Row className="info">
          <Col>
            <h5>PLACE NAMES</h5>
            <p>
              OTHER NAMES
              <br />
              {props.other_names}
            </p>
            <p>
              EGYPTIAN NAMES
              <br />
              {props.egyptian_name}
            </p>
            <p>
              COPTIC NAMES
              <br />
              {props.coptic_name}
            </p>
            <p>
              GREEK NAMES
              <br />
              {props.greek_name}
            </p>
            <p>
              ARABIC NAMES
              <br />
              {props.arabic_name}
            </p>
            <p>
              ARABIC TRANSLATION
              <br />
              {props.arabic_transl}
            </p>
          </Col>
          <Col>
            <h5>GEOGRAPHICAL INFO</h5>
            <p>
              AREA
              <br />
              {props.area}
            </p>
            <p>
              REGION
              <br />
              {props.region}
            </p>
            <p>
              PAThs ID
              <br />
              {props.paths_id}
            </p>
            <p>
              PLEIADES ID
              <br />
              {props.pleiades_id}
            </p>
            <p>
              TM ID
              <br />
              {props.tm_id}
            </p>
          </Col>
          <Col>
            <h5>SITE INFO</h5>
            <p>
              TYPOLOGY
              <br />
              {props.typology}
            </p>
            <p>
              DATE FROM
              <br />
              {props.date_from}
            </p>
            <p>
              DATE TO
              <br />
              {props.date_to}
            </p>
            <p>
              DATING CRITERIA
              <br />
              {props.dating_criteria}
            </p>
            <p>
              EPISCOPAL SEE FROM
              <br />
              {props.episcopal_see_from_year}
            </p>
            <p>
              TIMM REF
              <br />
              {props.timm_ref}
            </p>
          </Col>
          <Col>
            <h5>ABOUT</h5>

            <p>
              STATUS
              <br />
              {props.status}
            </p>
            <p>
              EDITOR
              <br />
              {props.editors}
            </p>
            <p>
              LAST MODIFIED
              <br />
              {props.date}
            </p>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  h5 {
    text-align: right;
    font-weight: bolder;
    display: swap;
    padding-bottom: 4%;
  }
  p {
    text-align: right;
    font-weight: 200;
    display: swap;
  }
  .info {
    margin-bottom: 5%;
    margin-top: 5%;
  }
`;
export default Info;
