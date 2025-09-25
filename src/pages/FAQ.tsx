import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './FAQ.css';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const FAQ: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const faqData: FAQItem[] = [
    // General Questions
    {
      id: 1,
      question: "What is ABA therapy?",
      answer: "Applied Behavior Analysis (ABA) is an evidence-based approach to helping children learn new skills and reduce challenging behaviors. It is recognized as one of the most effective treatments for children with autism.",
      category: "general"
    },
    {
      id: 2,
      question: "How many hours of therapy will my child need?",
      answer: "Therapy hours vary depending on your child's individual assessment and goals. Each treatment plan is personalized and supervised by a BCBA, with regular adjustments based on progress.",
      category: "general"
    },
    {
      id: 3,
      question: "Will I be involved in my child's therapy?",
      answer: "Absolutely! Parent and caregiver involvement is a key part of progress. We provide training and updates so that you feel confident supporting your child at home.",
      category: "general"
    },
    
    // Services & Treatment
    {
      id: 4,
      question: "What happens during the initial assessment?",
      answer: "During the initial assessment, our BCBA will conduct comprehensive evaluations including functional behavior assessments, skill assessments, interviews with family members, and observations in various settings. This typically takes 2-4 hours and helps us develop an individualized treatment plan.",
      category: "services"
    },
    {
      id: 5,
      question: "Where do sessions take place?",
      answer: "Depending on your child's needs, sessions may take place at home, in school, in the community, or in our clinic. The setting is chosen based on the individual's goals and where skills need to be developed or behaviors need to be addressed.",
      category: "services"
    },
    {
      id: 6,
      question: "How often are ABA sessions scheduled?",
      answer: "Session frequency varies based on individual needs and treatment goals. Some children may receive services 10-40 hours per week, while others may only need a few hours per week. Your BCBA will recommend the appropriate intensity based on the assessment.",
      category: "services"
    },
    {
      id: 7,
      question: "What is the difference between a BCBA and an RBT?",
      answer: "A BCBA (Board Certified Behavior Analyst) is a master's-level professional who designs treatment plans and supervises therapy. An RBT (Registered Behavior Technician) is trained to implement the treatment plans under BCBA supervision. Both play important roles in your treatment team.",
      category: "services"
    },
    
    // Insurance & Costs
    {
      id: 8,
      question: "Do you take insurance?",
      answer: "At Milestones Behavior Analysis, we proudly partner with the following insurance providers to make ABA services accessible to families: Sunshine Health (Medicaid & Managed Care Plans), Simply Healthcare, Lucet (New Directions Behavioral Health) – including Florida Blue HMO, PPO, and myBlue HMO plans. Our staff can guide you through the authorization process and help you understand your coverage, making the process feel simple and stress-free.",
      category: "insurance"
    },

    
    // Family & Practical
    {
      id: 9,
      question: "How can parents and family members get involved?",
      answer: "Family involvement is crucial to ABA success. We provide parent training sessions, teach you how to implement strategies at home, and include you in treatment planning. Regular communication and collaboration ensure skills generalize across all environments.",
      category: "family"
    },
    {
      id: 10,
      question: "How do you measure progress?",
      answer: "We use continuous data collection to track progress on specific goals. You'll receive regular progress reports with graphs and updates. We also conduct periodic reassessments to ensure treatment plans remain effective and adjust goals as needed.",
      category: "family"
    },
    {
      id: 11,
      question: "What should I expect in the first few sessions?",
      answer: "The first few sessions focus on building rapport, establishing routines, and baseline data collection. Your child may need time to adjust to the therapist and new activities. It's normal for some initial resistance, but our therapists are trained to make sessions engaging and positive.",
      category: "family"
    },
    {
      id: 12,
      question: "Can ABA therapy help with school behaviors?",
      answer: "Yes, ABA can be very effective for school-related behaviors. We offer school consultation services, work with teachers to implement behavior plans, and can provide support for IEP meetings. Our goal is to help your child succeed in their educational environment.",
      category: "family"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'general', name: 'General' },
    { id: 'services', name: 'Services & Treatment' },
    { id: 'insurance', name: 'Insurance & Costs' },
    { id: 'family', name: 'Family & Practical' }
  ];

  const toggleItem = (id: number) => {
    setActiveItem(activeItem === id ? null : id);
  };

  const filteredFAQs = faqData.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="faq">
      {/* Hero Section */}
      <section className="faq-hero">
        <div className="container">
          <motion.div 
            className="faq-hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="faq-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Frequently Asked Questions
            </motion.h1>
            <motion.p 
              className="faq-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              Find answers to common questions about our ABA services and treatment approach
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="faq-content">
        <div className="container">
          {/* Search and Filter */}
          <div className="faq-controls">
            <div className="search-box">
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              <div className="search-icon">🔍</div>
            </div>
            
            <div className="category-filters">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Items */}
          <div className="faq-list">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map(item => (
                <div
                  key={item.id}
                  className={`faq-item ${activeItem === item.id ? 'active' : ''}`}
                >
                  <button
                    className="faq-question"
                    onClick={() => toggleItem(item.id)}
                  >
                    <span className="question-text">{item.question}</span>
                    <span className="question-icon">
                      {activeItem === item.id ? '−' : '+'}
                    </span>
                  </button>
                  <div className="faq-answer">
                    <div className="answer-content">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-results">
                <div className="no-results-icon">🔍</div>
                <h3>No results found</h3>
                <p>Try adjusting your search terms or filter selection.</p>
              </div>
            )}
          </div>

          {/* Quick Stats */}
          <div className="faq-stats">
            <div className="stat-item">
              <div className="stat-number">24hr</div>
              <div className="stat-label">Response Time</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">BCBA Supervised</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4+</div>
              <div className="stat-label">Insurance Partners</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">Free</div>
              <div className="stat-label">Initial Consultation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="faq-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Still Have Questions?</h2>
            <p className="cta-description">
              Can't find what you're looking for? Our team is here to help answer any questions 
              you may have about our ABA services.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Contact Us
              </Link>
              <Link to="/services" className="btn btn-outline">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="resources">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Additional Resources</h2>
            <p className="section-description">
              Helpful information and resources for families
            </p>
          </div>
          
          <div className="resources-grid">
            <div className="resource-card">
              <div className="resource-icon">📚</div>
              <h3 className="resource-title">Parent Guide to ABA</h3>
              <p className="resource-description">
                Comprehensive guide covering ABA basics, what to expect, and how to support your child's progress.
              </p>
              <a href="/resources/parent-guide.pdf" className="resource-link">Download PDF →</a>
            </div>
            
            <div className="resource-card">
              <div className="resource-icon">📋</div>
              <h3 className="resource-title">Insurance Checklist</h3>
              <p className="resource-description">
                Step-by-step checklist to help you understand your insurance benefits and coverage for ABA services.
              </p>
              <a href="/resources/insurance-checklist.pdf" className="resource-link">Download PDF →</a>
            </div>
            
            <div className="resource-card">
              <div className="resource-icon">🎯</div>
              <h3 className="resource-title">Setting Goals</h3>
              <p className="resource-description">
                Guide to help families identify meaningful goals and track progress in ABA therapy.
              </p>
              <a href="/resources/setting-goals.pdf" className="resource-link">Download PDF →</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;

