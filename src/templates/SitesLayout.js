//Gatsby
import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { GatsbyImage } from "gatsby-plugin-image";

//Bootstrap
import { Container, Col, Row } from "react-bootstrap";

//Components
import HeaderImage from "../components/HeaderImage";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Info from "../components/Sites/Info";
import Map from "../components/Map";
import Title from "../components/Title";
import Scroll from "../components/Scroll";

import "./Layout.scss";

//Lightbox
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

//markup
const SitesLayout = ({ data }) => {
  const content = data.markdownRemark;
  const images = data.allFile.edges;
  return (
    <>
      <Helmet>
        <title>{content.frontmatter.title}</title>
        <meta
          name="keywords"
          content="sla, sacri lapides aegypti, egypt, egyptology, archaeology, late antique egypt, egyptian topography"
        ></meta>
        <meta name="robots" description="index" />
      </Helmet>
      <Header />
      <HeaderImage title={content.frontmatter.title} />
      <Wrapper>
        <section className="section map">
          <Container>
            <Row className="mx-5">
              <Title title="general information" align="right" />
            </Row>
            <Row xs={1} md={2} className="mx-5">
              <Col>
                <Info
                  other_names={content.frontmatter.other_names}
                  egyptian_name={content.frontmatter.egyptian_name}
                  greek_name={content.frontmatter.greek_name}
                  coptic_name={content.frontmatter.coptic_name}
                  latin_name={content.frontmatter.latin_name}
                  arabic_name={content.frontmatter.arabic_name}
                  arabic_transl={content.frontmatter.arabic_transl}
                  area={content.frontmatter.area}
                  paths_id={content.frontmatter.paths_id}
                  pleiades_id={content.frontmatter.pleiades_id}
                  tm_id={content.frontmatter.tm_id}
                  topotext_id={content.frontmatter.topotext_id}
                  typology={content.frontmatter.typology}
                  dating_criteria={content.frontmatter.dating_criteria}
                  year_from={content.frontmatter.year_from}
                  year_to={content.frontmatter.year_to}
                  episcopal_see_from_year={
                    content.frontmatter.episcopal_see_from_year
                  }
                  notes_on_episcopal_see={
                    content.frontmatter.notes_on_episcopal_see
                  }
                  status={content.frontmatter.status}
                  editors={content.frontmatter.editors}
                  date={content.frontmatter.date}
                />
              </Col>
              <Col>
                <Map
                  className="map"
                  lng={content.frontmatter.lng}
                  lat={content.frontmatter.lat}
                  zoom={content.frontmatter.zoom}
                  popupHtml={content.frontmatter.title}
                />
              </Col>
            </Row>
          </Container>
        </section>

        <section className="section methods">
          <Container className="indice">
            <Row className="mx-5">
              <Title title={content.frontmatter.title} />
            </Row>
            <Row xs={1} className="mx-5">
              <Col sm={4}>
                <ul className="ul-indice">
                  {content.headings.map((h, i) => {
                    return (
                      <li key={i}>
                        <a href={`#${h.id}`} className={`indice-h${h.depth}`}>
                          {h.value}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </Col>
              <Col sm={8}>
                <div
                  className="text"
                  dangerouslySetInnerHTML={{ __html: content.html }}
                ></div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="section bottom-slant-gray">
          <Container className="gallery">
            <Row className="mx-5">
              <Title title="Gallery" align="right" />
            </Row>

            <SimpleReactLightbox>
              <SRLWrapper>
                <Container>
                  <Row>
                    {images.map((image, key) => (
                      <Col xs={6} md={4} key={key}>
                        <a
                          className="pointer"
                          href={image.node.childImageSharp.gatsbyImageData.src}
                        >
                          <GatsbyImage
                            image={image.node.childImageSharp.gatsbyImageData}
                            style={{ margin: "3rem 0", height: "300px" }}
                            imgStyle={{ objectFit: "scale-down" }}
                            alt={image.node.base
                              .split(".")
                              .slice(0, -1)
                              .join(".")}
                          />
                          <p className="caption">
                            {image.node.base.split(".").slice(0, -1).join(".")}
                          </p>
                        </a>
                      </Col>
                    ))}
                  </Row>
                </Container>
              </SRLWrapper>
            </SimpleReactLightbox>
          </Container>
        </section>
        <Scroll showBelow={250} />
        <Footer />
      </Wrapper>
    </>
  );
};

//styles
const Wrapper = styled.section`
  section {
    position: relative;
    z-index: 2;
  }
  .section.map {
    position: relative;
    padding-top: 1rem;
    background-color: #f8f9fa;
  }
  .section.map:after {
    content: "";
    width: 100%;
    height: 240px;
    background: #fff;
    z-index: -1;
    bottom: -220px;
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
  .section.methods:after {
    content: "";
    width: 100%;
    height: 260px;
    background: #fff;
    z-index: -1;
    bottom: -240px;
    background-color: #fff;
    left: 0;
    position: absolute;
    -webkit-transform: skewY(-6deg);
    -ms-transform: skewY(-6deg);
    transform: skewY(-6deg);
    -webkit-transform-origin: top left;
    -ms-transform-origin: top left;
    transform-origin: top left;
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
  
`;

export default SitesLayout;

export const query = graphql`
  query ($slug: String!, $absolutePathRegex: String!) {
    allFile(
      filter: {
        absolutePath: { regex: $absolutePathRegex }
        extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
      }
      sort: { fields: base, order: ASC }
    ) {
      edges {
        node {
          base
          name
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, quality: 80, width: 1500)
          }
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      headings {
        value
        depth
        id
      }
      frontmatter {
        title
        arabic_name
        arabic_transl
        area
        coptic_name
        date
        dating_criteria
        editors
        egyptian_name
        episcopal_see_from_year
        notes_on_episcopal_see
        greek_name
        latin_name
        id
        img
        lat
        lng
        other_names
        paths_id
        pleiades_id
        topotext_id
        year_from
        year_to
        status
        title
        tm_id
        typology
        zoom
      }
      excerpt
    }
  }
`;
