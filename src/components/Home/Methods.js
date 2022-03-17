import React from "react";

import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

import Title from "../Title";

//markup
const Methods = () => {
  return (
    <Wrapper>
      <section className="section methods">
        <Container className="methods">
          <Row xs={1} md={3} className="mx-5">
            <Title title="Methodology" />
          </Row>
          <Row xs={1} md={3} className="mx-5">
            <Col>
              <Card>
                <a
                  href="https://docs.paths-erc.eu/data/"
                  alt="paths-erc"
                  title="paths-erc"
                >
                  <StaticImage
                    src="../../../static/images/other/1-card.jpg"
                    width={500}
                    objectFit="scale-down"
                  />
                </a>
                <Card.Body>
                  <Card.Title>First Step</Card.Title>
                  <a
                    href="https://docs.paths-erc.eu/data/"
                    alt="paths-erc"
                    title="paths-erc"
                  >
                    “PAThs” DATA REPOSITORY
                  </a>
                  <Card.Text>
                    Collection and georeferencing on GIS platform of several and
                    diverse historical historical cartographical sources of
                    Egypt and site-level topographical surveys of the main
                    temples, churches, basilicas and other religious complexes.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <a
                  href="https://docs.paths-erc.eu/data/svp"
                  alt="paths-erc"
                  title="paths-erc"
                >
                  <StaticImage
                    src="../../../static/images/other/2-card.jpg"
                    width={500}
                    objectFit="scale-down"
                  />
                </a>
                <Card.Body>
                  <Card.Title>Second Step</Card.Title>
                  <a
                    href="https://docs.paths-erc.eu/data/svp"
                    alt="paths-erc"
                    title="paths-erc"
                  >
                    SVP PROTOCOL SPECIFICATIONS
                  </a>
                  <Card.Text>
                    Vectorization of geo-referenced plants on GIS platform using
                    a protocol (SPV) developed by “PAThs” team members.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <a
                  href="https://docs.paths-erc.eu/data/demo/"
                  alt="paths-erc"
                  title="paths-erc"
                >
                  <StaticImage
                    src="../../../static/images/other/3-card.jpg"
                    width={500}
                    objectFit="scale-down"
                  />
                </a>
                <Card.Body>
                  <Card.Title>Third Step</Card.Title>
                  <a
                    href="https://docs.paths-erc.eu/data/demo/"
                    alt="paths-erc"
                    title="paths-erc"
                  >
                    LIVE DEMO
                  </a>
                  <Card.Text>
                    Proposal of chronological phases, reconstruction hypothesis,
                    etc., which can be easily encoded with the help of minimal
                    and highly intuitive vocabularies and visualised on the Web.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </Wrapper>
  );
};

//styles
const Wrapper = styled.section`
  .section {
    position: relative;
    z-index: 2;
  }
  .methods:after {
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

export default Methods;
