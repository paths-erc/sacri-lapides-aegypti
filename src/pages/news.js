//Gatsby
import React from "react";
import { Helmet } from "react-helmet";

//Component
import Layout from "../templates/IndexLayout";
import HeaderImage from "../components/HeaderImage";

//markup
const News = () => {
  return (
    <Layout>
      <Helmet>
        <title>News</title>
        <meta
          name="keywords"
          content="egypt, egyptology, archaeology, late antique egypt, egyptian topography"
        ></meta>
        <meta name="robots" description="index" />
      </Helmet>
      <HeaderImage title="News" />
    </Layout>
  );
};

export default News;
