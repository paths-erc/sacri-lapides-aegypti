import React from "react";
import Layout from "../components/Layout";
import Picture from "../components/Picture";
import HomeSliderImage1 from "../images/1-home/home-slider-1.jpg";

const News = () => {
  return (
    <Layout>
      <Picture title="news" src={HomeSliderImage1} />
    </Layout>
  );
};

export default News;
