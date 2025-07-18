import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaJava,
  FaGitAlt,
  FaNodeJs,
  FaDatabase,
  FaCode,
} from "react-icons/fa";
import { SiFlutter, SiMongodb, SiMysql, SiFirebase } from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";
import { IoLogoVercel } from "react-icons/io5";

const frontendSkills = [
  { name: "HTML5", icon: <FaHtml5 />, color: "#E44D26", level: "Experienced" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "#2965F1", level: "Experienced" },
  {
    name: "JavaScript",
    icon: <FaJs />,
    color: "#F0DB4F",
    level: "Experienced",
  },
  {
    name: "TypeScript",
    icon: <TbBrandTypescript />,
    color: "#2f74c0",
    level: "Intermediate",
  },
  { name: "React", icon: <FaReact />, color: "#61DBFB", level: "Intermediate" },
  { name: "Flutter", icon: <SiFlutter />, color: "#49C5F6", level: "Basic" },
  { name: "Java", icon: <FaJava />, color: "#ea2d2e", level: "Basic" },
];

const backendSkills = [
  {
    name: "Python",
    icon: <FaPython />,
    color: "#3572A5",
    level: "Intermediate",
  },
  { name: "Node.js", icon: <FaNodeJs />, color: "#3C873A", level: "Basic" },
  { name: "C#", icon: <FaCode />, color: "#512bd4", level: "Basic" },
  { name: "MySQL", icon: <SiMysql />, color: "#005e86", level: "Intermediate" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#4DB33D", level: "Basic" },
  { name: "Firebase", icon: <SiFirebase />, color: "#ffcc30", level: "Basic" },
  { name: "Git", icon: <FaGitAlt />, color: "#f14e32", level: "Intermediate" },
  { name: "Vercel", icon: <IoLogoVercel />, color: "#000", level: "Basic" },
  {
    name: "SQL",
    icon: <FaDatabase />,
    color: "#4479A1",
    level: "Intermediate",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="exp-section">
      <h1 className="exp-title">Experience</h1>
      <div className="exp-cards-row">
        <SkillBox
          className="border-shadow"
          title="Frontend Development"
          skills={frontendSkills}
        />
        <SkillBox title="Backend & DevOps" skills={backendSkills} />
      </div>
    </section>
  );
}

function SkillBox({ title, skills }) {
  return (
    <div className="exp-skill-box border-shadow">
      <h2 className="exp-box-title">{title}</h2>
      <div className="exp-skill-cards ">
        {skills.map((skill) => (
          <div className="exp-skill-card " key={skill.name}>
            <span className="exp-skill-bigicon" style={{ color: skill.color }}>
              {skill.icon}
            </span>
            <div className="exp-skill-label">{skill.name}</div>
            <div className="exp-skill-level">{skill.level}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
