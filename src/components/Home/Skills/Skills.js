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
    "TypeScript",
    "SQL",
    "Bash",
    "Markdown",
  ];

  const frameworksAndTools = [
    "React JS",
    "React Router",
    "MongoDB",
    "Tailwind CSS",
    "FireBase",
    "Node.js",
    "MySQL",
    "APIs",
    "Express",
    "Git",
    "Jupyter Notebook",
    "Visual Studio Code",
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
      <div className="skill" data-aos="fade">
        <h2 className="skill-header">Languages</h2>
        <div className="skill-list">
          {languages.map((language, i) => (
            <span key={i} className="skill-tag">{language}</span>
          ))}
        </div>
      </div>

      <div className="skill" data-aos="fade">
        <h2 className="skill-header">Frameworks And Tools</h2>
        <div className="skill-list">
          {frameworksAndTools.map((fat, i) => (
            <span key={i} className="skill-tag">{fat}</span>
          ))}
        </div>
      </div>

      <div className="skill" data-aos="fade">
        <h2 className="skill-header">Others</h2>
        <div className="skill-list">
          {others.map((other, i) => (
            <span key={i} className="skill-tag">{other}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
