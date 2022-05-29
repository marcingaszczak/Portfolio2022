import React from "react";
import { Pages } from "../data/pages";
import Footer from "./Footer/Footer";
import Nav from "./Nav/Nav";
import "./../styles/Main.scss";

const Layout: React.FC<{ currentPage: Pages }> = ({
  children,
  currentPage,
}) => {
  return (
    <>
      <Nav currentPage={currentPage} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
