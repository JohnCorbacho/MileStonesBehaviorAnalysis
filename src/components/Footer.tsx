import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Milestones Behavior Analysis</h3>
            <p className="footer-description">
              Dedicated to supporting children, families, and communities through evidence-based Applied Behavior Analysis (ABA) therapy.
            </p>

          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/services" className="footer-link">Services</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
              <li><Link to="/faq" className="footer-link">FAQ</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Services</h4>
            <ul className="footer-links">
              <li><Link to="/services" className="footer-link">Early Intervention ABA</Link></li>
              <li><Link to="/services" className="footer-link">School Readiness Programs</Link></li>
              <li><Link to="/services" className="footer-link">Behavior Support Plans</Link></li>
              <li><Link to="/services" className="footer-link">Social Skills Groups</Link></li>
              <li><Link to="/services" className="footer-link">Parent Training</Link></li>
              <li>
                <a 
                  href="https://www.indeed.com/job/board-certified-behavior-analyst-f8fa9a5957c85784" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-link footer-job-link"
                >
                  Join Our Team
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Contact Info</h4>
            <div className="footer-contact">
              <p className="contact-item">
                <span className="contact-icon">📍</span>
                12350 SW 132nd CT STE #201, Miami, FL 33186
              </p>
              <p className="contact-item">
                <span className="contact-icon">📞</span>
                (786) 732-0247
              </p>
              <p className="contact-item">
                <span className="contact-icon">📧</span>
                info@milestones-aba.org
              </p>
              <p className="contact-item">
                <span className="contact-icon">🕒</span>
                Mon-Fri: 9:00 AM - 5:00 PM
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {currentYear} Milestones Behavior Analysis. All rights reserved.</p>
          </div>
          <div className="footer-legal">
            <a href="/privacy-policy" className="legal-link">Privacy Policy</a>
            <a href="/terms-of-service" className="legal-link">Terms of Service</a>
            <a href="/accessibility" className="legal-link">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

