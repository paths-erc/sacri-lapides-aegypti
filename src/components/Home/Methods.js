//React
import React from "react";

//Gatsby
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

//Bootstrap
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

//Component
import Title from "../Title";

//markup
const Methods = () => {
  return (
    <Wrapper>
      <section className="section methods">
        <Container>
          <Title title="Methodology" />
          <Row xs={1} md={3}>
            <Col>
              <Card>
                <Link to="https://docs.paths-erc.eu/data/">
                  <StaticImage
                    src="../../../static/images/other/1-card.jpg"
                    width={500}
                    objectFit="scale-down"
                  />
                </Link>
                <Card.Body>
                  <Card.Title>First Step</Card.Title>
                  <Link to="https://docs.paths-erc.eu/data/">
                    “PAThs” DATA REPOSITORY
                  </Link>
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
                <Link to="https://docs.paths-erc.eu/data/svp">
                  <StaticImage
                    src="../../../static/images/other/2-card.jpg"
                    width={500}
                    objectFit="scale-down"
                  />
                </Link>
                <Card.Body>
                  <Card.Title>Second Step</Card.Title>
                  <Link to="https://docs.paths-erc.eu/data/svp">
                    SVP PROTOCOL SPECIFICATIONS
                  </Link>
                  <Card.Text>
                    Vectorization of geo-referenced plants on GIS platform using
                    a protocol (SPV) developed by “PAThs” team members.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Link to="https://docs.paths-erc.eu/data/demo/">
                  <StaticImage
                    src="../../../static/images/other/3-card.jpg"
                    width={500}
                    objectFit="scale-down"
                  />
                </Link>
                <Card.Body>
                  <Card.Title>Third Step</Card.Title>
                  <Link to="https://docs.paths-erc.eu/data/demo/">
                    LIVE DEMO
                  </Link>
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
  a {
    color: rgb(130, 36, 51);
    font-weight: bolder;
    font-size: 0.8rem;
    line-height: 1rem;
    /* text-transform: uppercase; */
    display: swap;
    text-decoration: none;
  }
  a:hover {
    color: rgb(130, 36, 51);
    font-weight: 600;
    font-size: 0.8rem;
    line-height: 1rem;
    /* text-transform: uppercase; */
    display: swap;
    text-decoration: none;
  }
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
  .card {
    border: none;
    padding-top: 10%;
  }
  .card-body {
    font-family: "Montserrat", sans-serif;
    font-weight: 200;
    font-size: 0.9rem;
    line-height: 1.5rem;
    display: swap;
    text-align: right;
    color: #777777;
  }
  .card-title {
    font-family: "Montserrat", sans-serif;
    font-size: 1.3rem;
    line-height: 1.7rem;
    display: swap;
    text-align: right;
    color: #777777;
    font-weight: bolder;
    text-transform: uppercase;
    color: rgb(0, 103, 120);
  }
  .container {
    padding-top: 240px;
    padding-bottom: 240px;
  }
`;

export default Methods;
