import React from "react";
import "./Display.css";

const Display = ({ title, content, githubLink, liveLink, photo }) => {
  return (
    <div className="display-box">
      <div className="display-image">
        <img src={photo} className="img" />
      </div>
      <div className="display-details">
        <div className="display-title">{title}</div>
        <div className="display-content">{content}</div>
        <div className="display-links">
          <a href={githubLink} target="_blank" rel="noreferrer">
            <button className="display-github">GitHub</button>
          </a>
          <a href={liveLink} target="_blank" rel="noreferrer">
            <button className="display-live">View Live</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Display;