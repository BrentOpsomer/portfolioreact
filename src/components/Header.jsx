import { useState } from "react";
import { Link } from "react-router-dom";
import "../style/header.css";
import githublogo from "../assets/logos/github-mark-white.png";
import linkedinlogo from "../assets/logos/LI-In-Bug.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="logo">
        <h1 className="neon-text">opdev</h1>
      </div>

      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <nav>
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={closeMenu}>
              Projecten
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <div className="social-icons">
        <a
          href="https://github.com/BrentOpsomer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githublogo} alt="GitHub" className="social-icon-gthb" />
        </a>
        <a
          href="https://www.linkedin.com/in/brentopsomer/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={linkedinlogo}
            alt="LinkedIn"
            className="social-icon-lnkdn"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
