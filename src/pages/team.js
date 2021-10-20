import React from "react";
import Layout from "../templates/IndexLayout";

import Picture from "../components/Picture";
import TitleR from "../components/Title/TitleR";
import TitleL from "../components/Title/TitleL";

import HomeSliderImage1 from "../../static/images/other/home-slider-1.jpg";
import PBuzi from "../../static/images/other/paola-buzi.jpeg";
import JBogdani from "../../static/images/other/julian-bogdani.jpg";
import DDerasmo from "../../static/images/other/domizia-d_erasmo.jpg";
import VParisi from "../../static/images/other/valeria-parisi.jpg";

import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const Team = () => {
  return (
    <Layout>
      <Picture title="Team" src={HomeSliderImage1} />
      <Wrapper>
        <section className="section bottom-slant-gray">
          <Container className="container-one">
            <Row>
              <Col sm={4}>
                <img className="img-left" src={PBuzi} alt="Paola Buzi" />
              </Col>
              <Col sm={8}>
                <TitleL title="paola buzi" />
                <p>
                  Paola Buzi is full professor of Egyptology and Coptic
                  Civilization at the Sapienza University of Rome and honorary
                  professor of the same disciplines at the Universität Hamburg.
                  She graduated in Egyptology at the University of Rome, where
                  she also obtained her PhD in Egyptology
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section methods">
          <Container className="container-two">
            <Row>
              <Col sm={8}>
                <TitleR title="julian bogdani" />
                <p>
                  Julian Bogdani is a researcher of Metodologie della Ricerca
                  Archeologica (L-ANT/10) at Sapienza University of Rome where
                  he also founded the Laboratory of Digital Archaeology (LAD).
                  He also teaches, in the same university, Digital Humanities
                  and Digital Archaeology. Since 2021, he has been director of
                  the archaeological mission at the Çuka and Ajtoit site in
                  Albania
                </p>
              </Col>
              <Col sm={4}>
                <img
                  className="img-right"
                  src={JBogdani}
                  alt="Julian Bogdani"
                />
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section bottom-slant-gray">
          <Container className="container-three">
            <Row>
              <Col sm={4}>
                <img
                  className="img-left"
                  src={DDerasmo}
                  alt="Domizia D'Erasmo"
                />
              </Col>
              <Col sm={8}>
                <TitleL title="domizia d'Erasmo" />
                <p>
                  Domizia D'Erasmo is a research fellow in Metodologie della
                  Ricerca Archeologica (L-ANT/10) at Sapienza University of
                  Rome. She is a member of the archaeological mission at the
                  temple of Hugair Gubli, Sudan (PI: Paola Buzi) and of the one
                  at the site of Çuka e Ajtoit, Albania (PI: Julian Bogdani).
                  She is tutor of the Laboratorio di Archeologia Digitale (LAD)
                  directed by Julian Bogdani
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section methods">
          <Container className="container-two">
            <Row>
              <Col sm={8}>
                <TitleR title="serena guidone" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum pulvinar velit a lorem bibendum venenatis. Sed
                  ornare varius velit, sit amet mattis orci eleifend at. Duis
                  sollicitudin mattis blandit. Pellentesque ultrices nisi augue,
                  interdum blandit tellus dapibus et. Nulla in augue urna. Nulla
                  interdum tristique massa, ut tristique purus bibendum sit
                  amet. In hac habitasse platea dictumst. Donec congue suscipit
                  tincidunt. Vivamus nec efficitur odio.
                </p>
              </Col>
              <Col sm={4}></Col>
            </Row>
          </Container>
          <section className="section bottom-slant-gray">
            <Container className="container-three">
              <Row>
                <Col sm={4}>
                  <img
                    className="img-left"
                    src={VParisi}
                    alt="Valeria Parisi"
                  />
                </Col>
                <Col sm={8}>
                  <TitleL title="valeria parisi" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum pulvinar velit a lorem bibendum venenatis. Sed
                    ornare varius velit, sit amet mattis orci eleifend at. Duis
                    sollicitudin mattis blandit. Pellentesque ultrices nisi
                    augue, interdum blandit tellus dapibus et. Nulla in augue
                    urna. Nulla interdum tristique massa, ut tristique purus
                    bibendum sit amet. In hac habitasse platea dictumst. Donec
                    congue suscipit tincidunt. Vivamus nec efficitur odio.
                  </p>
                </Col>
              </Row>
            </Container>
          </section>
        </section>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.section`
  section {
    position: relative;
    z-index: 2;
  }
  .bottom-slant-gray {
    position: relative;
    background-color: #f8f9fa;
  }
  .bottom-slant-gray:after {
    content: "";
    width: 100%;
    height: 240px;
    background: #fff;
    z-index: -1;
    bottom: -240px;
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
  .img-left {
    text-align: center;
    float: right;
    padding-right: 5%;
    padding-bottom: 8%;
    height: auto;
    width: 300px;
    object-fit: cover;
    background-size: cover;
  }
  .img-right {
    text-align: center;
    float: left;
    padding-left: 5%;
    height: auto;
    width: 300px;
    object-fit: cover;
    background-size: cover;
  }
  .container-one,
  .container-two,
  .container-three {
    font-family: "Montserrat", sans-serif;
    font-weight: 200;
    font-size: 1rem;
    line-height: 1.2rem;
    display: swap;
    text-align: right;
    color: #777777;
  }
  .container-one {
    margin-top: 100px !important;
  }
  .container-one p {
    text-align: left !important;
  }
  .container-two {
    margin-top: 220px !important;
    padding-bottom: 220px;
  }
  .container-three p {
    text-align: left !important;
  }
  .container-three {
    margin-bottom: 100px;
  }
`;

export default Team;
