import React from "react";
import "./Education.css";
import { EduDetails } from "./EduDetails";

function Education() {
  return (
    <div className="education">
      {EduDetails.map((edu) => {
        return (
          <div className="edu-details">
            <div className="edu-icon">{edu.icon}</div>
            <div className="edu-info">
              <div className="edu-name">{edu.name}</div>
              <div className="edu-location">{edu.location}</div>
              <div className="edu-degree">{edu.degree}</div>
              <div className="edu-time">{edu.time}</div>
              <div className="edu-score">{edu.score}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Education;
