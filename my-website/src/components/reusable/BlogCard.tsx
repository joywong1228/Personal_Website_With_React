import React from "react";
import { useNavigate } from "react-router-dom";

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
      return "#737475ff";
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
    <div className="blog-card-flex border-shadow">
      {/* Image side */}
      <div className="blog-card-img-wrap">
        <img
          src={previewImg}
          alt="Preview"
          className="blog-card-img"
          loading="lazy"
          onError={(e) => (e.target.style.display = "none")}
        />
      </div>
      {/* Content */}
      <div className="blog-card-content">
        <div className="blog-card-title">{title}</div>
        <div className="blog-card-skills-row">
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
