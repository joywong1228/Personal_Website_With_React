import React from "react";
import { Link } from "react-router-dom";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "../ThemeToggle";
import CurrentProjectSection from "./CurrentProjectSection";

function NavBar() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  // Lock scroll when mobile menu open (optional but recommended)
  React.useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <>
      <nav className="desktop-nav">
        <div className="logo">
          <Link
            to="/"
            style={{ color: "var(--color-accent)", textDecoration: "none" }}
          >
            Joy Wong
          </Link>
        </div>
        <div className="nav-desktop-right">
          <ul className="nav-links">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/experience">Experience</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <span className="desktop-only">
            <ThemeToggle />
          </span>
        </div>
        <button
          className="hamburger-btn"
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
        >
          <FaBars />
        </button>
      </nav>

      {/* Overlay Menu */}
      {menuOpen && (
        <div className="mobile-menu-overlay" onClick={() => setMenuOpen(false)}>
          <nav className="mobile-menu" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-btn"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <FaTimes />
            </button>
            <ul>
              <li>
                <Link to="/about" onClick={() => setMenuOpen(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/experience" onClick={() => setMenuOpen(false)}>
                  Experience
                </Link>
              </li>
              <li>
                <Link to="/projects" onClick={() => setMenuOpen(false)}>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/blog" onClick={() => setMenuOpen(false)}>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={() => setMenuOpen(false)}>
                  Contact
                </Link>
              </li>
              <li>
                {/* Theme Toggle in menu */}
                <ThemeToggle />
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}

export default NavBar;
