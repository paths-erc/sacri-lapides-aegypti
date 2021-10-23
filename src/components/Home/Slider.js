//Gatsby
import React from "react";
import styled from "styled-components";
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
    top: 50%;
    transform: translateY(-50%);
    bottom: initial;
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
    font-size: 300%;
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
    height: 300px;
    width: 500px;
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
