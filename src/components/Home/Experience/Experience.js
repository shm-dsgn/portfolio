import React from "react";
import "./Experience.css";
import { ExpDetails } from "./ExpDetails";

function Experience() {
  return (
    <div className="experience">
      {ExpDetails.map((exp, i) => {
        return (
          <div key={i} className="exp-details" data-aos="fade">
              <div className="exp-title">{exp.title}</div>
              <div className="exp-name">{exp.name}</div>
              <div className="exp-location">{exp.location}</div>
              <div className="exp-degree">{exp.exptype}</div>
              <div className="exp-time">{exp.duration}</div>
              <div className="exp-score">{exp.description}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Experience;
