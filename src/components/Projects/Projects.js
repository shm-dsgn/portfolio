import React from "react";
import "./Projects.css";
import { DevDetails } from "./Dev/DevDetails.js";
import DevDisplay from "./Dev/DevDisplay.js";
import { DesignDetails } from "./Design/DesignDetails.js";
import DesignDisplay from "./Design/DesignDisplay.js";

function Projects() {
  return (
    <div className="project-block">
      <h1 id="project-heading">Code Magic 🧑‍💻</h1>
      <h2 id="project-subheading">Here are some of my dev. work</h2>
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
      <h1 id="project-heading">Pixel Magic 🎨</h1>
      <h2 id="project-subheading">Here are some of my design work</h2>
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
