//Gatsby
import React from "react";
import { withPrefix } from "gatsby";

//Component
import Layout from "../templates/IndexLayout";
import HeaderImage from "../components/HeaderImage";

//markup
const News = () => {
  return (
    <Layout>
      <HeaderImage title="News" />
    </Layout>
  );
};

export default News;
