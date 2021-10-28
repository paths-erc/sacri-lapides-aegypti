//React
import React from "react";

//Gatsby
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

//Bootstrap
import { Container, Row, Col } from "react-bootstrap";

//Component
import Title from "../Title";

//markup
const About = () => {
  return (
    <Wrapper>
      <section className="section bottom-slant-gray">
        <Container>
          <Row xs={1} md={2}>
            <Col>
              <StaticImage
                src="../../../static/images/logos/sla.svg"
                width={500}
                objectFit="scale-down"
                title="Sacri lapides Aegypti"
                alt="Sacri lapides Aegypti"
              />
            </Col>
            <Col>
              <Title title="About" align="right" />
              <p className="about">
                The “ <em>Sacri lapides Aegypti</em> ” project aims to study and
                document the processes of transformation of sacred spaces for
                worship, identity and memory from Pharaonic and Ptolemaic-Roman
                Egypt to Christian Egypt through topographical-functional
                analysis and the creation of a general catalogue, in digital
                form, of the temple structures transformed into Christian places
                used for the production and preservation of books, as well as
                their cultic function.<br></br> “ <em>Sacri lapides Aegypti</em>{" "}
                ” is therefore the conceptual premise and the archaeological
                deepening of the ERC project “PAThs”, whose aim is to define a
                geography of Coptic manuscript production through the creation
                of a digital atlas, searchable thematically and chronologically.
              </p>
            </Col>
          </Row>
          <Row xs={1} md={2}>
            <Col>
              <StaticImage
                src="../../../static/images/other/cooperation.png"
                width={800}
                objectFit="scale-down"
                title="Sla and Paths"
                alt="Sla and Paths"
              />
            </Col>
            <Col>
              <Title title="Objective" align="right" />
              <p>
                As already stated, “ <em>Sacri lapides</em> ” project sinks its
                roots in the experience and scientific results of the ERC
                project “PAThs”, which aims to provide a geography of Coptic
                literary production through the realization of a chronologically
                and thematically searchable digital atlas,that allows an
                effective representation of the places where Coptic manuscripts
                were found, produced, copied, transferred, used and stored, as
                well as of the relationships between the places themselves and
                the actors and the institutions involved. Concurrently, it aims
                to define the connections among the different
                <em>scriptoria</em>
                and to analyse the distribution of the bibliological typologies.
                <br></br>“ <em>Sacri lapides</em> ”, on the other hand, is aimed
                at complementing the outcomes of “PAThs”, shedding light on the
                background, on the material preconditions, as well as on the
                transitional contexts, through the creation of a hitherto
                unattempted topography of Pharaonic shrines, chapels as well as
                graves whence the aforesaid manuscripts were recovered, since
                they were converted into basilicas, churches and monasteries
                housing <em>scriptoria</em> and libraries. If the archaeological
                côté is already in part represented in the ERC project “PAThs”,
                it is not so fully examined in a structural and widely
                diachronic perspective as by “ <em>Sacri lapides</em> ”. “{" "}
                <em>Sacri lapides</em> ” means to weld the history of the Coptic
                literary production to the Pharaonic and Ptolemaic-Roman past,
                lending practical substance to the understanding of the spread
                of new Christian cultural centres, which, similarly to the
                Pharaonic ones, are never severed from their places of worship.
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
  .about {
    padding-bottom: 3rem;
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
