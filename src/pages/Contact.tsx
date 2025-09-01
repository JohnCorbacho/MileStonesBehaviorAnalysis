import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <h1 className="contact-title">Contact Us</h1>
            <p className="contact-subtitle">
              Ready to get started? We're here to help you take the next step towards positive change.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-info-centered">
            {/* Contact Information */}
              <div className="contact-info">
                <h3 className="info-title">Get In Touch</h3>
                <p className="info-description">
                  We're here to answer your questions and help you get started on your ABA journey.
                </p>

                <div className="info-items">
                  <div className="info-item">
                    <div className="info-icon">📍</div>
                    <div className="info-content">
                      <h4>Office Location</h4>
                      <p>12350 SW 132nd CT STE #201<br />Miami, FL 33186</p>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon">📞</div>
                    <div className="info-content">
                      <h4>Phone</h4>
                      <p>(786) 732-0247</p>
                      <span className="info-note">Mon-Fri: 9:00 AM - 5:00 PM</span>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon">📧</div>
                    <div className="info-content">
                      <h4>Email</h4>
                      <p>milestonesaba2023@gmail.com</p>
                      <span className="info-note">We respond within 24 hours</span>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon">🕒</div>
                    <div className="info-content">
                      <h4>Business Hours</h4>
                      <p>Monday - Friday</p>
                      <span className="info-note">9:00 AM - 5:00 PM</span>
                    </div>
                  </div>
                </div>

                <div className="office-hours">
                  <h4 className="hours-title">Office Hours</h4>
                  <div className="hours-list">
                    <div className="hours-item">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="hours-item">
                      <span>Saturday</span>
                      <span>Closed</span>
                    </div>
                    <div className="hours-item">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>

                <div className="insurance-info">
                  <h4 className="insurance-title">Insurance Accepted</h4>
                  <p className="insurance-description">
                    We accept most major insurance plans. Contact us to verify your coverage and benefits.
                  </p>
                  <div className="insurance-logos">
                    <div className="insurance-item">Aetna</div>
                    <div className="insurance-item">Blue Cross</div>
                    <div className="insurance-item">Cigna</div>
                    <div className="insurance-item">United Healthcare</div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="quick-links">
        <div className="container">
          <div className="quick-links-content">
            <h2 className="quick-links-title">Have Questions?</h2>
            <p className="quick-links-description">
              Check out our frequently asked questions or explore our services
            </p>
            <div className="quick-links-buttons">
              <a href="/faq" className="btn btn-outline">
                View FAQ
              </a>
              <a href="/services" className="btn btn-outline">
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

