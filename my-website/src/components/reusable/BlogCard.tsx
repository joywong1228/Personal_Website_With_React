import React from "react";
import { useNavigate } from "react-router-dom";

const tagColor = (tag) => {
  switch (tag.toLowerCase()) {
    case "react":
      return "#61dafb";
    case "css":
      return "#2965F1";
    case "vercel":
      return "#e9f0f7ff";
    case "ui/ux":
      return "#ffb347";
    case "svg":
      return "#ff6347";
    // ... add more cases as needed
    default:
      return "#000000ff"; // fallback color
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
  liveDemoNote, // added prop
}) {
  const navigate = useNavigate();

  return (
    <div className="blog-card-flex border-shadow">
      {/* Image side */}
      <div className="blog-card-img-wrap">
        <img
          src={previewImg}
          alt="Preview"
          className="blog-card-img"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.onerror = null; // prevent loop
            e.currentTarget.src = "/fallback.jpg"; // adjust fallback path as needed
          }}
        />
      </div>

      {/* Content */}
      <div className="blog-card-content">
        {/* Show liveDemoNote box if exists */}
        {liveDemoNote && (
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
            <p>{liveDemoNote}</p>
          </div>
        )}

        {/* Title with optional warning sign */}
        <div className="blog-card-title">{title}</div>

        {/* Skills */}
        <div className="blog-card-skills-row ">
          {skills.map((tag) => (
            <span
              key={tag}
              className="blog-card-skill"
              style={{ background: tagColor(tag) + "22", color: tagColor(tag) }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Other info rows */}
        <div className="blog-card-row">
          <b>Intro:</b> <span>{intro}</span>
        </div>
        <div className="blog-card-row">
          <b>Goal:</b> <span>{goal}</span>
        </div>
        <div className="blog-card-row">
          <b>Motivation:</b> <span>{motivation}</span>
        </div>
        <div className="blog-card-row">
          <b>Challenge:</b> <span>{challenge}</span>
        </div>

        {/* Button */}
        <button
          className="btn btn-color-1 blog-card-btn"
          onClick={() => navigate(`/blog/${id}`)}
        >
          More details…
        </button>
      </div>
    </div>
  );
}
