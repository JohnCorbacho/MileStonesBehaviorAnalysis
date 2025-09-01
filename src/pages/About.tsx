import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1 className="about-title">About Milestones Behavior Analysis</h1>
            <p className="about-subtitle">
              Dedicated to helping children reach their fullest potential through high-quality ABA services
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2 className="section-title">Who We Are</h2>
              <p className="mission-description">
                Milestones Behavior Analysis was founded with one clear purpose: to help children reach their fullest potential through high-quality ABA services. Our team comprises Board Certified Behavior Analysts (BCBAs), Board Certified Assistant Behavior Analysts (BCaBAs), Registered Behavior Technicians (RBTs), and dedicated administrative staff, all working together to ensure that every child's therapy plan is as unique as they are.
              </p>
              <h2 className="section-title">Our Mission</h2>
              <p className="mission-description">
                Our mission is to empower children with developmental needs to build skills for a brighter future. We believe in collaboration, compassion, and consistency. By working closely with families, schools, and communities, we create environments where children can thrive both in therapy and in everyday life.
              </p>
            </div>
            <div className="mission-visual">
              <div className="mission-card">
                <div className="mission-icon">🎯</div>
                <h3>Our Vision</h3>
                <p>A world where every child has the support they need to reach their milestones and contribute meaningfully to their community.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-description">
              These principles guide everything we do and shape our approach to care
            </p>
          </div>
          
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">❤️</div>
              <h3 className="value-title">Compassion</h3>
              <p className="value-description">
                We approach every interaction with empathy, understanding, and genuine care 
                for the children and families we serve.
              </p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">🔬</div>
              <h3 className="value-title">Evidence-Based Practice</h3>
              <p className="value-description">
                Our interventions are grounded in scientific research and proven ABA methodologies 
                that have demonstrated effectiveness.
              </p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3 className="value-title">Collaboration</h3>
              <p className="value-description">
                We work closely with families, schools, and communities to ensure 
                consistent and comprehensive support for every child.
              </p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">🌟</div>
              <h3 className="value-title">Excellence</h3>
              <p className="value-description">
                We strive for the highest standards in service delivery, continuous improvement, 
                and professional development.
              </p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">🎨</div>
              <h3 className="value-title">Individualization</h3>
              <p className="value-description">
                Every program is uniquely designed to meet the specific needs, preferences, 
                and goals of each child.
              </p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">🛡️</div>
              <h3 className="value-title">Integrity</h3>
              <p className="value-description">
                We maintain the highest ethical standards and are transparent in all our 
                communications and practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Professional Team</h2>
            <p className="section-description">
              Our experienced professionals are dedicated to providing exceptional ABA services
            </p>
          </div>
          
          <div className="team-grid">
            <div className="team-card">
              <div className="team-avatar">
                <div className="avatar-placeholder">BC</div>
              </div>
              <div className="team-info">
                <h3 className="team-name">Board Certified Behavior Analysts (BCBAs)</h3>
                <p className="team-role">Clinical Supervisors</p>
                <p className="team-description">
                  Our BCBAs design and supervise individualized treatment plans, conduct assessments, 
                  and ensure the highest quality of ABA services across all programs.
                </p>
                <div className="team-credentials">
                  <span className="credential">Master's or Doctoral Degree</span>
                  <span className="credential">BCBA Certified</span>
                </div>
              </div>
            </div>
            
            <div className="team-card">
              <div className="team-avatar">
                <div className="avatar-placeholder">BC</div>
              </div>
              <div className="team-info">
                <h3 className="team-name">Board Certified Assistant Behavior Analysts (BCaBAs)</h3>
                <p className="team-role">Program Coordinators</p>
                <p className="team-description">
                  Our BCaBAs assist in program development and implementation, working under 
                  BCBA supervision to coordinate services and support families.
                </p>
                <div className="team-credentials">
                  <span className="credential">Bachelor's Degree</span>
                  <span className="credential">BCaBA Certified</span>
                </div>
              </div>
            </div>
            
            <div className="team-card">
              <div className="team-avatar">
                <div className="avatar-placeholder">RT</div>
              </div>
              <div className="team-info">
                <h3 className="team-name">Registered Behavior Technicians (RBTs)</h3>
                <p className="team-role">Direct Service Providers</p>
                <p className="team-description">
                  Our RBTs implement ABA interventions directly with children, collecting data 
                  and providing hands-on therapy under BCBA supervision.
                </p>
                <div className="team-credentials">
                  <span className="credential">High School Diploma</span>
                  <span className="credential">RBT Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="approach-section">
        <div className="container">
          <div className="approach-content">
            <div className="approach-text">
              <h2 className="section-title">Our Approach</h2>
              <p className="approach-description">
                We believe in a holistic approach to ABA services that considers the whole child 
                and their environment. Our programs are designed to be:
              </p>
              
              <div className="approach-points">
                <div className="approach-point">
                  <div className="point-icon">✓</div>
                  <div className="point-content">
                    <h4>Child-Centered</h4>
                    <p>Focused on individual strengths, interests, and developmental goals</p>
                  </div>
                </div>
                
                <div className="approach-point">
                  <div className="point-icon">✓</div>
                  <div className="point-content">
                    <h4>Family-Involved</h4>
                    <p>Including families as partners in the therapeutic process</p>
                  </div>
                </div>
                
                <div className="approach-point">
                  <div className="point-icon">✓</div>
                  <div className="point-content">
                    <h4>Naturalistic</h4>
                    <p>Teaching skills in real-world environments and situations</p>
                  </div>
                </div>
                
                <div className="approach-point">
                  <div className="point-icon">✓</div>
                  <div className="point-content">
                    <h4>Data-Driven</h4>
                    <p>Using continuous assessment to guide treatment decisions</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="approach-visual">
              <div className="approach-diagram">
                <div className="diagram-center">
                  <div className="center-circle">Child</div>
                </div>
                <div className="diagram-elements">
                  <div className="element">Family</div>
                  <div className="element">School</div>
                  <div className="element">Community</div>
                  <div className="element">Therapy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Learn More?</h2>
            <p className="cta-description">
              Contact us today to discuss how our ABA services can support your child's development
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Contact Us
              </Link>
              <Link to="/services" className="btn btn-outline">
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

