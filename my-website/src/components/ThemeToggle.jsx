import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function ThemeToggle() {
  // Store theme in state so UI updates immediately
  const [theme, setTheme] = React.useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return "dark";
    }
    return "light";
  });

  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      style={{
        background: "var(--color-bg-alt)",
        border: "2px solid var(--color-accent)",
        color: "var(--color-accent)",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "1.5rem",
        fontSize: "1.2rem",
        transition: "background 0.2s, color 0.2s, border 0.2s",
        boxShadow: "0 2px 8px rgba(60,60,60,0.08)"
      }}
      aria-label="Toggle dark/light mode"
      title="Switch theme"
    >
      {theme === "dark" ? <FaSun /> : <FaMoon />}
    </button>
  );
}

export default ThemeToggle;