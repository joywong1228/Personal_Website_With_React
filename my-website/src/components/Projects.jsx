import React from "react";
import project1 from "../assets/project-1.png";
import project2 from "../assets/project-2.png";
import project3 from "../assets/project-3.png";
import arrow from "../assets/arrow.png";

function Projects() {
  return (
    <section id="projects">
      {/* Warning message */}
      <div
        style={{
          backgroundColor: "#ffe4e6",
          color: "#b91c1c",
          padding: "1rem 1.5rem",
          borderRadius: "1rem",
          marginBottom: "2rem",
          textAlign: "center",
          fontWeight: "700",
          fontSize: "1.1rem",
          border: "1.5px solid #f87171",
        }}
      >
        This page is currently unavailable. All project details are on the{" "}
        <a
          href="/blog"
          style={{ textDecoration: "underline", color: "#b91c1c" }}
        >
          blog page
        </a>
        . This page will be deleted soon.
      </div>

      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container color-container">
            <div className="article-container">
              <img src={project1} alt="Project 1" className="project-img" />
            </div>
            <h2 className="experience-sub-title project-title">
              Flappy Bird - Anime Version
            </h2>
            <p>Technologies: Python - pygame</p>
            <p>Duration: 2 weeks</p>
            <div className="btn-container">
              <a
                className="btn btn-color-2 project-btn"
                href="https://github.com/joywong1228/flappybird.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                className="btn btn-color-2 project-btn"
                href="blog.html#flappybird"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </a>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img src={project2} alt="Project 2" className="project-img" />
            </div>
            <h2 className="experience-sub-title project-title">
              Personal Website (Current Page)
            </h2>
            <p>Technologies: HTML, CSS, JS</p>
            <p>Duration: On going</p>
            <div className="btn-container">
              <a
                className="btn btn-color-2 project-btn"
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                className="btn btn-color-2 project-btn"
                href="blog.html#personalweb"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </a>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img src={project3} alt="Project 3" className="project-img" />
            </div>
            <h2 className="experience-sub-title project-title">
              Simply Personal Website
            </h2>
            <p>Technologies: HTML without using CSS and JS</p>
            <p>Duration: 1 day</p>
            <div className="btn-container">
              <a
                className="btn btn-color-2 project-btn"
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                className="btn btn-color-2 project-btn"
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </a>
            </div>
          </div>
        </div>
      </div>
      <img
        src={arrow}
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => (window.location.href = "#contact")}
        style={{ cursor: "pointer" }}
      />
    </section>
  );
}

export default Projects;
