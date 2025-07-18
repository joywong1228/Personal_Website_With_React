import React, { useEffect, useState } from "react";
import BlogCard from "./reusable/BlogCard";
import blogData from "../data/blogData.json";

export default function Blog() {
  const [blogs, setBlogs] = useState(blogData);
  const [sortOption, setSortOption] = useState("endDate");

  useEffect(() => {
    fetch("/blogData.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const sortBlogs = (blogs, option) => {
    const sorted = [...blogs];
    switch (option) {
      case "startDate":
        sorted.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
        break;
      case "endDate":
        sorted.sort((a, b) => {
          if (!a.endDate && b.endDate) return -1;
          if (a.endDate && !b.endDate) return 1;
          if (!a.endDate && !b.endDate) return 0;
          return new Date(a.endDate) - new Date(b.endDate);
        });
        break;
      case "alphabetical":
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        break;
    }
    return sorted;
  };

  const sortedBlogs = sortBlogs(blogs, sortOption);

  return (
    <section
      style={{
        maxWidth: 900,
        margin: "3rem auto",
        padding: "1.5rem",
        backgroundColor: "var(--color-bg-alt)",
        borderRadius: "1.5rem",
        boxShadow: "0 6px 32px rgba(25, 103, 210, 0.11)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "2rem",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <h1
          className="title"
          style={{
            color: "var(--color-title)",
            fontWeight: "900",
            fontSize: "2rem",
            margin: 0,
          }}
        >
          📚 My Project Blogs
        </h1>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.8rem",
            flexWrap: "wrap",
          }}
        >
          <label
            htmlFor="sort-select"
            style={{
              fontWeight: "600",
              fontSize: "1.05rem",
              color: "var(--color-text)",
              userSelect: "none",
            }}
          >
            Sort by:
          </label>

          <select
            id="sort-select"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            style={{
              padding: "0.45rem 1rem",
              borderRadius: "9999px",
              border: "1.5px solid var(--color-accent)",
              backgroundColor: "var(--color-bg-for-the-light-button)",
              color: "var(--color-title)",
              fontWeight: "600",
              fontSize: "1rem",
              cursor: "pointer",
              outline: "none",
              boxShadow: "0 2px 6px var(--color-shadow)",
              transition: "border-color 0.3s ease",
            }}
            onFocus={(e) =>
              (e.target.style.borderColor = "var(--color-btn-hover)")
            }
            onBlur={(e) => (e.target.style.borderColor = "var(--color-accent)")}
          >
            <option value="startDate">Start Date</option>
            <option value="endDate">End Date</option>
            <option value="alphabetical">Title</option>
          </select>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "2.2rem" }}>
        {sortedBlogs.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </div>
    </section>
  );
}
