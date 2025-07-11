import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaPython } from "react-icons/fa";
import checkmark from "../assets/checkmark.png";
import flutter from "../assets/flutter.png";
import arrow from "../assets/arrow.png";

function Experience() {
  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Frontend Development</h2>
            <div className="article-container">
              <article>
                <FaHtml5 size={36} color="#E44D26" className="icon" />
                <div>
                  <h3>HTML</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <FaCss3Alt size={36} color="#2965F1" className="icon" />
                <div>
                  <h3>CSS</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <FaJs size={36} color="#F0DB4F" className="icon" />
                <div>
                  <h3>JavaScript</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img src={flutter} alt="Flutter" className="icon" style={{width: 36}} />
                <div>
                  <h3>Flutter</h3>
                  <p>Basic</p>
                </div>
              </article>
            </div>
          </div>
          <div className="details-container">
            <h2 className="experience-sub-title">Backend Development</h2>
            <div className="article-container">
              <article>
                <FaPython size={36} color="#3572A5" className="icon" />
                <div>
                  <h3>Python</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src={checkmark} alt="C#" className="icon" style={{width: 36}} />
                <div>
                  <h3>C#</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img src={checkmark} alt="Git" className="icon" style={{width: 36}} />
                <div>
                  <h3>Git</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src={checkmark} alt="Other" className="icon" style={{width: 36}} />
                <div>
                  <h3>--</h3>
                  <p>Experienced</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <img src={arrow} alt="Arrow icon" className="icon arrow" onClick={() => window.location.href = "#projects"} />
    </section>
  );
}
export default Experience;