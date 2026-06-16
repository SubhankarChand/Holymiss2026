import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinkStyle = { 
    color: 'white', 
    textDecoration: 'none', 
    padding: '15px 20px', 
    display: 'block', 
    fontWeight: 'bold', 
    textTransform: 'uppercase', 
    letterSpacing: '1px', 
    fontSize: '14px'
  };

  return (
    <nav className="green-navbar">
      {/* Mobile Hamburger Toggle Button */}
      <button 
        className="menu-toggle-btn" 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle Navigation Menu"
      >
        <i className={`fa ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i> MENU
      </button>

      <ul className={`nav-links-list ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <li>
          <a href="/#who-we-are" style={navLinkStyle} onClick={() => setIsMobileMenuOpen(false)}>
            Who We Are
          </a>
        </li>
        
        <li 
          className="dropdown"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <button 
            className="dropdown-trigger-btn"
            onClick={() => setDropdownOpen(!dropdownOpen)} 
            style={navLinkStyle}
          >
            How We Are <i className="fa fa-caret-down" style={{ marginLeft: '5px' }}></i>
          </button>
          
          <ul className={`dropdown-menu ${dropdownOpen ? 'show-menu' : ''}`}>
            <li>
              <Link to="/mission" onClick={() => { setDropdownOpen(false); setIsMobileMenuOpen(false); }}>
                Our Mission
              </Link>
            </li>
            <li>
              <Link to="/vision" onClick={() => { setDropdownOpen(false); setIsMobileMenuOpen(false); }}>
                Our Vision
              </Link>
            </li>
          </ul>
        </li>
        
        <li><a href="/#where-we-are" style={navLinkStyle} onClick={() => setIsMobileMenuOpen(false)}>Where We Are</a></li>
        <li><a href="/#gallery" style={navLinkStyle} onClick={() => setIsMobileMenuOpen(false)}>Gallery</a></li>
        <li><a href="/#achievements" style={navLinkStyle} onClick={() => setIsMobileMenuOpen(false)}>Our Achievement</a></li>
        <li><Link to="/testimonial" style={navLinkStyle} onClick={() => setIsMobileMenuOpen(false)}>Testimonial</Link></li>
        <li><a href="/#reaches-us" style={navLinkStyle} onClick={() => setIsMobileMenuOpen(false)}>Reaches Us</a></li>
      </ul>
    </nav>
  );
}