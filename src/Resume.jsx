import React from 'react';
import { Link } from 'react-router-dom';
import './resume.css'; 

const Resume = () => {
  return (
    <div className="resume-container">
  
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

 
      <div className="resume-content">
        <h1>My Resume</h1>
        <p>Download my resume as a PDF or view it below.</p>
        <a href="/resume.pdf" download className="download-button">Download Resume</a>


    
        <iframe src="/resume.pdf" className="resume-frame" title="Resume"></iframe>
      </div>
    </div>
  );
};

export default Resume;
