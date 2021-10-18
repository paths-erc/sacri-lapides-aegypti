import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Scroll from "./Scroll";

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
