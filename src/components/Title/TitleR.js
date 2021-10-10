import React from "react";
import styled from "styled-components";

const TitleR = ({ title }) => {
  return (
    <Wrapper>
      <div className="section-title">
        <h2>{title || "default title"}</h2>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .section-title {
    font-weight: bolder;
    letter-spacing: 0.1em;
    display: swap;
    text-transform: capitalize;
    text-align: right;
    padding-bottom: 2%;
    color: #777777;
    text-decoration: underline;
    text-decoration-color: rgb(130, 36, 51, 0.6);
    text-decoration-thickness: 0.3em;
  }
`;

export default TitleR;
