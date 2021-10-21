import React from "react";
import styled from "styled-components";

const Title = (props) => {
  const title = props.title;
  const align = props.align === 'right' ? 'right' : 'left';

  return (
    <Wrapper>
      <div className={`section-title ${align}`}>
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
    text-transform: capitalize;
    padding-bottom: 2%;
    color: #777777;
    text-decoration: underline;
    text-decoration-color: rgb(130, 36, 51, 0.6);
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
