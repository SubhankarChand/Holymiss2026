import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navStyle = { 
    color: 'white', 
    textDecoration: 'none', 
    padding: '18px 25px', 
    display: 'block', 
    fontWeight: 'bold', 
    textTransform: 'uppercase', 
    letterSpacing: '1px', 
    transition: 'all 0.3s ease',
    fontSize: '14px',
    cursor: 'pointer',
    border: 'none',
    background: 'none'
  };

  return (
    <nav style={{ backgroundColor: 'var(--emerald-green)', borderBottom: '5px solid var(--saffron)', position: 'sticky', top: 0, zIndex: 1000, display: 'flex', justifyContent: 'center', boxShadow: '0 4px 10px rgba(255, 143, 28, 0.2)' }}>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
        <li><a href="/#who-we-are" style={navStyle}>Who We Are</a></li>
        
        {/* Toggleable Dropdown Menu Layout */}
        <li 
          className="dropdown"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
          style={{ position: 'relative' }}
        >
          <button 
            onClick={() => setDropdownOpen(!dropdownOpen)} 
            style={navStyle}
            aria-haspopup="true"
            aria-expanded={dropdownOpen}
          >
            How We Are <i className="fa fa-caret-down" style={{ marginLeft: '5px' }}></i>
          </button>
          
          <ul className={`dropdown-menu ${dropdownOpen ? 'show-menu' : ''}`}>
            <li><Link to="/mission" onClick={() => setDropdownOpen(false)}>Our Mission</Link></li>
            <li><Link to="/vision" onClick={() => setDropdownOpen(false)}>Our Vision</Link></li>
          </ul>
        </li>
        
        <li><a href="/#where-we-are" style={navStyle}>Where We Are</a></li>
        <li><a href="/#gallery" style={navStyle}>Gallery</a></li>
        <li><a href="/#achievements" style={navStyle}>Our Achievement</a></li>
        <li><Link to="/testimonial" style={navStyle}>Testimonial</Link></li>
        <li><a href="/#reaches-us" style={navStyle}>Reaches Us</a></li>
      </ul>
    </nav>
  );
}