import React from "react";
import Layout from "../templates/IndexLayout";
import Picture from "../components/Picture";

import HomeSliderImage1 from "../../static/images/other/home-slider-1.jpg";

const News = () => {
  return (
    <Layout>
      <Picture title="News" src={HomeSliderImage1} />
    </Layout>
  );
};

export default News;
