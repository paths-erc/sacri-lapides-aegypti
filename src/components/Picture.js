import React from "react";
import styled from "styled-components";
import TitleP from "./Title/TitleP";

//markup
const Picture = (props) => {
  const src = props.src;
  const title = props.title;

  return (
    <Wrapper>
      <div className="section-one">
        <img src={src} alt={title}></img>
        {/* <Image className="d-block w-100" src={src} alt="Background" fluid /> */}
        <TitleP title={title} />
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
  /* img {
    filter: brightness(75%);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    height: calc(100vh);
    object-fit: cover;
    height: calc(50vh);
    position: relative;
  } */
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
  .title {
    position: absolute;
    top: 30%;
    padding-top: 10;
    width: 100%;
  }
`;
export default Picture;
