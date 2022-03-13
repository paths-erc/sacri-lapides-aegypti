import React from "react";

import { Link, withPrefix } from "gatsby";
import styled from "styled-components";

import Card from "react-bootstrap/Card";
import { Container} from "react-bootstrap";

//markup
const Places = (props) => {
  return (
    <Wrapper>
      <Container className="places">
        <Card>
          <Link to={props.readMore} title={props.title} alt={props.title}>
            <Card.Img variant="top" src={withPrefix(`/images/${props.img}`)} />
          </Link>
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text className="card-info">
              {props.typology} | {props.area}
            </Card.Text>
            <Card.Text>{props.excerpt}</Card.Text>
            <Link to={props.readMore}>Read More...</Link>
          </Card.Body>
        </Card>
      </Container>
    </Wrapper>
  );
};

//style
const Wrapper = styled.section`
  section {
    padding: 2em 5;
    position: relative;
    z-index: 2;
  }
`;
export default Places;
