import React from "react";
import styled from "styled-components";
import TitleL from "../Title/TitleL";
import { Container, Tab, Row, Col, Nav } from "react-bootstrap";

const ContentTab = () => {
  return (
    <Wrapper>
      <section className="section methods">
        <Container>
          <TitleL title="site overview"></TitleL>
        </Container>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Container className="content-tab">
            <Row>
              <Col sm={4}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">About</Nav.Link>
                  </Nav.Item>
                  <Nav.Link>Acropolis</Nav.Link>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Pharaonic Period </Nav.Link>
                  </Nav.Item>
                  <Col className="tab-content-drop">
                    <Nav.Link eventKey="second-1">Cult</Nav.Link>
                    <Nav.Link eventKey="second-2">Ephigraphic Sources</Nav.Link>
                    <Nav.Link eventKey="second-3">Literary Sources</Nav.Link>
                    <Nav.Link eventKey="second-4">
                      Architectural elements
                    </Nav.Link>
                    <Nav.Link eventKey="second-5">Artifacts</Nav.Link>
                  </Col>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Hellenistic Period</Nav.Link>
                  </Nav.Item>
                  <Col className="tab-content-drop">
                    <Nav.Link eventKey="third-1">Cult</Nav.Link>
                    <Nav.Link eventKey="third-2">Ephigraphic Sources</Nav.Link>
                    <Nav.Link eventKey="third-3">Literary Sources</Nav.Link>
                    <Nav.Link eventKey="third-4">
                      Architectural elements
                    </Nav.Link>
                    <Nav.Link eventKey="third-5">Artifacts</Nav.Link>
                  </Col>
                  <Nav.Item>
                    <Nav.Link eventKey="fourth">Roman Period</Nav.Link>
                  </Nav.Item>
                  <Col className="tab-content-drop">
                    <Nav.Item>
                      <Nav.Link eventKey="fourth-1">Cult</Nav.Link>
                      <Nav.Link eventKey="fourth-2">
                        Ephigraphic Sources
                      </Nav.Link>
                      <Nav.Link eventKey="fourth-3">Literary Sources</Nav.Link>
                      <Nav.Link eventKey="fourth-4">
                        Architectural elements
                      </Nav.Link>
                      <Nav.Link eventKey="fourth-5">Artifacts</Nav.Link>
                    </Nav.Item>
                  </Col>
                  <Nav.Item>
                    <Nav.Link eventKey="fifth">Late Antique Period</Nav.Link>
                  </Nav.Item>
                  <Col className="tab-content-drop">
                    <Nav.Item>
                      <Nav.Link eventKey="fifth-1">Cult</Nav.Link>
                      <Nav.Link eventKey="fifth-2">
                        Ephigraphic Sources
                      </Nav.Link>
                      <Nav.Link eventKey="fifth-3">Literary Sources</Nav.Link>
                      <Nav.Link eventKey="fifth-3">
                        Architectural elements
                      </Nav.Link>
                      <Nav.Link eventKey="fifth-3">Artifacts</Nav.Link>
                    </Nav.Item>
                  </Col>
                  <Nav.Item>
                    <Nav.Link eventKey="sixth">Bibliography</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={7}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc tincidunt eu purus sit amet dignissim. Curabitur
                      vitae hendrerit nulla, vitae ultrices libero.
                    </p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Container>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc tincidunt eu purus sit amet dignissim. Curabitur
                        vitae hendrerit nulla, vitae ultrices libero.
                      </p>
                    </Container>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <Container>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc tincidunt eu purus sit amet dignissim. Curabitur
                        vitae hendrerit nulla, vitae ultrices libero.
                      </p>
                    </Container>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third-1">
                    <Container>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc tincidunt eu purus sit amet dignissim.
                      </p>
                    </Container>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third-2">
                    <Container>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc tincidunt eu purus sit amet dignissim.
                      </p>
                    </Container>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third-3">
                    <Container>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc tincidunt eu purus sit amet dignissim.
                      </p>
                    </Container>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourth">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc tincidunt eu purus sit amet dignissim.
                    </p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fifth">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc tincidunt eu purus sit amet dignissim.
                    </p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="sixth">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc tincidunt eu purus sit amet dignissim.
                    </p>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Container>
        </Tab.Container>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .content-tab {
    font-family: "Raleway", sans-serif;
    font-size: 1rem;
    line-height: 1.7rem;
    display: swap;
    padding-top: 5%;
  }
  .content-tab .nav-link {
    color: #777777;
    text-transform: uppercase;
    letter-spacing: 0.01rem;
  }
  .tab-content-drop .nav-link {
    color: #777777;
    text-transform: capitalize;
  }
  .content-tab .nav-link:hover {
    color: #777777;
    font-weight: bolder;
    background-color: transparent !important;
  }
  .content-tab .nav-link.active {
    color: #777777;
    font-weight: bolder;
    background-color: transparent !important;
  }
  .section {
    position: relative;
    z-index: 2;
    padding-top: 15%;
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

export default ContentTab;
