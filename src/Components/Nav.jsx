import React, { useState, useEffect } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // new

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsDropdownOpen(false);
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsDropdownOpen((prev) => !prev);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="strike-container">
        <h1 className="strike-text">
          <Link to="#" className="text-decoration-none text-white">
            <span className="red">L</span>east&nbsp;
            <span className="red">A</span>ction
          </Link>
        </h1>
      </div>

      {/* Hamburger Icon for Mobile */}
      {isMobile && (
        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      )}

      {/* Menu Links */}
      <ul
        className={`menu-links ${
          isMobile ? (isMenuOpen ? "show" : "hide") : ""
        }`}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>

        <li
          className={`dropdown ${isMobile && isDropdownOpen ? "open" : ""}`}
          onClick={(e) => {
            if (isMobile) toggleDropdown(e);
          }}
        >
          <div className="Servicetext">
            Services <FaChevronDown className="dropdown-icon" />
          </div>
          <ul className="dropdown-menu">
            <li>
              <Link to="/services">Web Development</Link>
            </li>
            <li>
              <Link to="/services">Mobile Application</Link>
            </li>
            <li>
              <Link to="/services">UI/UX Designing</Link>
            </li>
            <li>
              <Link to="/services">Cloud Services</Link>
            </li>
            <li>
              <Link to="/services">IT Support & Maintenance</Link>
            </li>
            <li>
              <Link to="/services">AI & ML</Link>
            </li>
            <li>
              <Link to="/services">Blockchain</Link>
            </li>
            
            <li>
              <Link to="/services">Deep Learning</Link>
            </li>
          </ul>
        </li>

        <li>
          <Link to="/team">Team Profile</Link>
        </li>
        <li>
          <Link to="/techstack">Tech Stack</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>
          <Link to="/investors">Investor Relations</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
