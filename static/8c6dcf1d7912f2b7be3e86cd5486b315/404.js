//React
import * as React from "react";

//Gatsby
import { withPrefix } from "gatsby";
import styled from "styled-components";

//Bootstrap
import { Container, Row, Col } from "react-bootstrap";

//Components
import Layout from "../templates/IndexLayout";
import HeaderImage from "../components/HeaderImage";

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <HeaderImage></HeaderImage>
      <Wrapper>
        <section className="section bottom-slant-gray">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }}>
                <h1>Error</h1>
                <h2>Sorry, this page does not exist</h2>
                <a href={withPrefix(`/`)}>
                  <h3>Go to Home</h3>
                </a>
              </Col>
            </Row>
          </Container>
        </section>
      </Wrapper>
    </Layout>
  );
};

//styles
const Wrapper = styled.section`
  a {
    font-family: "Montserrat", sans-serif;
    color: rgb(130, 36, 51, 0.5) !important;
    text-decoration: none;
    text-align: center !important;
  }
  a:hover {
    font-family: "Montserrat", sans-serif;
    color: rgb(130, 36, 51) !important;
    text-decoration: underline;
    text-align: center !important;
  }
  h1 {
    font-family: "Montserrat", sans-serif;
    text-align: center;
    color: rgb(130, 36, 51);
    font-size: 6rem;
  }
  h2 {
    font-family: "Montserrat", sans-serif;
    text-align: center;
    color: #777777;
  }
  h3 {
    font-family: "Montserrat", sans-serif;
    font-size: 3rem;
  }
  section {
    padding: 0;
    position: relative;
    z-index: 2;
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
  .container {
    margin-bottom: 10rem;
  }
`;

export default NotFoundPage;
