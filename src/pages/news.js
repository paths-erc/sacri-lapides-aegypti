import React from "react";
import Layout from "../templates/IndexLayout";
import HeaderImage from "../components/HeaderImage";

import HomeSliderImage1 from "../../static/images/other/home-slider-1.jpg";

const News = () => {
  return (
    <Layout>
      <HeaderImage title="News" src={HomeSliderImage1} />
    </Layout>
  );
};

export default News;
