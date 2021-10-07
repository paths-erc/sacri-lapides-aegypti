import * as React from "react";
import { graphql } from "gatsby";
import "../styles/site.css";
import { Container, Col, Row } from "react-bootstrap";
import Layout from "../components/Layout";
import Slider from "../components/Slider";
import About from "../components/Home/About";
import Methods from "../components/Home/Methods";
import OurSites from "../components/Home/OurSites";
import TitleR from "../components/Title/TitleR";

// markup
export default ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <Slider />
      <About />
      <Methods />
      <section className="section bottom-slant-gray">
        <Container>
          <TitleR title="our sites" />
        </Container>
        {data.allMarkdownRemark.nodes.map((node) => (
          <OurSites
            img={node.frontmatter.img}
            title={node.frontmatter.title}
            typology={node.frontmatter.typology}
            excerpt={node.excerpt}
            readMore={node.fields.slug}
          />
        ))}
      </section>
    </Layout>
  );
};
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
        excerpt(pruneLength: 800)
        fields {
          slug
        }
      }
    }
  }
`;
