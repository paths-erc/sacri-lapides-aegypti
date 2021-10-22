//Gatsby
import React from "react";
import { withPrefix } from "gatsby";

//Component
import Layout from "../templates/IndexLayout";
import HeaderImage from "../components/HeaderImage";

//Images
import HomeSliderImage1 from "../../static/images/other/home-slider-1.jpg";

//markup
const News = () => {
  return (
    <Layout>
      <HeaderImage title="News" src={withPrefix(`${HomeSliderImage1}`)} />
    </Layout>
  );
};

export default News;
