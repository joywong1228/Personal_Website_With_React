// src/components/Profile.jsx

import React from "react";
import {
  FaPython,
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaLinkedin,
  FaGithub
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import profilePic from "../assets/profile-pic.png";

function Profile() {
  const navigate = useNavigate();

  // Tech stack with filter names
  const techs = [
    { icon: <FaPython className="icon" />, name: "Python", filter: "python" },
    { icon: <FaReact className="icon" />, name: "React", filter: "react" },
    { icon: <FaJs className="icon" />, name: "JavaScript", filter: "javascript" },
    { icon: <FaHtml5 className="icon" />, name: "HTML5", filter: "html" },
    { icon: <FaCss3Alt className="icon" />, name: "CSS3", filter: "css" },
  ];

  return (
    <section id="profile" className="profile-section">
      <div className="section__pic-container">
        <img src={profilePic} alt="Joy Wong profile" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Joy Wong</h1>
        <p className="section__text__p2">
          Software Development Student <span className="dot">•</span> Tech Enthusiast
        </p>
        {/* Tech Stack Icons */}
        <div className="tech-stack-icons" style={{ margin: "1.1rem 0" }}>
          {techs.map((tech) => (
            <button
              key={tech.name}
              className="tech-icon-btn"
              title={`See ${tech.name} projects`}
              onClick={() => navigate(`/projects?tech=${tech.filter}`)}
              style={{
                background: "none",
                border: "none",
                padding: 0,
                margin: "0 0.2rem",
                cursor: "pointer",
              }}
            >
              {tech.icon}
            </button>
          ))}
        </div>
        {/* Quick Stats */}
        <div className="quick-stats">
          <span>
            <span role="img" aria-label="Calendar">🗓</span> 2+ years coding
          </span>
          <span
            className="stats-link"
            onClick={() => navigate("/projects")}
            style={{ cursor: "pointer" }}
            title="See my projects"
          >
            <span role="img" aria-label="Books">📚</span> 8+ projects
          </span>
          {/* <span
            className="stats-link"
            onClick={() => navigate("/projects?lang=all")}
            style={{ cursor: "pointer" }}
            title="See multilingual projects"
          >
            <span role="img" aria-label="Globe">🌏</span> 4 languages
          </span> */}
        </div>
        {/* Buttons */}
        <div className="btn-container" style={{ marginTop: "1.2rem" }}>
          <a
            className="btn btn-color-2"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
          <a className="btn btn-color-1" href="/contact">
            Contact Info
          </a>
        </div>
        {/* Socials */}
        <div id="socials-container" style={{ marginTop: "1.2rem" }}>
          <a
            href="https://linkedin.com/in/kwanting1228/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="icon" />
          </a>
          <a
            href="https://github.com/joywong1228/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="icon" />
          </a>
        </div>
        <div className="currently-learning">
          <span>Currently learning: TypeScript & AI tools</span>
        </div>
      </div>
    </section>
  );
}

export default Profile;