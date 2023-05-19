import React from "react";
import "./Home.css";
import { MouseSimple } from "@phosphor-icons/react";
import Education from "./Education/Education";
import Skills from "./Skills/Skills";

function Home() {
  return (
    <div className="homepage">
      <div className="home">
        <div className="hero-text">
          I <span className="magic-text">code</span> and
          <span className="magic-text"> design</span> cool stuff for the
          <span className="magic-text"> web</span>.
        </div>
        <div className="hero-sub-text">
          <p>
            Hi, I'm <span className="name">Soham Dutta</span>, a
            <span className="role">
              {" "}
              Frontend Developer and User Experience designer{" "}
            </span>
            based in <span className="location">Kolkata, IN</span>.
          </p>
        </div>
        <div className="scroll-text">
          <MouseSimple size={24} />
          <p>Scroll down to know more about me.</p>
        </div>
      </div>
      <div className="about-me">
        <h1 id="heading">The Prologue 🙋‍♂️</h1>
        <p>
          I'm Soham, a frontend web developer and self-taught user inetrface &
          experience (UI/UX) designer. <br />
          <br />
          With a strong passion for creating visually appealing and
          user-friendly digital experiences, I specialize in HTML, CSS,
          JavaScript, and frontend frameworks like ReactJS. <br />
          <br />I thrive on finding innovative solutions and bringing ideas to
          life. <br />
          <br />
          Let's collaborate and create exceptional and beautiful websites that
          leave a lasting impression :)
        </p>
      </div>
      <div className="skills-block">
        <h1 id="heading">Superpowers 💻</h1>
        <Skills />
      </div>
      <div className="experience-block">
        <h1 id="heading">Adventures ⚒️</h1>
        <div className="experience"></div>
      </div>
      <div className="education-block">
        <h1 id="heading">Enlightenment 🎓</h1>
        <Education />
      </div>
    </div>
  );
}

export default Home;
