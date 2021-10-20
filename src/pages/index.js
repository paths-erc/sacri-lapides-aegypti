import * as React from "react";
import { graphql } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Layout from "../components/Layout";
import Slider from "../components/Slider";
import About from "../components/Home/About";
import Methods from "../components/Home/Methods";
import OurSites from "../components/Home/OurSites";
import TitleR from "../components/Title/TitleR";

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
            <TitleR title="Archaeological sites" />

            <Row xs={1} md={2}>
              {data.allMarkdownRemark.nodes.map((node, i) => (
                <Col key={i}>
                  <OurSites
                    img={node.frontmatter.img}
                    title={node.frontmatter.title}
                    typology={node.frontmatter.typology}
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
  .row {
    padding-top: 30px;
  }
`;

export const query = graphql`
  {
    allMarkdownRemark(sort: { fields: frontmatter___title, order: ASC }) {
      nodes {
        frontmatter {
          title
          typology
          id
          paths_id
          img
        }
        excerpt(pruneLength: 400)
        fields {
          slug
        }
      }
    }
  }
`;
