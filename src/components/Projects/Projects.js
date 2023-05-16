import React from "react";
import "./Projects.css";
import { ProjectDetails } from "./ProjectDetails.js";
import Display from "./Display.js";

function Projects() {
  return (
    <div className="project-block">
      <h1 id="heading">My Projects</h1>
      <div className="project-display-block">
        {ProjectDetails.map(
          ({ title, content, githubLink, liveLink, photo, tags }) => (
            <Display
              title={title}
              content={content}
              githubLink={githubLink}
              liveLink={liveLink}
              photo={photo}
              tags={tags}
            />
          )
        )}
      </div>
    </div>
  );
}

export default Projects;
