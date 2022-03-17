import React from "react";

import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import Title from "../Title";

//markup
const About = () => {
  return (
    <Wrapper>
      <section className="section bottom-slant-gray">
        <Container className="about">
          <Row xs={1} md={2} className="mx-5 ">
            <Col className="my-5">
              <StaticImage
                src="../../../static/images/logos/sla.png"
                width={300}
                objectFit="cover"
                title="Sacri Lapides Aegypti"
                alt="Sacri Lapides Aegypti"
              />
            </Col>
            <Col>
              <Title title="About" align="left" />
              <p>
                The “<em>Sacri lapides Aegypti</em>” project aims to study and
                document the processes of transformation of sacred spaces for
                worship, identity and memory from Pharaonic and Ptolemaic-Roman
                Egypt to Christian Egypt through topographical-functional
                analysis and the creation of a general catalogue, in digital
                form, of the temple structures transformed into Christian places
                used for the production and preservation of books, as well as
                their cultic function.
                <br /> “<em>Sacri lapides Aegypti</em>” is therefore the
                conceptual premise and the archaeological deepening of the ERC
                project “PAThs”, whose aim is to define a geography of Coptic
                manuscript production through the creation of a digital atlas,
                searchable thematically and chronologically.
              </p>
            </Col>
          </Row>
          <Row xs={1} md={2} className="mx-5">
            <Col md={{ offset: 6 }}>
              <Title title="goals" align="left" />
              <p>
                “<em>Sacri lapides</em>” means to weld the history of the Coptic
                literary production to the Pharaonic and Ptolemaic-Roman past,
                lending practical substance to the understanding of the spread
                of new Christian cultural centres, which, similarly to the
                Pharaonic ones, are never severed from their places of worship.{" "}
                <br />
                In the light of such awareness – the intimate connection between
                place of worship and place of production and storage of the
                culture – we mean to create a fully original research tool,
                which will serve Egyptologists as well as archaeologists and
                Late Antique scholars, namely an exhaustive digital catalogue of
                selection of the heathen shrines converted into Christian
                religious and cultural centers.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </Wrapper>
  );
};

//styles
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
    height: 260px;
    background: #fff;
    z-index: -1;
    bottom: -150px;
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
