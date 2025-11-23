// components/Navbar.jsx
import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

// Custom SVG logo component
function Logo() {
  return (
    <div className="logo">
      <svg width="45" height="45" viewBox="0 0 100 100" aria-label="Abdurehman Mohammed Logo">
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#667eea" />
            <stop offset="100%" stopColor="#764ba2" />
          </linearGradient>
        </defs>
        <polygon 
          points="50,5 90,25 90,75 50,95 10,75 10,25" 
          fill="url(#logoGradient)" 
          stroke="#fff" 
          strokeWidth="2"
        />
        <text 
          x="50" 
          y="62" 
          textAnchor="middle" 
          fontSize="28" 
          fill="white" 
          fontWeight="700"
          fontFamily="Arial, sans-serif"
        >
          AM
        </text>
      </svg>
      <span className="brand">Abdurehman</span>
    </div>
  )
}

// Active link styling function
const activeClass = ({ isActive }) => isActive ? 'navlink active' : 'navlink'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  // Check if user is logged in on component mount
  useEffect(() => {
    const userData = localStorage.getItem('user')
    if (userData) {
      setUser(JSON.parse(userData))
    }
  }, [])

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Close menu when link is clicked (mobile)
  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  // Handle sign out
  const handleSignout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setUser(null)
    closeMenu()
    navigate('/')
    alert('Signed out successfully!')
  }

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <NavLink to="/" className="logo-link" onClick={closeMenu}>
          <Logo />
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="navlinks desktop-nav">
          <NavLink to="/" className={activeClass} end>
            Home
          </NavLink>
          <NavLink to="/about" className={activeClass}>
            About
          </NavLink>
          <NavLink to="/projects" className={activeClass}>
            Projects
          </NavLink>
          <NavLink to="/education" className={activeClass}>
            Education
          </NavLink>
          <NavLink to="/services" className={activeClass}>
            Services
          </NavLink>
          <NavLink to="/contact" className={activeClass}>
            Contact
          </NavLink>

          {/* Authentication Links - Desktop */}
          {user ? (
            <div className="auth-section">
              <span className="user-welcome">Welcome, {user.name}</span>
              {user.role === 'Admin' && (
                <NavLink to="/admin" className={activeClass}>
                  Admin
                </NavLink>
              )}
              <button onClick={handleSignout} className="navlink signout-btn">
                Sign Out
              </button>
            </div>
          ) : (
            <div className="auth-section">
              <NavLink to="/login" className={activeClass}>
                Login
              </NavLink>
              <NavLink to="/signup" className={activeClass}>
                Sign Up
              </NavLink>
            </div>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={`mobile-menu-btn ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Mobile Navigation */}
        <nav className={`navlinks mobile-nav ${isMenuOpen ? 'open' : ''}`}>
          <NavLink to="/" className={activeClass} end onClick={closeMenu}>
            <span className="nav-icon">🏠</span>
            Home
          </NavLink>
          <NavLink to="/about" className={activeClass} onClick={closeMenu}>
            <span className="nav-icon">👤</span>
            About
          </NavLink>
          <NavLink to="/projects" className={activeClass} onClick={closeMenu}>
            <span className="nav-icon">💼</span>
            Projects
          </NavLink>
          <NavLink to="/education" className={activeClass} onClick={closeMenu}>
            <span className="nav-icon">🎓</span>
            Education
          </NavLink>
          <NavLink to="/services" className={activeClass} onClick={closeMenu}>
            <span className="nav-icon">⚙️</span>
            Services
          </NavLink>
          <NavLink to="/contact" className={activeClass} onClick={closeMenu}>
            <span className="nav-icon">📧</span>
            Contact
          </NavLink>

          {/* Authentication Links - Mobile */}
          {user ? (
            <>
              <div className="mobile-user-info">
                <span className="nav-icon">👋</span>
                Welcome, {user.name}
              </div>
              {user.role === 'Admin' && (
                <NavLink to="/admin" className={activeClass} onClick={closeMenu}>
                  <span className="nav-icon">⚙️</span>
                  Admin
                </NavLink>
              )}
              <button onClick={handleSignout} className="navlink signout-btn">
                <span className="nav-icon">🚪</span>
                Sign Out
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login" className={activeClass} onClick={closeMenu}>
                <span className="nav-icon">🔐</span>
                Login
              </NavLink>
              <NavLink to="/signup" className={activeClass} onClick={closeMenu}>
                <span className="nav-icon">📝</span>
                Sign Up
              </NavLink>
            </>
          )}
        </nav>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="mobile-overlay" onClick={closeMenu}></div>
        )}
      </div>
    </header>
  )
}