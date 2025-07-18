// src/components/UpcomingFeatureSection.jsx

import React from "react";

const upcomingFeatures = [
  {
    id: "multi-language-support",
    title: "Multi-language Support",
    intro: "Add multi-language support for global visitors.",
    skills: ["React", "i18n", "UI/UX"],
  },
  {
    id: "animations",
    title: "Animations & Transitions",
    intro: "Improve animations and section transitions for smooth UX.",
    skills: ["CSS", "React Spring", "UI/UX"],
  },
  {
    id: "interactive-demos",
    title: "Interactive Project Demos",
    intro: "Integrate interactive live demos of projects.",
    skills: ["React", "JavaScript", "UI/UX"],
  },
  // Add more upcoming features here as needed
];

export default function UpcomingFeatureSection() {
  return (
    <section
      className="profile-section border-shadow"
      style={{
        marginTop: "3rem",
        position: "relative",
      }}
    >
      <h2 style={{ color: "var(--color-title)", marginBottom: "1rem" }}>
        Upcoming Features
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {upcomingFeatures.map(({ id, title, intro, skills }) => (
          <div
            className="border-shadow"
            key={id}
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0.75rem 1rem",
              background: "var(--color-bg-alt)",
              borderRadius: "3rem",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              cursor: "default",
              gap: "1rem", // add gap for wrapping spacing
            }}
          >
            <div style={{ flex: "1 1 300px", minWidth: 0 }}>
              <strong
                style={{
                  fontSize: "1.1rem",
                  color: "var(--color-title)",
                  display: "block",
                  marginBottom: "0.25rem",
                }}
              >
                {title}
              </strong>
              <div
                style={{
                  fontSize: "0.9rem",
                  color: "var(--color-text)",
                  marginTop: "0.25rem",
                  whiteSpace: "normal", // allow wrapping
                  overflowWrap: "break-word",
                }}
                title={intro}
              >
                {intro}
              </div>
            </div>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {skills.map((skill) => (
                <span
                  className="btn-color-2"
                  key={skill}
                  style={{
                    padding: "0.15rem 0.7rem",
                    borderRadius: "9999px",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    userSelect: "none",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
