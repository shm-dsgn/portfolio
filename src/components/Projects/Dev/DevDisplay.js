import React from "react";
import "./DevDisplay.css";
import { GithubLogo, Globe } from "@phosphor-icons/react";

const Display = ({ title, content, githubLink, liveLink, photo, tags }) => {
  return (
    <div className="display-box">
      <div className="display-image">
        <img src={photo} className="img" alt="projectImage" />
      </div>
      <div className="tags">
        {tags.map((tag) => (
          <span className="tag">{tag}</span>
        ))}
      </div>
      <div className="display-details">
        <div className="display-title">{title}</div>
        <div className="display-content">{content}</div>
        <div className="display-links">
          <a href={githubLink} target="_blank" rel="noreferrer">
            <GithubLogo size={28} color="#ffffff" weight="fill" />
          </a>
          <a href={liveLink} target="_blank" rel="noreferrer">
            <Globe size={28} color="#E2FF00" weight="fill" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Display;
