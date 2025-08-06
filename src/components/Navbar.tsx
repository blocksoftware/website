import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path: string) => {
    return location.pathname === path
  }

  const handleNavClick = () => {
    setIsMenuOpen(false)
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <div className="navbar-brand">
            <Link to="/" className="brand-link" onClick={handleNavClick}>
              <img src="/logo.svg" alt="Block Software" className="brand-logo" />
              <span className="brand-text">Block Software</span>
            </Link>
          </div>
          
          <div className="navbar-menu">
            <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
              <Link 
                to="/" 
                className={`nav-link ${isActive('/') ? 'active' : ''}`}
                onClick={handleNavClick}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className={`nav-link ${isActive('/services') ? 'active' : ''}`}
                onClick={handleNavClick}
              >
                Services
              </Link>
              <Link 
                to="/about" 
                className={`nav-link ${isActive('/about') ? 'active' : ''}`}
                onClick={handleNavClick}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
                onClick={handleNavClick}
              >
                Contact
              </Link>
            </div>
            
            <Link to="/contact" className="btn btn-primary btn-sm navbar-cta" onClick={handleNavClick}>
              Get Started
            </Link>
            
            <button 
              className="mobile-menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}