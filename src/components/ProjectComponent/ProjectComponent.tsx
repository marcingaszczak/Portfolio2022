import React from "react";

import { myProjects } from "../../data/ProjectsDB";

const ProjectComponent = () => {
  return (
    <main className="My-realizations">
      <h1>My realizations</h1>
      {myProjects.map((project) => (
        <a
          className="My-realizations__tile"
          href={project.address}
          target="_blank"
          key={project.id}
        >
          <img src={project.image} className="My-realizations__tile__image" />
          <h4>{project.title}</h4>
        </a>
      ))}
    </main>
  );
};

export default ProjectComponent;
