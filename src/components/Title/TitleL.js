import React from "react";
import styled from "styled-components";

const TitleR = ({ title }) => {
  return (
    <Wrapper>
      <div className="section-title">
        <h1>{title}</h1>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .section-title {
    font-family: "Open Sans", sans-serif;
    font-size: 2rem;
    font-weight: bolder;
    display: swap;
    text-transform: capitalize;
    text-align: left;
    padding-bottom: 2%;
    color: #777777;
    text-decoration: underline;
    text-decoration-color: rgb(130, 36, 51, 0.6);
    text-decoration-thickness: 0.1em;
  }
`;

export default TitleR;
