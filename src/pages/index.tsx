import React from "react";
import AboutMe from "../components/AboutMe/AboutMe";
import Layout from "../components/Layout";
import { Pages } from "../data/pages";

const IndexPage = () => {
  return (
    <Layout currentPage={Pages.Hello}>
      <AboutMe />
    </Layout>
  );
};

export default IndexPage;
