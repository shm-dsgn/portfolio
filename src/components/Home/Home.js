import React from "react";
import "./Home.css";
import { MouseSimple } from "@phosphor-icons/react";

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
          <span className="role"> Frontend Developer and User Experience designer </span>
          based in <span className="location">Kolkata, IN</span>.
        </p>
      </div>
      <div className="scroll-text">
        <MouseSimple size={24} />
        <p>Scroll to know more about me.</p>
      </div>
    </div>
    <div className="home-details">
      Home Details
    </div>
    </div>
  );
}

export default Home;
