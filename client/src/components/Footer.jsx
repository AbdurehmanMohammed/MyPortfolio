// components/Footer.jsx
import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Abdurehman Mohammed</h4>
            <p>Web Developer & Student</p>
            <p>Creating innovative web solutions</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>📧 m.abdul2224@gmail.com</p>
            <p>📱 647-772-7448</p>
            <p>🌍 Toronto, ON</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Abdurehman Mohammed. All rights reserved.</p>
          <p>Built with React.js</p>
        </div>
      </div>
    </footer>
  )
}
