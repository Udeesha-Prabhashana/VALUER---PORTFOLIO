"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import "./Header.css"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <header className="header">
      {/* Social Media Bar */}
      <div className="social-bar">
        <div className="container">
          <div className="social-links">
            <a href="/" className="social-link facebook">
              📘
            </a>
            <a href="/" className="social-link linkedin">
              💼
            </a>
            <a href="/" className="social-link phone">
              📞
            </a>
            <a href="/" className="social-link whatsapp">
              💬
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="nav-content">
            {/* Logo */}
            <Link to="/" className="logo">
              <div className="logo-icon">
                <div className="house-icon">🏠</div>
              </div>
              <span className="logo-text">INCORPORATED VALUER</span>
            </Link>

            {/* Desktop Navigation */}
            <ul className="nav-menu desktop-menu">
              <li>
                <Link to="/" className={`nav-link ${isActive("/") ? "active" : ""}`}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className={`nav-link ${isActive("/services") ? "active" : ""}`}>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/blog" className={`nav-link ${isActive("/blog") ? "active" : ""}`}>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className={`nav-link ${isActive("/contact") ? "active" : ""}`}>
                  Contact Us
                </Link>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <button className="mobile-menu-btn" onClick={toggleMenu}>
              {isMenuOpen ? "✕" : "☰"}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <ul className="nav-menu mobile-menu">
              <li>
                <Link
                  to="/"
                  className={`nav-link ${isActive("/") ? "active" : ""}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className={`nav-link ${isActive("/services") ? "active" : ""}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className={`nav-link ${isActive("/blog") ? "active" : ""}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={`nav-link ${isActive("/contact") ? "active" : ""}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Header
