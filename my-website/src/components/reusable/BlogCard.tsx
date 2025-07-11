import React from "react";
import { useNavigate } from "react-router-dom"; // Import hook

const tagColor = (tag) => {
  switch (tag.toLowerCase()) {
    case "react":
    case "react native":
      return "#61DBFB";
    case "expo":
      return "#48cfae";
    case "css":
      return "#2965F1";
    case "vercel":
      return "#b7b7b7ff";
    case "ui/ux":
      return "#ffb347";
    case "svg":
      return "#ae67fa";
    case "astronomy":
      return "#0cfcc0";
    default:
      return "#1967d2";
  }
};

export default function BlogCard({
  id,
  title,
  skills = [],
  intro,
  goal,
  motivation,
  challenge,
  previewImg,
}) {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        background: "var(--color-bg-alt)",
        borderRadius: "1.3rem",
        boxShadow: "0 3px 24px rgba(25,103,210,0.10)",
        padding: "2rem 2.2rem",
        alignItems: "center",
        gap: "2.2rem",
        minHeight: 140,
        position: "relative",
      }}
    >
      {/* Thumbnail */}
      <div
        style={{
          width: 128,
          height: 250,
          minWidth: 128,
          borderRadius: 16,
          background: "#23253633",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {previewImg ? (
          <img
            src={previewImg}
            alt="Preview"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <span style={{ fontSize: 38, color: "#aaa" }}>❓</span>
        )}
      </div>
      {/* Main content */}
      <div style={{ flex: 1 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <span
            style={{
              fontWeight: 800,
              color: "var(--color-accent)",
              fontSize: "1.43rem",
              marginBottom: 2,
              lineHeight: 1.19,
            }}
          >
            {title}
          </span>
          <div
            style={{
              display: "flex",
              gap: 8,
              flexWrap: "wrap",
              margin: "0.1rem 0 0.5rem 0",
            }}
          >
            {skills.map((tag) => (
              <span
                key={tag}
                style={{
                  padding: "2px 15px",
                  borderRadius: "100px",
                  background: tagColor(tag) + "22",
                  color: tagColor(tag),
                  fontWeight: 700,
                  fontSize: "1rem",
                  letterSpacing: "0.3px",
                  boxShadow: "0 0 0.5px " + tagColor(tag) + "10",
                  border: "1.2px solid " + tagColor(tag) + "22",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        {/* Section rows, compact */}
        <div
          style={{
            fontSize: "1.06rem",
            marginTop: 8,
            color: "var(--color-text)",
            marginBottom: 32, // space for button
          }}
        >
          <div style={{ marginBottom: "0.6rem" }}>
            <b style={{ color: "var(--color-accent)" }}>Intro:</b> {intro}
          </div>
          <div style={{ marginBottom: "0.6rem" }}>
            <b style={{ color: "var(--color-accent)" }}>Goal:</b> {goal}
          </div>
          <div style={{ marginBottom: "0.6rem" }}>
            <b style={{ color: "var(--color-accent)" }}>Motivation:</b>{" "}
            {motivation}
          </div>
          <div>
            <b style={{ color: "var(--color-accent)" }}>Challenge:</b>{" "}
            {challenge}
          </div>
        </div>
        {/* More details button */}
        <button
          style={{
            position: "absolute",
            right: 38,
            bottom: 24,
            padding: "7px 23px",
            borderRadius: "25px",
            background: "var(--color-accent)",
            color: "#181a21",
            fontWeight: 700,
            fontSize: "1rem",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 1px 6px #0cfcc032",
            letterSpacing: 0.2,
          }}
          onClick={() => navigate(`/blog/${id}`)}
        >
          More details…
        </button>
      </div>
    </div>
  );
}
