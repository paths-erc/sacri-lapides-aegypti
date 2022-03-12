//React
import * as React from "react";

//Gatsby
import { graphql } from "gatsby";
import styled from "styled-components";

//Bootstap
import { Container, Row, Col } from "react-bootstrap";

//Components
import Layout from "../templates/IndexLayout";
import Slider from "../components/Home/Slider";
import About from "../components/home/About";
import Methods from "../components/home/Methods";
import Places from "../components/home/Places";
import Title from "../components/Title";

// markup
const Index = ({ data }) => {
  return (
    <Layout>
      <Slider />
      <About />
      <Methods />
      <Wrapper>
        <section className="section bottom-slant-gray">
          <Container>
            <Title title="Archaeological sites" align="right" />
              <p className="intro-places">
                The archaeological sites analysed and described by “
                <em>Sacri lapides</em> ” have been selected on the basis of
                rigorous criteria, such as the reliability of literary and
                documentary sources and of scientific archaeological reports.
                Particular attention has been dedicated to collecting maps and
                images of the relevant monuments, in order to “map”
                topographical, functional and religious changes.
              </p>
            <Row xs={1} md={3}>
              {data.allMarkdownRemark.nodes.map((node, i) => (
                <Col key={i}>
                  <Places
                    img={node.frontmatter.img}
                    title={node.frontmatter.title}
                    path={node.frontmatter.path}
                    typology={node.frontmatter.typology}
                    area={node.frontmatter.area}
                    excerpt={node.excerpt}
                    readMore={node.fields.slug}
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      </Wrapper>
    </Layout>
  );
};

export default Index;

//styles
const Wrapper = styled.section`
  section {
    position: relative;
    z-index: 2;
  }
  .bottom-slant-gray {
    position: relative;
    padding-bottom: 10%;
    background-color: #f8f9fa;
  }
  .bottom-slant-gray:before {
    content: "";
    width: 100%;
    height: 240px;
    background: #f8f9fa;
    z-index: -1;
    top: 0px;
    background-color: #f8f9fa;
    left: 0;
    position: absolute;
    -webkit-transform: skewY(-6deg);
    -ms-transform: skewY(-6deg);
    transform: skewY(-6deg);
    -webkit-transform-origin: top left;
    -ms-transform-origin: top left;
    transform-origin: top left;
  }
  .intro-places {
    font-family: "Roboto Condensed", sans-serif;
    color: #777777;
    font-weight: 200;
    text-align: right;
  }
`;

export const query = graphql`
  {
    allMarkdownRemark(sort: { fields: frontmatter___title, order: ASC }) {
      nodes {
        frontmatter {
          id
          paths_id
          title
          area
          typology
          img
        }
        excerpt(pruneLength: 200)
        fields {
          slug
        }
      }
    }
  }
`;
