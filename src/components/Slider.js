import React from "react";
import Carousel from "react-bootstrap/Carousel";
import HomeSliderImage1 from "../../static/images/other/home-slider-1.jpg";
import HomeSliderImage2 from "../../static/images/other/home-slider-2.jpg";
import SlaLogo from "../../static/images/logos/sla.svg";
import styled from "styled-components";

//markup
const Slider = () => {
  return (
    <Wrapper>
      <div className="slider-wrap">
        <section>
          <Carousel>
            <Carousel.Item interval={9000}>
              <img
                className="d-block w-100"
                src={HomeSliderImage1}
                alt="First slide"
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
              <img
                className="d-block w-100"
                src={HomeSliderImage2}
                alt="Second slide"
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
