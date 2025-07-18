// src/components/CurrentProjectSection.jsx

import React from "react";
import { useNavigate } from "react-router-dom";
import blogData from "../../data/blogData.json"; // adjust path if needed

export default function CurrentProjectSection() {
  const navigate = useNavigate();

  // Filter all current projects (endDate empty or missing)
  const currentProjects = blogData.filter(
    (p) => !p.endDate || p.endDate === ""
  );

  if (currentProjects.length === 0) {
    return null; // no current projects to show
  }

  return (
    <section
      className="profile-section border-shadow"
      style={{
        marginTop: "3rem",
        position: "relative",
        paddingBottom: "4rem", // add bottom padding to prevent overlap with button
      }}
    >
      <h2 style={{ color: "var(--color-title)", marginBottom: "1rem" }}>
        Current Projects
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {currentProjects.map(({ id, title, intro, skills, previewImg }) => (
          <div
            className="border-shadow"
            key={id}
            onClick={() => navigate(`/blog/${id}`)} // clickable row
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") navigate(`/blog/${id}`);
            }}
            style={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
              padding: "0.75rem 1rem",
              background: "var(--color-bg-alt)",
              borderRadius: "1rem",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              cursor: "pointer", // show pointer cursor for clickable
              outline: "none",
            }}
          >
            {/* Image Left */}
            {previewImg && (
              <img
                src={previewImg}
                alt={`${title} preview`}
                style={{
                  width: 110,
                  height: 70,
                  objectFit: "cover",
                  borderRadius: "0.6rem",
                  flexShrink: 0,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                }}
                loading="lazy"
              />
            )}

            {/* Text Right */}
            <div style={{ flex: 1, minWidth: 0 }}>
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
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  marginBottom: "0.25rem",
                }}
                title={intro}
              >
                {intro}
              </div>

              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                {skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      background: "var(--color-accent)",
                      color: "#fff",
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
          </div>
        ))}
      </div>

      <button
        className="btn btn-color-1"
        style={{
          position: "absolute",
          bottom: 8,
          right: 24,
          fontWeight: 700,
          letterSpacing: "0.05em",
          zIndex: 100,
        }}
        onClick={() => navigate("/projects")}
      >
        View More Projects
      </button>
    </section>
  );
}
