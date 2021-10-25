//Gatsby
import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

//markup
const HeaderImage = (props) => {
  const title = props.title;

  return (
    <Wrapper>
      <div className="section-one">
        <StaticImage
          src="../../static/images/other/home-slider-1.jpg"
          objectFit="cover"
          alt={title}
        />
        <h1>{title}</h1>
      </div>
    </Wrapper>
  );
};

//styles
const Wrapper = styled.section`
  img {
    filter: brightness(75%);
    height: calc(50vh);
    width: calc(300vh);
    object-fit: cover;
  }
  .section-one {
    position: relative;
    background-color: #f8f9fa;
  }
  .section-one:after {
    content: "";
    width: 100%;
    height: 230px;
    padding-bottom: 5%;
    background: #fff;
    z-index: 1;
    bottom: -230px;
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
  h1 {
    font-family: "Open Sans", sans-serif;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-weight: 200;
    font-size: 3.5rem;
    @media (min-width: 576px) {
      font-size: 5.5rem;
    }
  }
  /* TO DO: media query schermi piccoli: 4rem */
`;
export default HeaderImage;
