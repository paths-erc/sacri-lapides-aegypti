import React from "react";
import { graphql } from "gatsby";
import "../styles/style.css";
import Picture from "../components/Picture";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Info from "../components/Sites/Info";
import Map from "../components/Map";
import HomeSliderImage1 from "../images/1-home/home-slider-1.jpg";
import { Container, Col, Row } from "react-bootstrap";
import styled from "styled-components";

const SitesLayout = ({ data }) => {
  const content = data.markdownRemark;
  return (
    <>
      <Header />
      <Picture title={content.frontmatter.title} src={HomeSliderImage1} />

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
          episcopal_see_from_year={content.frontmatter.episcopal_see_from_year}
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

      {/* <Tab siteHeadings={content.headings} /> */}
      <Wrapper>
        <section className="section methods">
          <Container>
            <Row>
              <Col xs={4}>
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
              <Col xs={8}>
                <div
                  className="text"
                  dangerouslySetInnerHTML={{ __html: content.html }}
                ></div>
              </Col>
            </Row>
          </Container>
        </section>
      </Wrapper>

      <Footer />
    </>
  );
};

const Wrapper = styled.section`
  .indice-1,
  .indice-2,
  .indice-3,
  .indice-4 {
    font-family: "Raleway", sans-serif;
    font-size: 1.2rem;
    line-height: 2;
    display: swap;
    text-decoration: none;
    color: #777777;
  }
  .indice-1:hover,
  .indice-2:hover,
  .indice-3:hover,
  .indice-4:hover {
    font-family: "Raleway", sans-serif;
    font-size: 1.2rem;
    line-height: 2rem;
    display: swap;
    text-decoration: none;
    color: #822433;
  }
  .indice-1 {
    text-transform: uppercase;
    font-size: 1.2em;
    font-weight: bold;
  }
  .indice-2 {
    margin-left: 1rem;
    font-weight: bold;
  }
  .indice-3 {
    margin-left: 2rem;
  }
  .indice-4 {
    margin-left: 3rem;
    font-style: italic;
  }
  section {
    position: relative;
    z-index: 2;
    padding-top: 15%;
  }
  .methods:after {
    content: "";
    width: 100%;
    height: 260px;
    background: #fff;
    z-index: -1;
    bottom: -200px;
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
  .text {
    font-family: "Raleway", sans-serif;
    font-size: 1.2rem;
    line-height: 2rem;
    display: swap;
    padding-top: 5%;
    color: #777777;
  }
`;

export default SitesLayout;

export const query = graphql`
  query ($slug: String!) {
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
        path
        paths_id
        pleiades_id
        popup
        preview
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
