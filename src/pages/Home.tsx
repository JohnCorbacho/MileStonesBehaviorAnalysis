import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <video 
          className="hero-video" 
          autoPlay 
          muted 
          loop 
          playsInline
          preload="metadata"
          onError={(e) => {
            console.warn('Video failed to load:', e);
            // Fallback to background image if video fails
            const videoElement = e.target as HTMLVideoElement;
            videoElement.style.display = 'none';
          }}
        >
          <source src="/Header.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Welcome to 
              <span className="hero-highlight"> Milestones Behavior Analysis</span>
            </motion.h1>
            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <Link to="/services" className="btn btn-primary">
                Our Services
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Get Started Today
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Why Choose Milestones Behavior Analysis?</h2>
            <p className="section-description">
              We're dedicated to supporting children, families, and communities through evidence-based Applied Behavior Analysis (ABA) therapy. Our team of compassionate professionals is here to guide your child's growth, celebrate progress, and create meaningful change. Whether you're seeking early intervention, school readiness support, or parent training, we're here to walk alongside you on this journey.
            </p>
          </motion.div>
          
          <div className="features-grid">
            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="feature-icon">🎯</div>
              <h3 className="feature-title">Individualized Programs</h3>
              <p className="feature-description">
                Each program is tailored to meet the unique needs and goals of every child, 
                ensuring maximum effectiveness and progress through personalized ABA therapy.
              </p>
            </motion.div>
            
            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="feature-icon">👨‍⚕️</div>
              <h3 className="feature-title">Expert Team</h3>
              <p className="feature-description">
                Our team consists of Board Certified Behavior Analysts (BCBAs), Board Certified Assistant Behavior Analysts (BCaBAs), and Registered Behavior Technicians (RBTs).
              </p>
            </motion.div>
            
            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="feature-icon">📊</div>
              <h3 className="feature-title">Evidence-Based Practice</h3>
              <p className="feature-description">
                We use proven ABA methodologies and continuous data collection to track progress 
                and make informed decisions about treatment plans.
              </p>
            </motion.div>
            
            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="feature-icon">👨‍👩‍👧‍👦</div>
              <h3 className="feature-title">Family-Centered Care</h3>
              <p className="feature-description">
                We involve families in the therapeutic process, providing training 
                and support to ensure consistency across all environments.
              </p>
            </motion.div>
            
            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="feature-icon">🏠</div>
              <h3 className="feature-title">Multiple Settings</h3>
              <p className="feature-description">
                Services available in home, clinic, school, and community settings 
                to promote skill generalization and real-world application.
              </p>
            </motion.div>
            
            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="feature-icon">📈</div>
              <h3 className="feature-title">Measurable Goals</h3>
              <p className="feature-description">
                Every treatment plan includes specific, measurable goals supervised by a BCBA 
                and adjusted regularly to reflect progress and new objectives.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="services-preview">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Our Core ABA Services</h2>
            <p className="section-description">
              Comprehensive services designed to meet the individual needs of every child and family we serve
            </p>
          </motion.div>
          
          <div className="services-grid">
            <motion.div 
              className="service-card"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="service-number">01</div>
              <h3 className="service-title">Early Intervention ABA</h3>
              <p className="service-description">
                Helping young children build essential communication, social, and play skills 
                during critical developmental periods.
              </p>
              <Link to="/services" className="service-link">Learn More →</Link>
            </motion.div>
            
            <motion.div 
              className="service-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="service-number">02</div>
              <h3 className="service-title">School Readiness Programs</h3>
              <p className="service-description">
                Preparing children to succeed in classroom settings with confidence 
                and essential academic and social skills.
              </p>
              <Link to="/services" className="service-link">Learn More →</Link>
            </motion.div>
            
            <motion.div 
              className="service-card"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="service-number">03</div>
              <h3 className="service-title">Behavior Support Plans</h3>
              <p className="service-description">
                Reducing challenging behaviors and promoting positive alternatives 
                through evidence-based intervention strategies.
              </p>
              <Link to="/services" className="service-link">Learn More →</Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="cta-title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Ready to Get Started?
            </motion.h2>
            <motion.p 
              className="cta-description"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Take the first step towards positive change. Contact us today to learn 
              how our ABA services can make a difference in your child's life.
            </motion.p>
            <motion.div 
              className="cta-buttons"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Link to="/contact" className="btn btn-primary">
                Contact Us
              </Link>
              <Link to="/about" className="btn btn-outline">
                Learn About Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

