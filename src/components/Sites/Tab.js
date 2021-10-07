import React from "react";
import styled from "styled-components";
import TitleL from "../Title/TitleL";
import { Container, Tab, Row, Col, Nav } from "react-bootstrap";

const ContentTab = (props) => {
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
                    <Nav.Link eventKey="first">
                      {props.tableOfContents}
                    </Nav.Link>
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
