import React from "react";
import TitleR from "../title/TitleR";
import SlaLogo from "../../images/3-logos/sla.svg";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const About = () => {
  return (
    <Wrapper>
      <section className="section bottom-slant-gray">
        <Container>
          <Row xs={1} md={2}>
            <Col>
              <img
                className="about-img"
                src={SlaLogo}
                alt="Sacri Lapides Aegypti Logo"
              />
            </Col>
            <Col>
              <TitleR title="about" />
              <p>
                The <em>Sacri lapides Aegypti</em> project aims to study and
                document the processes of transformation of sacred spaces for
                worship, identity and memory from Pharaonic and Ptolemaic-Roman
                Egypt to Christian Egypt through topographical-functional
                analysis and the creation of a general catalogue, in digital
                form, of the temple structures transformed into Christian places
                used for the production and preservation of books, as well as
                their cultic function.
                <em>Sacri lapides Aegypti</em> is therefore the conceptual
                premise and the archaeological investigation of the ERC project
                PAThs, whose aim is to define a geography of Coptic manuscript
                production through the creation of a digital atlas, searchable
                thematically and chronologically.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  section {
    padding: 0;
    position: relative;
    z-index: 2;
  }
  p {
    font-family: "Montserrat", sans-serif;
    font-weight: 200;
    font-size: 1rem;
    line-height: 1.7rem;
    display: swap;
    text-align: right;
    color: #777777;
    padding-top: 3rem;
  }
  .col {
    margin-bottom: 3rem;
  }
  .about-img {
    text-align: center;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 3rem;
  }
  .bottom-slant-gray {
    position: relative;
    padding-top: 1.5%;
    padding-bottom: 1%;
    background-color: #f8f9fa;
  }
  .bottom-slant-gray:after {
    content: "";
    width: 100%;
    height: 260px;
    background: #fff;
    z-index: -1;
    bottom: -200px;
    background-color: #f8f9fa;
    left: 0;
    position: absolute;
    -webkit-transform: skewY(-6deg);
    -ms-transform: skewY(-6deg);
    transform: skewY(-6deg);
    -webkit-transform-origin: top left;
    -ms-transform-origin: top left;
    transform-origin: top left;
  }
`;
export default About;
