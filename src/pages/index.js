import * as React from "react";

import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import { Container, Row, Col } from "react-bootstrap";

import Layout from "../templates/IndexLayout";
import Slider from "../components/Home/Slider";
import About from "../components/home/About";
import Methods from "../components/home/Methods";
import Places from "../components/home/Places";
import Map from "../components/Home/Map";
import Title from "../components/Title";

// markup
const Index = ({ data }) => {

  return (
    <Layout>
      <React.Fragment>
        <Helmet>
          <title>Sacri lapides Aegypti</title>
          <meta
            name="description"
            content="The “Sacri lapides Aegypti” project aims to study and document the processes of transformation of sacred spaces for worship, identity and memory from Pharaonic and Ptolemaic-Roman Egypt to Christian Egypt through topographical-functional analysis and the creation of a general catalogue, in digital form, of the temple structures transformed into Christian places used for the production and preservation of books, as well as their cultic function."
          />
        </Helmet>
      </React.Fragment>

      <Slider />
      <About />
      <Methods />
      <Wrapper>
        <section className="section bottom-slant-gray">
          <Container className="places-intro">
            <Row className="mx-5">
              <Title title="Archaeological sites" align="right" />
            </Row>
           {/*  <Row className="mx-5">
              <Map />
            </Row> */}
            <Row className="mx-5 my-3">
              <p>
                The archaeological sites analysed and described by “
                <em>Sacri lapides</em> ” have been selected on the basis of
                rigorous criteria, such as the reliability of literary and
                documentary sources and of scientific archaeological reports.
                Particular attention has been dedicated to collecting maps and
                images of the relevant monuments, in order to “map”
                topographical, functional and religious changes.
              </p>
            </Row>

            <Row xs={1} md={3} className="mx-5">
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
  .places-intro {
    font-family: "Roboto Condensed", sans-serif;
    color: #777777;
    font-weight: 300;
    font-size: 1rem;
    line-height: 1.6rem;
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
          lat
          lng
          zoom
        }
        excerpt(pruneLength: 200)
        fields {
          slug
        }
      }
    }
  }
`;
