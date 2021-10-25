//Gatsby
import React from "react";
import { Link, withPrefix } from "gatsby";
import styled from "styled-components";

//Bootstrap
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";

//markup
const Places = (props) => {
  return (
    <Wrapper>
      <Container>
        <Card>
          <Link to={withPrefix(`${props.path}`)}>
            <Card.Img variant="top" src={withPrefix(`/images/${props.img}`)} />
          </Link>
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <p className="typology">{props.typology}</p>
            <Card.Text>{props.excerpt}</Card.Text>
          </Card.Body>
          <Button
            className="go-to"
            variant="primary"
            href={withPrefix(props.readMore)}
          >
            Read More...
          </Button>
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
  }
  .go-to {
    text-align: center;
    margin: 3% 0 3% 0;
    background: rgb(130, 36, 51, 0.2) !important;
    border-color: rgb(130, 36, 51, 0.3) !important;
  }
  .go-to:hover {
    background: none;
    border-color: transparent;
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
    text-align: right;
    color: #777777;
  }
  .card-title {
    font-weight: bolder;
    text-transform: uppercase;
    font-size: 1.5rem;
  }
  .container {
    padding-bottom: 5%;
  }
  .sites-img {
    border-top-left-radius: var(--radius);
    border-top-right-radius: var(--radius);
    height: 19rem;
    z-index: 1;
  }
  .sites-img::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom right, var(--clr-primary-5), #222);
    opacity: 0.85;
    transition: var(--transition);
  }
  .typology {
    font-family: "Montserrat", sans-serif;
    font-weight: 200;
    font-size: 1rem;
    line-height: 1.7rem;
    display: swap;
    text-align: right;
    color: #777777;
    font-style: italic;
  }
`;
export default Places;
