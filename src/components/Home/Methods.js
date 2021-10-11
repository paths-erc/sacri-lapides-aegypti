import React from "react";
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import TitleL from "../Title/TitleL";
import Card1 from "../..//images/1-home/1-card.jpg";
import Card2 from "../../images/1-home/2-card.jpg";
import Card3 from "../../images/1-home/3-card.jpg";

const Methods = () => {
  return (
    <Wrapper>
      <section className="section methods">
        <Container>
          <TitleL title="methodology" />
          <Row xs={1} md={3}>
            <Col>
              <Card>
                <Card.Img variant="top" fluid={true} src={Card1} />
                <Card.Body>
                  <Card.Title>First Step</Card.Title>
                  <Button variant="primary">
                    <a href="https://docs.paths-erc.eu/data/">
                      go to paths repository
                    </a>
                  </Button>
                  <Card.Text>
                    Collection and georeferencing on GIS platform of most of the
                    historical cartography of Egypt and plans of the main
                    temple/church/basilica complexes
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={Card2} />
                <Card.Body>
                  <Card.Title>Second Step</Card.Title>
                  <Button variant="primary">
                    <a href="https://docs.paths-erc.eu/data/svp">
                      go to spv protocol
                    </a>
                  </Button>
                  <Card.Text>
                    Vectorization of geo-referenced plants on GIS platform using
                    a protocol (SPV) developed by PAThs team members
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={Card3} />
                <Card.Body>
                  <Card.Title>Third Step</Card.Title>
                  <Button variant="primary">
                    <a href="https://docs.paths-erc.eu/data/demo/#./paths.places.101-Tebtynis/BGQ6JNX2-47">
                      go to live demo
                    </a>
                  </Button>
                  <Card.Text>
                    Chronological phases, reconstruction hypothesis, etc., can
                    be easily endoded with a help of minimal and higly intuitive
                    vocabularies
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

const Wrapper = styled.section`
  a {
    color: rgb(130, 36, 51);
    font-weight: bolder;
    font-size: 0.8rem;
    line-height: 1rem;
    text-transform: uppercase;
    display: swap;
    text-decoration: none;
  }
  a:hover {
    color: rgb(130, 36, 51);

    font-weight: bolder;
    font-size: 0.8rem;
    line-height: 1rem;
    text-transform: uppercase;
    display: swap;
    text-decoration: none;
  }
  button {
    font-family: "Montserrat", sans-serif;
    font-weight: 200;
    font-size: 1.2rem;
    line-height: 1.7rem;
    display: swap;
    text-align: right;
    color: #777777;
    text-align: left;
    margin: 3% 0 3% 0;
    background: rgb(130, 36, 51, 0.2);
    border-color: rgb(130, 36, 51, 0.3);
  }
  button:hover {
    background: none;
    border-color: transparent;
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
    font-size: 1.2rem;
    line-height: 1.7rem;
    display: swap;
    text-align: right;
    color: #777777;
  }
  .card-title {
    font-family: "Montserrat", sans-serif;
    font-size: 1.8rem;
    line-height: 1.7rem;
    display: swap;
    text-align: right;
    color: #777777;
    font-weight: bolder;
    text-transform: uppercase;
  }
  .container {
    padding-top: 240px;
    padding-bottom: 240px;
  }
`;

export default Methods;
