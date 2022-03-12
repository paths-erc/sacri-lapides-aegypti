import React from "react";

import styled from "styled-components";
import { Helmet } from "react-helmet";
import { StaticImage } from "gatsby-plugin-image";

import Carousel from "react-bootstrap/Carousel";

import SlaLogo from "../../../static/images/logos/sla-animal.svg";

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
          <Carousel>
            <Carousel.Item interval={9000}>
              <StaticImage
                src="../../../static/images/other/home-slider-1.jpg"
                objectFit="contain"
              />
              <Carousel.Caption>
                <img
                  className="logo d-none d-md-inline-block"
                  src={SlaLogo}
                  alt="sacri-lapides"
                />
                <h3>Sacri lapides Aegypti</h3>
                <h5>
                  From the scribes of temples to the copyists of scriptoria. The
                  transformation of spaces of cult, identity and memory from
                  pharaonic and Graeco-Roman Egypt to Christian Egypt
                </h5>
                <p>A FARE MIUR Project hosted at Sapienza University of Rome</p>
                <a href="https://saras.uniroma1.it/">
                  <p>
                    Dept. of History, Anthropology, Religions, Arts and
                    Perfoming Arts
                  </p>
                </a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={9000}>
              <StaticImage
                src="../../../static/images/other/home-slider-2.jpg"
                objectFit="scale-down"
              />
              <Carousel.Caption>
                <img
                  className="logo d-none d-md-inline-block"
                  src={SlaLogo}
                  alt="sacri-lapides"
                />
                <h3>Sacri lapides Aegypti</h3>
                <h5>
                  From the scribes of temples to the copyists of scriptoria. The
                  transformation of spaces of cult, identity and memory from
                  pharaonic and Graeco-Roman Egypt to Christian Egypt
                </h5>
                <p>A FARE MIUR Project hosted at Sapienza University of Rome</p>
                <a href="https://saras.uniroma1.it/">
                  <p>
                    Dept. of History, Anthropology, Religions, Arts and
                    Perfoming Arts
                  </p>
                </a>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
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
    font-weight: 200;
    display: swap;
    font-size: 0.6rem;
    @media (min-width: 576px) {
      font-size: 1rem;
    }
    margin-bottom: 0.5rem;
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
  p {
    font-family: "Open Sans", sans-serif;
    font-weight: 200;
    display: swap;
    font-size: 0.5rem;
    margin-bottom: 0;
    @media (min-width: 576px) {
      font-size: 0.8rem;
    }
  }
  .carousel-caption {
    transform: translateY(-50%);
    bottom: initial;
    top: 50%;
    @media (min-width: 576px) {
      top: 40%;
    }
  }
  .carousel-indicators {
    margin-bottom: 10%;
    visibility: hidden;
  }
  .carousel-item {
    -webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    transform-style: preserve-3d;
  }
  .logo {
    max-width: 500px;
    width: 50%;
    margin: auto;
    filter: invert(1);
  }
  .logo-2 {
    max-width: 300px;
    width: 50%;
    margin: auto;
    background: rgba(255, 255, 255, 0.6);
    border-bottom-left-radius: 50px 50px;
  }
  .logo-3 {
    max-width: 100px;
    width: 40%;
    margin: auto;
    background: rgba(255, 255, 255, 0.6);
  }
  .slider-wrap {
    position: relative;
    background-color: #f8f9fa;
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
`;

export default Slider;
