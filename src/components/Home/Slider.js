//Gatsby
import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { StaticImage } from "gatsby-plugin-image";

//Bootstrap
import Carousel from "react-bootstrap/Carousel";

//Images
import SlaLogo from "../../../static/images/logos/sla-animal.svg";

//markup
const Slider = () => {
  return (
    <Wrapper>
      <div className="slider-wrap">
        <section>
          <Carousel>
            <Carousel.Item interval={9000}>
              <StaticImage
                src="../../../static/images/other/home-slider-1.jpg"
                objectFit="contain"
              />
              <Carousel.Caption>
                <Helmet>
                  <title>Sacri Lapides Aegypti</title>
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
                <img className="logo" src={SlaLogo} alt="sacri-lapides"></img>
                <h3>Sacri Lapides Aegypti</h3>
                <p>A FARE MIUR Project hosted at Sapienza University of Rome</p>
                <div
                  data-sal="slide-up"
                  data-sal-delay="300"
                  data-sal-easing="ease"
                ></div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={9000}>
              <StaticImage
                src="../../../static/images/other/home-slider-2.jpg"
                objectFit="scale-down"
              />
              <Carousel.Caption>
                <img className="logo" src={SlaLogo} alt="sacri-lapides"></img>
                <h3>Sacri Lapides Aegypti</h3>
                <p>A FARE MIUR Project hosted at Sapienza University of Rome</p>
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
  h3 {
    font-family: "Open Sans", sans-serif;
    font-weight: 200;
    display: swap;
    font-size: 1.5rem;
    @media (min-width: 576px) {
      font-size: 4rem;
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
    width: 50%;
    margin: auto;
    filter: invert(1);
  }
  p {
    font-family: "Open Sans", sans-serif;
    font-weight: 200;
    display: swap;
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
