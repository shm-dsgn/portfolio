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
        <div className="hero-sub-text">
          <p>
            Hi, I'm <span className="name">Soham Dutta</span>, a
            <span className="role">
              {" "}
              Frontend Developer and UI/UX designer{" "}
            </span>
            based in <span className="location">Kolkata, IN</span>.
          </p>
        </div>
        <div className="scroll-text">
          <MouseSimple size={24} />
          <p>Scroll down to know more about me.</p>
        </div>
      </div>
      <div className="about-me" data-aos="fade">
        <h1 className="heading">The Prologue 🙋‍♂️</h1>
        <p>
          I'm Soham, a frontend web developer and self-taught user interface &
          experience (UI/UX) designer. <br />
          <br />
          I specialize in HTML, CSS, JavaScript, and frontend frameworks like ReactJS. I am also interested towards AI, Machine learning and Deep Learning.<br />
          <br />I thrive on finding innovative solutions and bringing ideas to
          life.
        </p>
      </div>
      <div className="skills-block" data-aos="fade">
        <h1 className="heading">Superpowers 💻</h1>
        <Skills />
      </div>
      <div className="experience-block" data-aos="fade">
        <h1 className="heading">
          Adventures ⚒️<span>looking for more :)</span>
        </h1>
        <Experience />
      </div>
      <div className="education-block" data-aos="fade">
        <h1 className="heading">Enlightenment 🎓</h1>
        <Education />
      </div>
    </div>
  );
}

export default Home;
