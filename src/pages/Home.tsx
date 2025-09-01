import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Welcome to 
              <span className="hero-highlight"> Milestones Behavior Analysis</span>
            </h1>
            <p className="hero-description">
              We're dedicated to supporting children, families, and communities through evidence-based Applied Behavior Analysis (ABA) therapy. Our team of compassionate professionals is here to guide your child's growth, celebrate progress, and create meaningful change. Whether you're seeking early intervention, school readiness support, or parent training, we're here to walk alongside you on this journey.
            </p>
            <div className="hero-buttons">
              <Link to="/services" className="btn btn-primary">
                Our Services
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Get Started Today
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-graphic">
              <div className="graphic-circle circle-1"></div>
              <div className="graphic-circle circle-2"></div>
              <div className="graphic-circle circle-3"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose Milestones Behavior Analysis?</h2>
            <p className="section-description">
              Our comprehensive approach combines evidence-based practices with 
              personalized care to deliver exceptional results for children and families.
            </p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3 className="feature-title">Individualized Programs</h3>
              <p className="feature-description">
                Each program is tailored to meet the unique needs and goals of every child, 
                ensuring maximum effectiveness and progress through personalized ABA therapy.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">👨‍⚕️</div>
              <h3 className="feature-title">Expert Team</h3>
              <p className="feature-description">
                Our team consists of Board Certified Behavior Analysts (BCBAs), Board Certified Assistant Behavior Analysts (BCaBAs), and Registered Behavior Technicians (RBTs).
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3 className="feature-title">Evidence-Based Practice</h3>
              <p className="feature-description">
                We use proven ABA methodologies and continuous data collection to track progress 
                and make informed decisions about treatment plans.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">👨‍👩‍👧‍👦</div>
              <h3 className="feature-title">Family-Centered Care</h3>
              <p className="feature-description">
                We involve families in the therapeutic process, providing training 
                and support to ensure consistency across all environments.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🏠</div>
              <h3 className="feature-title">Multiple Settings</h3>
              <p className="feature-description">
                Services available in home, clinic, school, and community settings 
                to promote skill generalization and real-world application.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">📈</div>
              <h3 className="feature-title">Measurable Goals</h3>
              <p className="feature-description">
                Every treatment plan includes specific, measurable goals supervised by a BCBA 
                and adjusted regularly to reflect progress and new objectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="services-preview">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Core ABA Services</h2>
            <p className="section-description">
              Comprehensive services designed to meet the individual needs of every child and family we serve
            </p>
          </div>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-number">01</div>
              <h3 className="service-title">Early Intervention ABA</h3>
              <p className="service-description">
                Helping young children build essential communication, social, and play skills 
                during critical developmental periods.
              </p>
              <Link to="/services" className="service-link">Learn More →</Link>
            </div>
            
            <div className="service-card">
              <div className="service-number">02</div>
              <h3 className="service-title">School Readiness Programs</h3>
              <p className="service-description">
                Preparing children to succeed in classroom settings with confidence 
                and essential academic and social skills.
              </p>
              <Link to="/services" className="service-link">Learn More →</Link>
            </div>
            
            <div className="service-card">
              <div className="service-number">03</div>
              <h3 className="service-title">Behavior Support Plans</h3>
              <p className="service-description">
                Reducing challenging behaviors and promoting positive alternatives 
                through evidence-based intervention strategies.
              </p>
              <Link to="/services" className="service-link">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Get Started?</h2>
            <p className="cta-description">
              Take the first step towards positive change. Contact us today to learn 
              how our ABA services can make a difference in your child's life.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Contact Us
              </Link>
              <Link to="/about" className="btn btn-outline">
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

