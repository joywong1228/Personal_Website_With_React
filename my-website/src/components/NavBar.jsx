import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

function NavBar() {
  return (
    <nav className="desktop-nav">
      <div className="logo">
        <Link to="/" style={{ color: "var(--color-accent)", textDecoration: "none" }}>Joy Wong</Link>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <ul className="nav-links">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/experience">Experience</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <ThemeToggle />
      </div>
    </nav>
  );
}
export default NavBar;