import React from "react";
import "./Contact.css";
import { GithubLogo, LinkedinLogo, DribbbleLogo } from "@phosphor-icons/react";

function Contact() {
  return (
    <div className="contact-block">
      <div className="blur">
        <div className="y-blur"></div>
        <div className="w-blur"></div>
        <div className="contact-details">
          <div className="text-details">
            <h1>Want to work together ? Or have any queries</h1>
            <p>
              Feel free to reach out for collaborations or just a friendly
              hello.
            </p>
            <p className="email">
              <a
                href="mailto:sohamdutta2001@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                sohamdutta2001@gmail.com
              </a>
            </p>
          </div>
          <div className="social-details">
            <div className="contact-me-block">
              <a
                href="mailto:sohamdutta2001@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <div className="contact-me">Contact Me</div>
              </a>
            </div>

            <div className="social-icons-block">
            <a
              href="https://www.linkedin.com/in/shm-dsgn"
              target="_blank"
              rel="noreferrer"
            >
              <div className="linkedin">
                <LinkedinLogo size={32} weight="fill" />
              </div>
            </a>

            <a
              href="https://github.com/shm-dsgn"
              target="_blank"
              rel="noreferrer"
            >
              <div className="github">
                <GithubLogo size={32} weight="fill" />
              </div>
            </a>
            <a
              href="https://dribbble.com/shm_dsgn"
              target="_blank"
              rel="noreferrer"
            >
              <div className="dribbble">
                <DribbbleLogo size={32} weight="fill" />
              </div>
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
