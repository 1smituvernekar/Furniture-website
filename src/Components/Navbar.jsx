
import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { IoSearch } from "react-icons/io5";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaCartPlus } from "react-icons/fa6";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      {/* Logo */}
      <Link to="/" className="navbar-logo" onClick={closeMenu}>
        <img src={assets.logo} alt="Furniture store logo" />

        <div className="logo-text">
          <span className="logo-name">FORMA</span>
          <span className="logo-subtitle">LIVING SPACES</span>
        </div>
      </Link>

      {/* Navigation */}
      <nav className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={closeMenu}>
          <span className="nav-number"></span>
          Home
        </Link>

        <Link to="/about" onClick={closeMenu}>
          <span className="nav-number"></span>
          About
        </Link>

        <Link to="/contact" onClick={closeMenu}>
          <span className="nav-number"></span>
          Contact
        </Link>

        <div className="mobile-nav-note">
          <span></span>
          DESIGN YOUR EVERYDAY
        </div>
      </nav>

      {/* Right side icons */}
      <div className="navbar-actions">
        <button
          className="nav-icon"
          type="button"
          aria-label="Search"
          onClick={() => {
            window.location.href = "/?search=true";
          }}
        >
          <IoSearch />
        </button>

        <Link to="/login" className="nav-icon" aria-label="Profile">
          <CgProfile />
        </Link>

        <Link to="/orders" className="nav-icon cart-icon" aria-label="Cart">
          <FaCartPlus />
          <span className="cart-dot"></span>
        </Link>
      </div>

      {/* Mobile menu toggle */}
      <button
        className="navbar-menu"
        type="button"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <IoMdClose /> : <IoIosMenu />}
      </button>
    </header>
  );
};

export default Navbar;
