import React from "react";
import aboutPic from "../assets/about-pic.png";
import experienceIcon from "../assets/experience.png";
import educationIcon from "../assets/education.png";
import arrow from "../assets/arrow.png";

function About() {
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img src={aboutPic} alt="About" className="about-pic" />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img src={experienceIcon} alt="Experience icon" className="icon" />
              <h3>Experience</h3>
              <p>Current <br />Software Development Student</p>
            </div>
            <div className="details-container">
              <img src={educationIcon} alt="Education icon" className="icon" />
              <h3>Education</h3>
              <p>Language Bachelors Degree<br />Computer Science Diploma</p>
            </div>
          </div>
          <div className="text-container">
            <p>
              I am a software development student with a background in Chinese language studies.
              Alongside my academic pursuits, I have developed strong skills in Python, HTML5, CSS, and JavaScript.
              My goal is to apply my programming skills to create innovative solutions and contribute to exciting projects in the tech industry.
            </p>
          </div>
        </div>
      </div>
      <img src={arrow} alt="Arrow icon" className="icon arrow" onClick={() => window.location.href = "#experience"} />
    </section>
  );
}
export default About;