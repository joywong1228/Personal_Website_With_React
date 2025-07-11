import React from "react";
import { useParams } from "react-router-dom";
import blogData from "../../data/blogData.json"; // Adjust if path differs

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
      return "var(--color-accent)";
  }
};

function BlogDetail() {
  const { id } = useParams();
  const blog = blogData.find((item) => item.id === id);

  if (!blog) {
    return (
      <section style={{ textAlign: "center", margin: "4rem auto" }}>
        <h2 style={{ color: "var(--color-title)" }}>Blog Not Found</h2>
        <p style={{ color: "var(--color-text)" }}>
          This blog post does not exist.
        </p>
      </section>
    );
  }

  // Helper: render array or string as lines (with theme color)
  const renderSection = (data) =>
    Array.isArray(data) ? (
      <ul
        style={{
          margin: "0.4rem 0 0.7rem 1.2rem",
          color: "var(--color-text)",
          fontSize: "1.07rem",
          paddingLeft: 20,
        }}
      >
        {data.map((line, i) => (
          <li key={i} style={{ marginBottom: 8 }}>
            {line}
          </li>
        ))}
      </ul>
    ) : (
      <div
        style={{
          margin: "0.4rem 0 0.7rem 0",
          color: "var(--color-text)",
          fontSize: "1.08rem",
          lineHeight: 1.7,
        }}
      >
        {data}
      </div>
    );

  return (
    <section
      style={{
        maxWidth: 900,
        margin: "3rem auto",
        background: "var(--color-bg-alt)",
        borderRadius: "1.5rem",
        boxShadow: "0 6px 32px rgba(25,103,210,0.11)",
        padding: "2.5rem 2.2rem",
      }}
    >
      {/* Header: Image, Title, Skills, Meta */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: 32,
          marginBottom: 22,
        }}
      >
        {blog.previewImg && (
          <div
            style={{
              width: 168,
              height: 110,
              minWidth: 110,
              borderRadius: 20,
              overflow: "hidden",
              boxShadow: "0 1px 16px #09d3e033",
              background: "#2225",
              flexShrink: 0,
            }}
          >
            <img
              src={blog.previewImg}
              alt="Project preview"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        )}
        <div style={{ flex: 1, minWidth: 240 }}>
          <h1
            style={{
              fontWeight: 900,
              fontSize: "2.08rem",
              color: "var(--color-title)",
              margin: 0,
              marginBottom: 7,
              lineHeight: 1.12,
            }}
          >
            {blog.title}
          </h1>
          <div
            style={{
              display: "flex",
              gap: 8,
              flexWrap: "wrap",
              marginBottom: 9,
            }}
          >
            {blog.skills?.map((tag) => (
              <span
                key={tag}
                style={{
                  padding: "3px 16px",
                  borderRadius: "100px",
                  background: tagColor(tag),
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "1rem",
                  border: "none",
                  opacity: 0.97,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
          <span
            style={{
              color: "var(--color-text)",
              fontSize: "1rem",
              opacity: 0.7,
              letterSpacing: 0.02,
            }}
          >
            {blog.published} &nbsp;|&nbsp; {blog.techStack} &nbsp;|&nbsp;{" "}
            {blog.duration}
          </span>
        </div>
      </div>

      <hr
        style={{
          margin: "2rem 0",
          border: "none",
          borderTop: "1.3px solid var(--color-border, #e1e8f5)",
        }}
      />

      {/* Sections */}
      <SectionBlock
        label="Introduction"
        value={blog.introDetail || blog.intro}
      />
      <SectionBlock label="Goals" value={blog.goalDetail || blog.goal} />
      <SectionBlock
        label="Motivation"
        value={blog.motivationDetail || blog.motivation}
      />
      <SectionBlock label="Project Structure" value={blog.projectStructure} />
      <SectionBlock
        label="Skills Used"
        value={blog.skillsUsed || blog.skills?.join(", ")}
      />
      <SectionBlock
        label="Challenges"
        value={blog.challengeDetail || blog.challenge}
      />
      <SectionBlock
        label="Insights"
        value={blog.insightsDetail || blog.insights}
      />
      <SectionBlock label="What’s Next?" value={blog.nextDetail || blog.next} />
      <SectionBlock
        label="Final Thoughts"
        value={blog.finalThoughtsDetail || blog.finalThoughts}
      />

      {/* Links */}
      {blog.links && blog.links.length > 0 && (
        <div style={{ margin: "2.5rem 0 1.5rem 0" }}>
          <h3 style={{ color: "var(--color-accent)" }}>🔗 Links</h3>
          <ul style={{ margin: 0, paddingLeft: 18 }}>
            {blog.links.map((l, i) => (
              <li key={i} style={{ marginBottom: 4 }}>
                <a
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "var(--color-title)",
                    fontWeight: 700,
                    fontSize: "1.02rem",
                  }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

// Helper for each blog section, uses theme color for all text
function SectionBlock({ label, value }) {
  if (!value) return null;
  return (
    <div style={{ marginBottom: "1.25rem" }}>
      <h2
        style={{
          color: "var(--color-accent)",
          fontSize: "1.17rem",
          fontWeight: 700,
          margin: "0 0 0.18rem 0",
        }}
      >
        {label}
      </h2>
      {Array.isArray(value) ? (
        <ul
          style={{
            margin: "0.18rem 0 0.6rem 1.35rem",
            color: "var(--color-text)",
            fontSize: "1.08rem",
            lineHeight: 1.7,
            paddingLeft: 16,
          }}
        >
          {value.map((v, i) => (
            <li key={i} style={{ marginBottom: 4 }}>
              {v}
            </li>
          ))}
        </ul>
      ) : (
        <div
          style={{
            margin: "0.15rem 0 0.55rem 0",
            color: "var(--color-text)",
            fontSize: "1.09rem",
            lineHeight: 1.7,
          }}
        >
          {value}
        </div>
      )}
    </div>
  );
}

export default BlogDetail;
