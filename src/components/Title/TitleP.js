import React from "react";
import styled from "styled-components";

const TitleP = ({ title }) => {
  return (
    <Wrapper>
      <h2>{title || "default title"}</h2>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  h2 {
    background-color: transparent;
    left: 0;
    position: absolute;
    text-align: center;
    top: 30%;
    padding-top: 10%;
    width: 100%;

    font-family: "Raleway", sans-serif;
    font-weight: 200;
    display: swap;
    text-transform: capitalize;
    font-size: 500%;
    color: white;
  }
`;

export default TitleP;
