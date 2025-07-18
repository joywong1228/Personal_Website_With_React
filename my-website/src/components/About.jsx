import React from "react";
import { FaUserGraduate, FaBookOpen, FaArrowDown } from "react-icons/fa";
import aboutPic from "../assets/about-pic.png";

function About() {
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="about-flex">
        <div className="about-img-container">
          <img src={aboutPic} alt="About Joy" className="about-pic" />
        </div>
        <div className="about-content">
          <div className="about-cards">
            <div className="about-card border-shadow">
              <FaUserGraduate className="about-card-icon" />
              <div>
                <h3>Experience</h3>
                <p>
                  Current
                  <br />
                  <span className="about-accent">
                    Software Development Student
                  </span>
                </p>
              </div>
            </div>
            <div className="about-card border-shadow">
              <FaBookOpen className="about-card-icon" />
              <div>
                <h3>Education</h3>
                <p>
                  Language Bachelor’s Degree
                  <br />
                  <span className="about-accent">Computer Science Diploma</span>
                </p>
              </div>
            </div>
          </div>
          <div className="about-description">
            <p>
              Hi, This is Joy! A passionate developer with a unique foundation
              in Chinese language studies and a drive for building modern tech
              solutions.
              <br />
              <br />I specialize in <span className="about-accent">Python</span>
              , <span className="about-accent">HTML5</span>,{" "}
              <span className="about-accent">CSS</span>,{" "}
              <span className="about-accent">Rect</span>,{" "}
              <span className="about-accent">MySQL</span>, and{" "}
              <span className="about-accent">JavaScript</span>, blending
              creativity with problem-solving.
              <br />
              <br />I love turning ideas into real-world projects and am always
              eager to learn, collaborate, and innovate in the fast-evolving
              world of software.
            </p>
          </div>
        </div>
      </div>
      {/* <FaArrowDown
        className="icon arrow about-arrow"
        title="Scroll to Experience"
        onClick={() => window.location.href = "#experience"}
      /> */}
    </section>
  );
}
export default About;
