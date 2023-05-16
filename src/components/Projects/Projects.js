import React from "react";
import "./Projects.css";
import { DevDetails } from "./Dev/DevDetails.js";
import Display from "./Dev/Display.js";

function Projects() {
  return (
    <div className="project-block">
      <h1 id="heading">My Projects</h1>
      <div className="project-display-block">
        {DevDetails.map(
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
