import React from "react";
import "./Experience.css";
import { ExpDetails } from "./EduDetails";

function Education() {
  return (
    <div className="education">
      {ExpDetails.map((exp) => {
        return (
          <div>

          </div>
        );
      })}
    </div>
  );
}

export default Education;
