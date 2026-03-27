import React, { useState } from 'react';
import { BsChatDots } from 'react-icons/bs';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <div className="navbar-logo">
            <div className="logo-text">amanjag.dev</div>
            <div className="logo-subtitle">portfolio</div>
          </div>
        </div>

        <button className="navbar-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navbar-right ${isMenuOpen ? 'active' : ''}`}>
          <ul className="navbar-links">
            <li>
              <a href="#skills" onClick={() => scrollToSection('skills')}>Skills</a>
            </li>
            <li>
              <a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a>
            </li>
            <li>
              <a href="#education" onClick={() => scrollToSection('education')}>Education</a>
            </li>
            <li>
              <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
            </li>
          </ul>

          <button className="navbar-contact-btn">
            <BsChatDots size={18} />
            <span>Contact</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;