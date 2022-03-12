//Gatsby
import React from "react";

//Components
import Footer from "../components/Footer";
import Header from "../components/Header";
import Scroll from "../components/Scroll";

import "./Layout.scss";

//markup
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <Scroll showBelow={250} />
    </>
  );
};

export default Layout;
