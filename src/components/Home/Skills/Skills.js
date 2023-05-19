import React from "react";
import "./Skills.css";

function Skills() {
  const languages = [
    "C++",
    "C",
    "Python",
    "HTML",
    "CSS",
    "JavaScript",
    "ES6",
    "SQL",
    "Bash",
    "Markdown",
  ];

  const frameworksAndTools = [
    "React JS",
    "React Router",
    "Tailwind CSS",
    "FireBase",
    "MySQL",
    "Jupyter Notebook",
    "Visual Studio Code",
    "APIs",
    "Node.js",
    "Express",
    "Git",
  ];  
  
  const others = [
    "Figma",
    "Adobe Illustrator",
    "UI Prototyping",
    "Branding",
    "Product Design",
  ];

  return (
    <div className="skillset">
      <div className="skill">
        <h2 className="skill-header">Languages</h2>
        <div className="skill-list">
          {languages.map((language) => (
            <span className="skill-tag">{language}</span>
          ))}
        </div>
      </div>

      <div className="skill">
        <h2 className="skill-header">Frameworks And Tools</h2>
        <div className="skill-list">
          {frameworksAndTools.map((fat) => (
            <span className="skill-tag">{fat}</span>
          ))}
        </div>
      </div>

      <div className="skill">
        <h2 className="skill-header">Others</h2>
        <div className="skill-list">
          {others.map((other) => (
            <span className="skill-tag">{other}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
