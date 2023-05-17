import React from "react";
import "./Projects.css";
import { DevDetails } from "./Dev/DevDetails.js";
import DevDisplay from "./Dev/DevDisplay.js";
import { DesignDetails } from "./Design/DesignDetails.js";
import DesignDisplay from "./Design/DesignDisplay.js";

function Projects() {
  return (
    <div className="project-block">
      <h1 id="heading">My Projects</h1>
      <div className="project-display-block">
        {DevDetails.map(
          ({ title, content, githubLink, liveLink, photo, tags }) => (
            <DevDisplay
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
      <br/><br/>
      <h1 id="heading">My Designs</h1>
      <div className="design-display-block">
        {DesignDetails.map(
          ({ title, content, dribbbleLink, photo, tags }) => (
            <DesignDisplay
              title={title}
              content={content}
              dribbbleLink={dribbbleLink}
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
