import React from 'react';
import { Link } from 'react-router-dom';
import './aboutme.css'; // Import the separate CSS file

const AboutMe = () => {
  return (
    <div className="about-me-container">
      {/* Navigation */}
      <header className="header">
        <img src="/logo.svg" alt="Logo" className="logo" />
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link active">About Me</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-text">
          <h1>Hey, I'm <span className="highlight">[Your Name]</span></h1>
          <p>A UI/UX Designer & Digital Marketer passionate about crafting meaningful experiences.</p>
        </div>
        <img src="/yourphoto.png" alt="Your Photo" className="hero-image" />
      </div>

      {/* About Me Content */}
      <div className="about-content">
        <h2>My Journey</h2>
        <p>
          I started as a designer, but my passion for **digital marketing and e-commerce** led me to explore the intersection of **design, marketing, and technology**. 
          With a strong background in UX research and data-driven decision-making, I craft seamless user experiences that not only look good but convert well.
        </p>

        <h2>Skills & Expertise</h2>
        <div className="skills-grid">
          <div className="skill-box">UI/UX Design</div>
          <div className="skill-box">Wireframing & Prototyping</div>
          <div className="skill-box">Digital Marketing</div>
          <div className="skill-box">SEO & Content Strategy</div>
          <div className="skill-box">E-Commerce Growth</div>
          <div className="skill-box">Branding & Identity</div>
        </div>

        {/* Experience Timeline */}
        <h2>Experience</h2>
        <div className="timeline">
          <div className="timeline-item">
            <h3>Simplicity Room (Founder) - Present</h3>
            <p>Built a 6-figure e-commerce business with 60K+ followers using organic marketing strategies.</p>
          </div>
          <div className="timeline-item">
            <h3>UI/UX Design Freelancer</h3>
            <p>Designed web and mobile experiences for startups and enterprises.</p>
          </div>
          <div className="timeline-item">
            <h3>Digital Marketing Consultant</h3>
            <p>Developed strategies that drove **millions of impressions and 100K+ sales**.</p>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="contact-section">
          <h2>Let's Connect!</h2>
          <p>I'm always open to new opportunities, collaborations, or just a chat about design and marketing.</p>
          <a href="mailto:your@email.com" className="contact-button">Get in Touch</a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
