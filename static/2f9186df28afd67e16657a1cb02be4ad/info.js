//React
import React from "react";

//Gatsby
import { Helmet } from "react-helmet";

//Component
import Layout from "../templates/IndexLayout";
import HeaderImage from "../components/HeaderImage";

//markup
const Info = () => {
  return (
    <Layout>
      <Helmet>
        <title>Info</title>
        <meta
          name="keywords"
          content="egypt, egyptology, archaeology, late antique egypt, egyptian topography"
        ></meta>
        <meta name="robots" description="index" />
      </Helmet>
      <HeaderImage title="Info" />
    </Layout>
  );
};

export default Info;
