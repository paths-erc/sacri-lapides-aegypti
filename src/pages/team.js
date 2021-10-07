import React from "react";
import Layout from "../components/Layout";
import Picture from "../components/Picture";
import People from "../components/People";
import HomeSliderImage1 from "../images/1-home/home-slider-1.jpg";

const Team = () => {
  return (
    <Layout>
      <Picture title="team" src={HomeSliderImage1} />
      <People />
    </Layout>
  );
};

export default Team;
