//React
import React from "react";

//Gatsby
import { Link, withPrefix } from "gatsby";
import styled from "styled-components";

//Bootstrap
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";

//markup
const Places = (props) => {
  return (
    <Wrapper>
      <Container>
        <Card>
          <Link to={props.readMore} title={props.title} alt={props.title}>
            <Card.Img variant="top" src={withPrefix(`/images/${props.img}`)} />
          </Link>
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <p className="typology">{props.typology}</p>
            <Card.Text>{props.excerpt}</Card.Text>
          </Card.Body>
          <Link className="go-to" to={props.readMore}>
            Read More...
          </Link>
        </Card>
      </Container>
    </Wrapper>
  );
};

//style
const Wrapper = styled.section`
  a {
    color: rgb(130, 36, 51);
    font-weight: bolder;
    font-size: 0.8rem;
    line-height: 1rem;
    text-transform: uppercase;
    display: swap;
    text-decoration: none;
  }
  a:hover {
    color: rgb(130, 36, 51);
    font-weight: bolder;
    font-size: 0.8rem;
    line-height: 1rem;
    text-transform: uppercase;
    display: swap;
    text-decoration: none;
    letter-spacing: 0.1rem;
  }
  section {
    padding: 2em 5;
    position: relative;
    z-index: 2;
  }
  .card {
    border: none;
  }
  .card-body {
    font-family: "Montserrat", sans-serif;
    font-weight: 200;
    font-size: 1rem;
    line-height: 1.7rem;
    display: swap;
    text-align: left;
    color: #777777;
  }
  .card-title {
    font-weight: bolder;
    text-transform: uppercase;
    font-size: 1.5rem;
    color: rgb(0, 103, 120);
  }
  .container {
    padding-bottom: 5%;
  }
  .go-to {
    font-size: 1rem;
    text-align: center;
    margin: 3% 0 3% 0;
    padding-bottom: 2rem;
    padding-left: 1rem;
    text-align: left;
  }
  .go-to:hover {
    font-size: 1rem;
    letter-spacing: 0.1rem;
    background: none;
    border-color: transparent;
  }
  .typology {
    font-family: "Montserrat", sans-serif;
    font-weight: 200;
    font-size: 1rem;
    line-height: 1.7rem;
    display: swap;
    text-align: left;
    color: #777777;
    font-style: italic;
  }
`;
export default Places;
