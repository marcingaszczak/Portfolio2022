import React from "react";
import Layout from "../components/Layout";
import { Pages } from "./../data/pages";
import ProjectComponent from "../components/ProjectComponent/ProjectComponent";

const projects = () => {
  return (
    <Layout currentPage={Pages.Projects}>
      <ProjectComponent />
    </Layout>
  );
};

export default projects;
