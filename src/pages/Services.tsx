import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Services.css';

const Services: React.FC = () => {
  return (
    <div className="services">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <div className="services-hero-content">
            <h1 className="services-title">Our ABA Services</h1>
            <p className="services-subtitle">
              At Milestones Behavior Analysis, our services are designed to meet the individual needs of every child and family we serve. We focus on measurable goals, evidence-based practices, and compassionate care.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="core-services">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Core ABA Services</h2>
            <p className="section-description">
              Our evidence-based services are designed to promote skill development and positive behavior change
            </p>
          </div>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-header">
                <div className="service-icon">🧸</div>
                <h3 className="service-title">Early Intervention ABA</h3>
              </div>
              <div className="service-content">
                <p className="service-description">
                  Helping young children build essential communication, social, and play skills during critical developmental periods.
                </p>
                <ul className="service-features">
                  <li>Communication Development</li>
                  <li>Social Interaction Skills</li>
                  <li>Play and Leisure Skills</li>
                  <li>Self-Care and Independence</li>
                  <li>Family Training and Support</li>
                </ul>
                <div className="service-pricing">
                  <span className="price">Individualized Programs</span>
                </div>
              </div>
            </div>

            <div className="service-card featured">
              <div className="featured-badge">Most Popular</div>
              <div className="service-header">
                <div className="service-icon">🎒</div>
                <h3 className="service-title">School Readiness Programs</h3>
              </div>
              <div className="service-content">
                <p className="service-description">
                  Preparing children to succeed in classroom settings with confidence and essential academic and social skills.
                </p>
                <ul className="service-features">
                  <li>Academic Skills Support</li>
                  <li>Classroom Behavior Management</li>
                  <li>Friendship and Social Skills</li>
                  <li>Executive Functioning</li>
                  <li>Teacher Collaboration</li>
                </ul>
                <div className="service-pricing">
                  <span className="price">Comprehensive Programs</span>
                </div>
              </div>
            </div>

            <div className="service-card">
              <div className="service-header">
                <div className="service-icon">🎯</div>
                <h3 className="service-title">Behavior Support Plans</h3>
              </div>
              <div className="service-content">
                <p className="service-description">
                  Reducing challenging behaviors and promoting positive alternatives through evidence-based intervention strategies.
                </p>
                <ul className="service-features">
                  <li>Functional Behavior Assessment</li>
                  <li>Behavior Intervention Plans</li>
                  <li>Positive Behavior Support</li>
                  <li>Progress Monitoring</li>
                </ul>
                <div className="service-pricing">
                  <span className="price">Individualized Plans</span>
                </div>
              </div>
            </div>

            <div className="service-card">
              <div className="service-header">
                <div className="service-icon">👥</div>
                <h3 className="service-title">Social Skills Groups</h3>
              </div>
              <div className="service-content">
                <p className="service-description">
                  Encouraging peer interaction, friendship building, and teamwork in structured group settings.
                </p>
                <ul className="service-features">
                  <li>Peer Interaction Training</li>
                  <li>Group Activities and Games</li>
                  <li>Communication Practice</li>
                  <li>Friendship Development</li>
                </ul>
                <div className="service-pricing">
                  <span className="price">Group Sessions</span>
                </div>
              </div>
            </div>

            <div className="service-card">
              <div className="service-header">
                <div className="service-icon">👨‍👩‍👧‍👦</div>
                <h3 className="service-title">Parent & Caregiver Training</h3>
              </div>
              <div className="service-content">
                <p className="service-description">
                  Equipping families with strategies to continue progress at home and promote skill generalization.
                </p>
                <ul className="service-features">
                  <li>Parent Training Sessions</li>
                  <li>Home Program Development</li>
                  <li>Behavior Management Strategies</li>
                  <li>Ongoing Support</li>
                </ul>
                <div className="service-pricing">
                  <span className="price">Family Programs</span>
                </div>
              </div>
            </div>

            <div className="service-card">
              <div className="service-header">
                <div className="service-icon">🏫</div>
                <h3 className="service-title">School Consultation</h3>
              </div>
              <div className="service-content">
                <p className="service-description">
                  Collaborative consultation services with schools to support students in educational settings.
                </p>
                <ul className="service-features">
                  <li>Classroom Observations</li>
                  <li>IEP/504 Plan Support</li>
                  <li>Teacher Training</li>
                  <li>Behavior Support Plans</li>
                </ul>
                <div className="service-pricing">
                  <span className="price">Consultation Services</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Programs Section */}
      <section className="specialized-programs">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Treatment Approach</h2>
            <p className="section-description">
              Every treatment plan is supervised by a BCBA and adjusted regularly to reflect progress and new goals
            </p>
          </div>
          
          <div className="programs-grid">
            <div className="program-card">
              <div className="program-image">
                <div className="program-icon">📊</div>
              </div>
              <div className="program-content">
                <h3 className="program-title">Individualized Assessment</h3>
                <p className="program-description">
                  Comprehensive evaluations to understand each child's unique needs, strengths, and areas for growth.
                </p>
                <ul className="program-highlights">
                  <li>Functional Behavior Assessment</li>
                  <li>Skill Development Evaluation</li>
                  <li>Family Interview and History</li>
                  <li>Environmental Observations</li>
                </ul>
              </div>
            </div>
            
            <div className="program-card">
              <div className="program-image">
                <div className="program-icon">🎯</div>
              </div>
              <div className="program-content">
                <h3 className="program-title">Goal Setting & Planning</h3>
                <p className="program-description">
                  Development of specific, measurable goals that align with family priorities and developmental milestones.
                </p>
                <ul className="program-highlights">
                  <li>Measurable Objectives</li>
                  <li>Family-Centered Goals</li>
                  <li>Progress Tracking Systems</li>
                  <li>Regular Plan Reviews</li>
                </ul>
              </div>
            </div>
            
            <div className="program-card">
              <div className="program-image">
                <div className="program-icon">📈</div>
              </div>
              <div className="program-content">
                <h3 className="program-title">Ongoing Progress Monitoring</h3>
                <p className="program-description">
                  Continuous data collection and analysis to ensure treatment effectiveness and adjust strategies as needed.
                </p>
                <ul className="program-highlights">
                  <li>Data Collection</li>
                  <li>Progress Reports</li>
                  <li>Plan Modifications</li>
                  <li>Family Updates</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Get Started?</h2>
            <p className="cta-description">
              Contact us today to discuss which services would be the best fit for your child's needs
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Contact Us
              </Link>
              <Link to="/faq" className="btn btn-outline">
                View FAQ
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

