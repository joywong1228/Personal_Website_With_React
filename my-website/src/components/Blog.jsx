import React, { useEffect, useState } from "react";
import BlogCard from "./reusable/BlogCard";
import blogData from "../data/blogData.json";

export default function Blog() {
const [blogs, setBlogs] = useState(blogData); // or just use blogData directly

  useEffect(() => {
    // If fetching from static JSON
    fetch("/blogData.json")
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, []);

  return (
    <section style={{ maxWidth: 900, margin: "3rem auto", padding: "1.5rem" }}>
      <h1 className="title" style={{ marginBottom: "2rem" }}>📚 My Project Blogs</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "2.2rem" }}>
        {blogs.map(blog => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </div>
    </section>
  );
}