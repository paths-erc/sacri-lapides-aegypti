import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Picture from "../components/Picture";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Info from "../components/Sites/Info";
import Map from "../components/Map";
import TitleR from "../components/Title/TitleR";
import TitleL from "../components/Title/TitleL";
import Scroll from "../components/Scroll";
import HomeSliderImage1 from "../images/1-home/home-slider-1.jpg";
import { Container, Col, Row } from "react-bootstrap";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import styled from "styled-components";

const SitesLayout = ({ data }) => {
  const content = data.markdownRemark;
  const images = data.allFile.edges;
  return (
    <>
      <Header />
      <Picture title={content.frontmatter.title} src={HomeSliderImage1} />
      <Wrapper>
        <section className="section map">
          <Info
            other_names={content.frontmatter.other_names}
            egyptian_name={content.frontmatter.egyptian_name}
            greek_name={content.frontmatter.greek_name}
            coptic_name={content.frontmatter.coptic_name}
            arabic_name={content.frontmatter.arabic_name}
            arabic_transl={content.frontmatter.arabic_transl}
            area={content.frontmatter.area}
            region={content.frontmatter.region}
            paths_id={content.frontmatter.paths_id}
            pleiades_id={content.frontmatter.pleiades_id}
            tm_id={content.frontmatter.tm_id}
            typology={content.frontmatter.typology}
            dating_criteria={content.frontmatter.dating_criteria}
            year_from={content.frontmatter.year_from}
            year_to={content.frontmatter.year_to}
            episcopal_see_from_year={
              content.frontmatter.episcopal_see_from_year
            }
            timm_ref={content.frontmatter.timm_ref}
            status={content.frontmatter.status}
            editors={content.frontmatter.editors}
            date={content.frontmatter.date}
          />
          <Map
            lng={content.frontmatter.lng}
            lat={content.frontmatter.lat}
            zoom={content.frontmatter.zoom}
            popupHtml={content.frontmatter.popup}
          />
        </section>

        <section className="section methods">
          <Container className="about">
            <TitleL title="About the site"></TitleL>

            <Row xs={1}>
              <Col sm={4}>
                <ol>
                  {content.headings.map((h, i) => {
                    return (
                      <li key={i}>
                        <a href={`#${h.id}`} className={`indice-${h.depth}`}>
                          {h.value}
                        </a>
                      </li>
                    );
                  })}
                </ol>
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
          <Container>
            <TitleR title="Gallery"></TitleR>
          </Container>
          <SimpleReactLightbox>
            <SRLWrapper>
              <Container>
                <Row>
                  {images.map((image, key) => (
                    <Col xs={6} md={4} key={key}>
                      <a href={image.node.childImageSharp.fluid.src}>
                        <Img
                          fluid={image.node.childImageSharp.fluid}
                          style={{ margin: "3rem 0", height: "300px" }}
                          imgStyle={{ objectFit: "cover" }}
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
        </section>
        <Scroll showBelow={250} />
        <Footer />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  a {
    text-decoration: none;
    font-family: "Montserrat", sans-serif;
    font-weight: 200;
    font-size: 1rem;
    line-height: 1.7rem;
    display: swap;
    text-align: right;
    color: #777777;
  }
  a:hover {
    text-decoration: none;
    font-family: "Montserrat", sans-serif;
    font-weight: 200;
    font-size: 1rem;
    line-height: 1.7rem;
    display: swap;
    text-align: right;
    color: #822433;
  }
  .indice-1,
  .indice-2,
  .indice-3,
  .indice-4 {
    font-family: "Open Sans", sans-serif;
    font-weight: 100;
    font-size: 1rem;
    line-height: 1;
    display: swap;
    text-decoration: none;
    color: #777777;
  }
  .indice-1:hover,
  .indice-2:hover,
  .indice-3:hover,
  .indice-4:hover {
    font-size: 1rem;
    line-height: 1.5rem;
    display: swap;
    text-decoration: none;
    color: #822433;
  }
  .indice-1 {
    font-family: "Open Sans", sans-serif;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 1em;
  }
  .indice-2 {
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
    margin-left: 1rem;
  }
  .indice-3 {
    font-family: "Open Sans", sans-serif;
    font-weight: 100;
    margin-left: 2rem;
    font-style: italic;
  }

  li {
    padding-bottom: 2%;
  }
  .row {
    padding-bottom: 10px;
  }
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
    bottom: -240px;
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
  .text {
    font-family: "Montserrat", sans-serif;
    font-weight: 200;
    font-size: 1rem;
    line-height: 1.5rem;
    display: swap;
    padding-top: 5%;
    color: #777777;
  }
  .about {
    margin-top: 300px;
    margin-bottom: 200px;
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
      sort: { fields: name, order: ASC }
    ) {
      edges {
        node {
          base
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
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
        greek_name
        id
        img
        last_modified
        lat
        lng
        other_names
        paths_id
        pleiades_id
        popup
        region
        year_from
        year_to
        timm_ref
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
