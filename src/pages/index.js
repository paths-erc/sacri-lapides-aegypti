import * as React from "react";
import { graphql } from "gatsby";
import "../styles/style.css";
import { Container, Row, Col } from "react-bootstrap";
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
      <section className="section bottom-slant-gray">
        <Container>
          <TitleR title="our sites" />
          <Row xs={1} md={2}>
            {data.allMarkdownRemark.nodes.map((node) => (
              <Col>
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
    </Layout>
  );
};

export default Index;

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
