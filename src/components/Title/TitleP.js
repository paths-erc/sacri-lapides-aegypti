import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";

const TitleP = ({ title }) => {
  return (
    <Wrapper>
      <h2>{title || "default title"}</h2>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  h2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 8rem;
  }
`;

export default TitleP;
