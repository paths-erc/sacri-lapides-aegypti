//React
import React from "react";

//Gatsby
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { StaticImage } from "gatsby-plugin-image";

//Bootstrap
import { Container } from "react-bootstrap";

//Images
import SlaLogo from "../../../static/images/logos/sla-animal.svg";
import SapienzaLogo from ".././../../static/images/logos/sapienza_logo.png";
import CattedraLogo from ".././../../static/images/logos/logo_cattedra.png";

//markup
const Slider = () => {
  return (
    <Wrapper>
      <Helmet>
        <title>Sacri lapides Aegypti</title>
        <meta
          name="description"
          content="The Sacri lapides Aegypti project aims to study and
                document the processes of transformation of sacred spaces for
                worship, identity and memory from Pharaonic and Ptolemaic-Roman
                Egypt to Christian Egypt"
        />
        <meta
          name="keywords"
          content="egypt, egyptology, archaeology, late antique egypt, egyptian topography"
        ></meta>
        <meta name="robots" description="index" />
      </Helmet>

      <div className="slider-wrap">
        <section>
          <StaticImage
            src="../../../static/images/other/home-slider-1.jpg"
            objectFit="scale-down"
          />
          <img
            className="logo d-none d-md-inline-block"
            src={SlaLogo}
            alt="Sacri lapides Aegypti"
            title="Sacri lapides Aegypti"
          ></img>
          <img
            className="logo-2 d-none d-md-inline-block"
            src={SapienzaLogo}
          ></img>
          <a href="https://sites.google.com/uniroma1.it/cattedra-egittologia-sapienza/home">
            <img
              className="logo-3 d-none d-md-inline-block"
              src={CattedraLogo}
              alt="Cattedra di Egittologia e Civiltà Copta"
              alt="Cattedra di Egittologia e Civiltà Copta"
            ></img>
          </a>
          <Container className="text-slider">
            <h3>Sacri lapides Aegypti</h3>
            <h5>
              From the scribes of temples to the copyists of scriptoria. The
              transformation of spaces of cult,<br></br> identity and memory
              from pharaonic and Graeco-Roman Egypt to Christian Egypt
            </h5>
            <p>A FARE MIUR Project hosted at Sapienza University of Rome</p>
            <a href="https://saras.uniroma1.it/" alt="SARAS" title="SARAS">
              <p>
                Dept. of History, Anthropology, Religions, Arts and Perfoming
                Arts
              </p>
            </a>
          </Container>
        </section>
      </div>
    </Wrapper>
  );
};

//styles
const Wrapper = styled.section`
  a {
    font-family: "Open Sans", sans-serif;
    font-weight: 200;
    display: swap;
    text-decoration: none;
    color: white !important;
    font-size: 0.7rem;
    @media (min-width: 576px) {
      font-size: 1rem;
    }
  }
  a:hover {
    font-family: "Open Sans", sans-serif;
    font-weight: 200;
    display: swap;
    text-decoration: underline;
    color: white !important;
    font-size: 0.7rem;
    @media (min-width: 576px) {
      font-size: 1rem;
    }
  }
  h3 {
    font-family: "Open Sans", sans-serif;
    color: white !important;
    font-weight: 200;
    display: swap;
    font-size: 1.5rem;
    @media (min-width: 576px) {
      font-size: 3rem;
    }
    margin-bottom: 0.3;
  }
  h5 {
    font-family: "Open Sans", sans-serif;
    color: white !important;
    font-weight: 200;
    display: swap;
    font-size: 0.7rem;
    margin-bottom: 1rem;
    @media (min-width: 576px) {
      font-size: 1.3rem;
    }
  }
  p {
    font-family: "Open Sans", sans-serif;
    color: white !important;
    font-weight: 200;
    display: swap;
    font-size: 0.6rem;
    margin-bottom: 0;
    @media (min-width: 576px) {
      font-size: 1rem;
    }
  }
  img {
    filter: brightness(75%);
  }
  img .d-block {
    background-position: center top !important;
    background-size: cover;
    background-repeat: no-repeat;
    height: calc(100vh);
    min-height: 1000px;
    position: relative;
  }
  .logo {
    max-width: 500px;
    width: 30%;
    margin: auto;
    filter: invert(1);
    position: absolute;
    top: 100px;
    left: 50px;
    right: 50px;
  }
  .logo-2 {
    max-width: 200px;
    width: 30%;
    margin: auto;
    position: absolute;
    top: 110px;
    left: 50px;
    right: 1200px;
  }
  .logo-3 {
    max-width: 150px;
    width: 30%;
    margin: auto;
    position: absolute;
    top: 180px;
    left: 50px;
    right: 1200px;
  }
  .slider-wrap {
    position: relative;
  }
  .slider-wrap:after {
    content: "";
    width: 100%;
    height: 240px;
    background: #fff;
    z-index: 1;
    bottom: -240px;
    left: 0;
    position: absolute;
    -webkit-transform: skewY(-6deg);
    -ms-transform: skewY(-6deg);
    transform: skewY(-6deg);
    -webkit-transform-origin: top left;
    -ms-transform-origin: top left;
    transform-origin: top left;
    background-color: #f8f9fa;
  }
  .text-slider {
    text-align: center;
    position: absolute;
    margin: 50 50;
    top: 50px;
    @media (min-width: 576px) {
      top: 500px;
      left: 50px;
      right: 50px;
    }
  }
`;

export default Slider;
