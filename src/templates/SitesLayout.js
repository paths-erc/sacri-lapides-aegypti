import React from "react";
import { graphql } from "gatsby";
import "../styles/style.css";
import Picture from "../components/Picture";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Info from "../components/Sites/Info";
import Map from "../components/Map";
import Tab from "../components/Sites/Tab";
import HomeSliderImage1 from "../images/1-home/home-slider-1.jpg";

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
          date_from={content.frontmatter.date_from}
          date_to={content.frontmatter.date_to}
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
      <Tab />
      <div dangerouslySetInnerHTML={{ __html: content.html }}></div>
      <Footer />
    </>
  );
};

export default SitesLayout;

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      headings {
        value
        depth
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
