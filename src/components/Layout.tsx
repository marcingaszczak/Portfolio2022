import React from "react";
import { PageCopy, Pages } from "../data/pages";
import Footer from "./Footer/Footer";
import Nav from "./Nav/Nav";
import "./../styles/Main.scss";
import SEO from "./SEO";

const Layout: React.FC<{ currentPage: Pages }> = ({
  children,
  currentPage,
}) => {
  return (
    <>
      <SEO title={PageCopy[currentPage].title} />
      <Nav currentPage={currentPage} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
