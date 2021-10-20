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
    font-family: "Open Sans", sans-serif;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-weight: 200;
    font-size: 6rem;
  }
`;

export default TitleP;
