// src/components/Contact.jsx
import React from "react";
import { FaEnvelope, FaWhatsapp, FaLinkedin, FaArrowRight } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h3 className="title">Contact Me</h3>
      <div className="contact__container container grid">
        <div className="contact__info">
          <div className="contact__card">
            <FaEnvelope className="fa-2x contact__card-icon" />
            <a
              href="mailto:joywong1228@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__butoon"
            >
              joywong1228@gmail.com
              <FaArrowRight className="contact__butoon-icon" />
            </a>
          </div>
          <div className="contact__card">
            <FaWhatsapp className="fa-2x contact__card-icon" />
            <a
              href="https://wa.me/15196143819"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__butoon"
            >
              (519) 614-3819
              <FaArrowRight className="contact__butoon-icon" />
            </a>
          </div>
          <div className="contact__card">
            <FaLinkedin className="fa-2x contact__card-icon" />
            <a
              href="https://linkedin.com/in/kwanting1228/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__butoon"
            >
              linkedin.com/in/kwanting1228/
              <FaArrowRight className="contact__butoon-icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;