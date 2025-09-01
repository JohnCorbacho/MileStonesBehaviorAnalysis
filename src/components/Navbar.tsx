import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    scrollToTop();
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={scrollToTop}>
          <img src="/logo.png" alt="Milestones Behavior Analysis" className="logo-image" />
        </Link>
        
        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link 
            to="/" 
            className={`navbar-link ${isActive('/')}`}
            onClick={handleLinkClick}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`navbar-link ${isActive('/about')}`}
            onClick={handleLinkClick}
          >
            About
          </Link>
          <Link 
            to="/services" 
            className={`navbar-link ${isActive('/services')}`}
            onClick={handleLinkClick}
          >
            Services
          </Link>
          <Link 
            to="/contact" 
            className={`navbar-link ${isActive('/contact')}`}
            onClick={handleLinkClick}
          >
            Contact Us
          </Link>
          <Link 
            to="/faq" 
            className={`navbar-link ${isActive('/faq')}`}
            onClick={handleLinkClick}
          >
            FAQ
          </Link>
        </div>

        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className="navbar-toggle-bar"></span>
          <span className="navbar-toggle-bar"></span>
          <span className="navbar-toggle-bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

