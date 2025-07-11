import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import profilePic from "../assets/profile-pic.png";

function Profile() {
  return (
    <section id="profile" className="profile-section">
      <div className="section__pic-container">
        <img src={profilePic} alt="Kwan Ting, Wong profile" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Kwan Ting, Wong</h1>
        <p className="section__text__p2">Software Development Student</p>
        <div className="btn-container">
          <a
            className="btn btn-color-2"
            href="/assets/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
          <a className="btn btn-color-1" href="/contact">
            Contact Info
          </a>
        </div>
        <div id="socials-container">
          <a href="https://linkedin.com/in/kwanting1228/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" />
          </a>
          <a href="https://github.com/joywong1228/" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" />
          </a>
        </div>
      </div>
    </section>
  );
}
export default Profile;