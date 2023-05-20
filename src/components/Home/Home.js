import React, {useEffect} from "react";
import "./Home.css";
import { MouseSimple } from "@phosphor-icons/react";
import Education from "./Education/Education";
import Skills from "./Skills/Skills";
import Experience from "./Experience/Experience";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="homepage">
      <div className="home">
        <div className="hero-text" data-aos="fade">
          I <span className="magic-text">code</span> and
          <span className="magic-text"> design</span> cool stuff for the
          <span className="magic-text"> web</span>.
        </div>
        <div className="hero-sub-text" data-aos="fade">
          <p>
            Hi, I'm <span className="name">Soham Dutta</span>, a
            <span className="role">
              {" "}
              Frontend Developer and UI/UX designer{" "}
            </span>
            based in <span className="location">Kolkata, IN</span>.
          </p>
        </div>
        <div className="scroll-text" data-aos="fade">
          <MouseSimple size={24} />
          <p>Scroll down to know more about me.</p>
        </div>
      </div>
      <div className="about-me" data-aos="fade">
        <h1 id="heading">The Prologue 🙋‍♂️</h1>
        <p>
          I'm Soham, a frontend web developer and self-taught user interface &
          experience (UI/UX) designer. <br />
          <br />
          With a strong passion for creating visually appealing and
          user-friendly digital experiences, I specialize in HTML, CSS,
          JavaScript, and frontend frameworks like ReactJS. <br />
          <br />
          I am also interested towards AI, Machine learning and Deep Learning.
          <br />
          <br />I thrive on finding innovative solutions and bringing ideas to
          life. <br />
          <br />
          Let's collaborate and create exceptional and beautiful websites that
          leave a lasting impression :)
        </p>
      </div>
      <div className="skills-block" data-aos="fade">
        <h1 id="heading">Superpowers 💻</h1>
        <Skills />
      </div>
      <div className="experience-block" data-aos="fade">
        <h1 id="heading">
          Adventures ⚒️<span>looking for more :)</span>
        </h1>
        <Experience />
      </div>
      <div className="education-block" data-aos="fade">
        <h1 id="heading">Enlightenment 🎓</h1>
        <Education />
      </div>
    </div>
  );
}

export default Home;
