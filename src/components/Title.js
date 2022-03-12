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
    font-family: "Lora", serif;
    font-size: 1.2rem;
    font-weight: bolder;
    text-transform: capitalize;
    color: #822433;
    /* text-decoration-color: rgb(0, 103, 120); */
  }
  .section-title.right {
    text-align: right;
  }
  .section-title.left {
    text-align: left;
  }
`;

export default Title;
