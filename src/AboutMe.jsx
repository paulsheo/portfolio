import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import './aboutme.css'; 

const skills = [
  "UI/UX Design",
  "Wireframing & Prototyping",
  "Digital Marketing",
  "SEO & Content Strategy",
  "E-Commerce Growth",
  "JavaScript",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Adobe InDesign",
  "Adobe After Effects",
];

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <header className="header">
        <Link to="/home">
          <img src="/logo.svg" alt="Logo" className="logo" />
        </Link>
        <nav className="nav">
          <Link to="/home" className="nav-link">Home</Link>
          <Link to="/" className="nav-link">Projects</Link>
          <Link to="/case" className="nav-link active">Case Study</Link>
          <Link to="/about" className="nav-link">About Me</Link>
          <Link to="/resume" className="nav-link">Resume</Link>
        </nav>
      </header>

      <div className="about-section">
        <div className="about-image">
          <img src="/me.JPG" alt="Paul" />
        </div>
        <div className="about-text">
          <h2>My Journey</h2>
          <p>
            I started my journey with a deep interest in launching my own e-commerce store, fascinated by how design and marketing could shape online shopping experiences.  
            As I worked on different projects in UI/UX, I realized that great design isn’t just about aesthetics—it’s about solving problems, enhancing usability, and driving engagement.  
          </p>
          <p>
            This realization led me to explore the intersection of e-commerce, digital marketing, and user experience where conversion-driven design plays a crucial role in business growth.  
            By combining UI/UX principles with strategic marketing tactics, I’ve been able to create seamless, high-converting digital experiences that not only look good but also drive results.  
          </p>

          <h2>Skills & Expertise</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="skill-box p-4 bg-gray-200 rounded-xl text-center shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="about-content">
        <h2>Experience</h2>
        <div className="timeline">
          <div className="timeline-item">
            <h3>Simplicity Room (Founder)</h3>
            <p>Built a successful e-commerce business with 60K+ followers using organic marketing strategies. Developed and optimized the UI/UX to enhance customer engagement and drive conversions.</p>
          </div>

          <div className="timeline-item">
            <h3>UI/UX Design</h3>
            <p>Designed intuitive web and mobile experiences for startups and enterprises, focusing on usability, accessibility, and conversion-driven interfaces.</p>
          </div>

          <div className="timeline-item">
            <h3>Front-End Developer</h3>
            <p>Developed responsive websites and web applications using React.js, JavaScript, HTML, and CSS. Implemented interactive components, animations, and API integrations to enhance functionality.</p>
          </div>

          <div className="timeline-item">
            <h3>Full-Stack Project Collaboration</h3>
            <p>Worked alongside developers to integrate UI/UX designs into production. Gained experience with Node.js and Firebase to build scalable applications.</p>
          </div>

          <div className="timeline-item">
            <h3>Digital Marketing</h3>
            <p>Developed strategies that drove millions of impressions and 100K+ sales. Utilized SEO, and data-driven UI improvements.</p>
          </div>
        </div>

        <div className="contact-section">
          <h2>Let's Connect!</h2>
          <p>I'm always open to new opportunities, collaborations, or just a chat about design and marketing.</p>
          <a href="mailto:paulsheo50@gmail.com" className="contact-button">Get in Touch</a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
  