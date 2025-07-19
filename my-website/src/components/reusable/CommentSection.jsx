import React, { useEffect, useState } from "react";
import {
  getComments,
  addComment,
  listenComments,
} from "../../_services/comment-service.js";
import { Timestamp } from "firebase/firestore";

export default function CommentSection() {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    const unsubscribe = listenComments(setComments);
    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    await addComment({
      name: name.trim() || null, // save null if empty
      email: email.trim(),
      text: text.trim(),
      createdAt: Timestamp.now(),
    });

    setName("");
    setEmail("");
    setText("");
  };

  // Format Firestore timestamp to readable string
  const formatDate = (timestamp) => {
    if (!timestamp) return "";
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <section id="comments" style={{ maxWidth: 600, margin: "auto" }}>
      <h2>Comments</h2>
      <p>Please leave your email if you want to be contacted.</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name (optional)</label>
        <input
          id="name"
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email">Email (optional)</label>
        <input
          id="email"
          type="email"
          placeholder="Please leave your email if you want to be contacted"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="comment">Your comment</label>
        <textarea
          id="comment"
          placeholder="Please let me hear from you!"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />

        <button type="submit">Submit Comment</button>
      </form>
      <div
        className="comments-list"
        style={{ display: "flex", flexDirection: "column", gap: 16 }}
      >
        {comments.map(({ id, name, text, createdAt }, index) => (
          <div
            key={id}
            style={{
              border: "1px solid #ddd",
              borderRadius: 8,
              padding: 16,
              backgroundColor: "#fafafa",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <strong>
                #{index + 1} {name || "Anonymous"}
              </strong>
              <small
                style={{
                  color: "#666",
                  whiteSpace: "nowrap",
                  marginLeft: "1rem",
                }}
              >
                {formatDate(createdAt)}
              </small>
            </div>
            <p style={{ margin: "8px 0" }}>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
