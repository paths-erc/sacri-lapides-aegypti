import React from "react";
import TitleR from "../components/Title/TitleR";
import TitleL from "../components/Title/TitleL";
import PBuzi from "../images/2-team/paola-buzi.jpeg";
import JBogdani from "../images/2-team/julian-bogdani.jpg";
import DDerasmo from "../images/2-team/domizia-d_erasmo.jpg";

import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const About = () => {
  return (
    <Wrapper>
      <section className="section bottom-slant-gray">
        <Container className="container-one">
          <Row>
            <Col>
              <img className="img-left" src={PBuzi} alt="Paola Buzi" />
            </Col>
            <Col>
              <TitleL title="paola buzi" />
              <p>
                Paola Buzi is full professor of Egyptology and Coptic
                Civilization at the Sapienza University of Rome and honorary
                professor of the same disciplines at the Universität Hamburg.
                She graduated in Egyptology at the University of Rome, where she
                also obtained her PhD in Egyptology
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section methods">
        <Container className="container-two">
          <Row>
            <Col>
              <TitleR title="julian bogdani" />
              <p>
                Julian Bogdani is a researcher of Metodologie della Ricerca
                Archeologica (L-ANT/10) at Sapienza University of Rome where he
                also founded the Laboratory of Digital Archaeology (LAD). He
                also teaches, in the same university, Digital Humanities and
                Digital Archaeology. Since 2021, he has been director of the
                archaeological mission at the Çuka and Ajtoit site in Albania
              </p>
            </Col>
            <Col>
              <img className="img-right" src={JBogdani} alt="Julian Bogdani" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section bottom-slant-gray">
        <Container className="container-three">
          <Row>
            <Col>
              <img className="img-left" src={DDerasmo} alt="Domizia D'Erasmo" />
            </Col>
            <Col>
              <TitleL title="domizia d'Erasmo" />
              <p>
                Domizia D'Erasmo is a research fellow in Metodologie della
                Ricerca Archeologica (L-ANT/10) at Sapienza University of Rome.
                She is a member of the archaeological mission at the temple of
                Hugair Gubli, Sudan (PI: Paola Buzi) and of the one at the site
                of Çuka e Ajtoit, Albania (PI: Julian Bogdani). She is tutor of
                the Laboratorio di Archeologia Digitale (LAD) directed by Julian
                Bogdani
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
    font-family: "Raleway", sans-serif;
    font-size: 1rem;
    line-height: 1.7rem;
    display: swap;
    text-align: right;
    color: #777777;
  }
  .img-left {
    text-align: center;
    float: right;
    padding-right: 5%;
    padding-bottom: 8%;
    height: auto;
    width: 300px;
  }
  .img-right {
    text-align: center;
    float: left;
    padding-left: 5%;
    height: auto;
    width: 300px;
  }
  .bottom-slant-gray {
    position: relative;
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
  .bottom-slant-gray:before {
    content: "";
    width: 100%;
    height: 240px;
    background: #f8f9fa;
    z-index: -1;
    top: 0px;
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
  .container-one {
    padding-bottom: 0;
    padding-top: 3%;
  }
  .container-one p {
    text-align: left !important;
    font-family: "Raleway", sans-serif;
    font-size: 1rem;
    line-height: 1.7rem;
    display: swap;
    color: #777777;
  }
  .container-two {
    padding-top: 15%;
    padding-bottom: 15%;
  }
  .container-three {
    padding-top: 3%;
    padding-bottom: 15%;
  }
  .container-three p {
    text-align: left !important;
    font-family: "Raleway", sans-serif;
    font-size: 1rem;
    line-height: 1.7rem;
    display: swap;
    color: #777777;
  }
  .section.methods {
    position: relative;
    z-index: 2;
    /*padding-top: 13%;
    padding-bottom: 13%;*/
  }
  .section.methods:after {
    content: "";
    width: 100%;
    height: 260px;
    background: #fff;
    z-index: -1;
    bottom: -200px;
    background-color: #fff;
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
