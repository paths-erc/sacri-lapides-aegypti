//React
import React from "react";

//Gatsby
import styled from "styled-components";

//markup
const Title = (props) => {
  const title = props.title;
  const align = props.align === "right" ? "right" : "left";

  return (
    <Wrapper>
      <div className={`section-title ${align}`}>
        <h2>{title}</h2>
      </div>
    </Wrapper>
  );
};

//styles
const Wrapper = styled.section`
  .section-title {
    font-family: "Open Sans", sans-serif;
    font-size: 2rem;
    font-weight: bolder;
    text-transform: uppercase;
    padding-bottom: 2%;
    color: #822433;
    text-decoration: underline;
    text-decoration-color: rgb(0, 103, 120);
    text-decoration-thickness: 0.1em;
  }
  .section-title.right {
    text-align: right;
  }
  .section-title.left {
    text-align: left;
  }
`;

export default Title;
