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
        <React.Fragment>
          <Helmet>
            <title>Sacri lapides Aegypti | Info</title>
            <meta
              name="description"
              content="The “Sacri lapides Aegypti” project aims to study and document the processes of transformation of sacred spaces for worship, identity and memory from Pharaonic and Ptolemaic-Roman Egypt to Christian Egypt through topographical-functional analysis and the creation of a general catalogue, in digital form, of the temple structures transformed into Christian places used for the production and preservation of books, as well as their cultic function."
            />
          </Helmet>
        </React.Fragment>
      </Helmet>
      <HeaderImage title="Info" />
    </Layout>
  );
};

export default Info;
