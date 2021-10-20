import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Scroll from "../components/Scroll";

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
