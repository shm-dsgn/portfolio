import React from "react";
import "./DesignDisplay.css";
import { DribbbleLogo } from "@phosphor-icons/react";

const Display = ({ title, content, dribbbleLink, photo, tags }) => {
  return (
    <div className="display-box" data-aos="fade">
      <div className="display-image">
        <img src={photo} className="img" alt="designImage" />
      </div>
      <div className="tags">
        {tags.map((tag) => (
          <span className="tag">{tag}</span>
        ))}
      </div>
      <div className="display-details">
        <div className="display-title">{title}</div>
        <div className="display-content">{content}</div>
        <a href={dribbbleLink} target="_blank" rel="noreferrer">
          <button className="display-shots">View in Dribbble <DribbbleLogo size={16} weight="fill" color="#ea4c89"/></button>
        </a>
      </div>
    </div>
  );
};

export default Display;
