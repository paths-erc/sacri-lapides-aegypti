import React from "react";

import styled from "styled-components";
import { Helmet } from "react-helmet";

import { StaticImage } from "gatsby-plugin-image";

import Carousel from "react-bootstrap/Carousel";

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
          />
        <meta name="robots" description="index" />
      </Helmet>

      <div className="slider-wrap">
        <section>
          <Carousel>
            <Carousel.Item interval={9000}>
            <StaticImage 
                className="d-block w-100" 
                src="../../../static/images/other/home-slider-1.jpg" 
                alt="Sacri Lapides Aegypti map 1" />

              <Carousel.Caption className="mx-5">
                <StaticImage 
                  src="../../../static/images/logos/sla-animal.svg" 
                  className="logo"
                  alt="Sacri lapides Aegypti"/>
                <h3>Sacri lapides Aegypti</h3>
                <h5>
                  From the scribes of temples to the copyists of scriptoria. The
                  transformation of spaces of cult, identity and memory from
                  pharaonic and Graeco-Roman Egypt to Christian Egypt
                </h5>
                <p>A FARE MIUR Project hosted at Sapienza University of Rome</p>
                <a
                  href="https://saras.uniroma1.it/"
                  title="Dept. of History, Anthropology, Religions, Arts and Perfoming Arts Sapienza University of Rome"
                >
                  <p>
                    Dept. of History, Anthropology, Religions, Arts and
                    Perfoming Arts
                  </p>
                </a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={9000}>
              <StaticImage 
                className="d-block w-100" 
                src="../../../static/images/other/home-slider-2.jpg" 
                alt="Sacri Lapides Aegypti map 2" />
              <Carousel.Caption className="mx-5">
                <StaticImage 
                  src="../../../static/images/logos/sla-animal.svg"
                  className="logo" 
                  alt="Sacri Lapides Aegypti map 1" />
                <h3>Sacri lapides Aegypti</h3>
                <h5>
                  From the scribes of temples to the copyists of scriptoria. The
                  transformation of spaces of cult, identity and memory from
                  pharaonic and Graeco-Roman Egypt to Christian Egypt
                </h5>
                <p>A FARE MIUR Project hosted at Sapienza University of Rome</p>
                <a
                  href="https://saras.uniroma1.it/"
                  alt="saras-uniroma1"
                  title="saras-uniroma1"
                >
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
    font-family: "Roboto Condensed", sans-serif;
    font-weight: 300;
    text-decoration: none;
    color: white !important;
    font-size: 0.7rem;
    @media (min-width: 576px) {
      font-size: 1rem;
    }
  }
  a:hover {
    font-family: "Roboto Condensed", sans-serif;
    font-weight: 300;
    text-decoration: underline;
    color: white !important;
    font-size: 0.7rem;
    @media (min-width: 576px) {
      font-size: 1rem;
    }
  }
  h3 {
    font-family: "Roboto Condensed", sans-serif;
    font-weight: 300;
    font-size: 1.5rem;
    @media (min-width: 576px) {
      font-size: 3.2rem;
    }
    margin-bottom: 0.3;
  }
  h5 {
    font-family: "Roboto Condensed", sans-serif;
    font-weight: 300;
    font-size: 0.6rem;
    @media (min-width: 576px) {
      font-size: 1.2rem;
    }
    margin-bottom: 0.5rem;
  }
  p {
    font-family: "Roboto Condensed", sans-serif;
    font-weight: 300;
    font-size: 0.5rem;
    margin-bottom: 0;
    @media (min-width: 576px) {
      font-size: 0.9rem;
    }
  }

  img {
    filter: brightness(65%);
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
    max-width: 380px;
    margin: auto;
    filter: invert(1);
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
