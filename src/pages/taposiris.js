import React from "react";
import Layout from "../components/Layout";
import Picture from "../components/Picture";
import Map from "../components/Map";
import Info from "../components/Sites/Info";
import Tab from "../components/Sites/Tab";
import "../styles/site.css";
import HomeSliderImage1 from "../images/1-home/home-slider-1.jpg";

const Site = () => {
  return (
    <Layout>
      <Picture title="site" src={HomeSliderImage1} />
      <section className="section map">
        <Info />
        <Map lng="31.199617" lat="29.918918" zoom="13" popupHtml="Alexandria" />
      </section>
      <Tab />
    </Layout>
  );
};
export default Site;
