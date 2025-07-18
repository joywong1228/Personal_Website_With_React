// src/components/reusable/BackToTopButton.jsx

import React, { useState, useEffect } from "react";

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        backgroundColor: "var(--color-accent)",
        color: "var(--color-bg-alt)",
        border: "none",
        borderRadius: "50%",
        width: "48px",
        height: "48px",
        cursor: "pointer",
        boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
        fontSize: "24px",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      aria-label="Back to top"
      title="Back to top"
    >
      ↑
    </button>
  );
}
