import React from 'react';
import { Link } from 'react-router-dom';
import './resume.css'; // Create a new CSS file for styling

const Resume = () => {
  return (
    <div className="resume-container">
      {/* Navigation */}
      <header className="header">
        <img src="/logo.svg" alt="Logo" className="logo" />
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About Me</Link>
          <Link to="/resume" className="nav-link active">Resume</Link>
        </nav>
      </header>

      {/* Resume Section */}
      <div className="resume-content">
        <h1>My Resume</h1>
        <p>Download my resume as a PDF or view it below.</p>
        <a href="/resume.pdf" target="_blank" className="download-button">Download Resume</a>

        {/* Embed Resume */}
        <iframe src="/resume.pdf" className="resume-frame" title="Resume"></iframe>
      </div>
    </div>
  );
};

export default Resume;
