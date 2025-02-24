import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"; 
import AboutMe from './AboutMe';
import Resume from './Resume';
import SimplicityRoom from './App';
import HomePage from './Home'; 

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';




function App() {
  return (
    <Router>
      <Routes>
      <Route path="/home" element={<HomePage />} />
        <Route path="/projects" element={<SimplicityRoom />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/case" element={<CaseStudy />} /> 
      </Routes>
    </Router>
  );
}


const CaseStudy = () => {
  const wireframeImages = [
    "/prospective-wireframe1.png",
    "/prospective-wireframe2.png",
    "/prospective-wireframe3.png"
  ];

  const hifiImages = [
    "/prospective-hifi1.png",
    "/prospective-hifi2.png",
    "/prospective-hifi3.png",
    "/prospective-hifi4.png"
  ];

  return (
    <div>
   
    <header className="header">
        <img src="/logo.svg" alt="Logo" className="logo" />
        <nav className="nav">
        <Link to="/home" className="nav-link">Home</Link>
         <Link to="/" className="nav-link">Projects</Link>
         <Link to="/case" className="nav-link">Case Study</Link>

           <Link to="/about" className="nav-link">About Me</Link>
           <Link to="/resume" className="nav-link active">Resume</Link>
        </nav>
      </header>

   
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1>Prospective</h1>
        <p>Design / Project Manager</p>
        <img src="/prospectiveapp.png" alt="Prospective" style={{ width: '100%', maxWidth: '400px', marginTop: '20px' }} />
      </div>

      <div style={{ marginBottom: '40px' }}>
        <div className="hero">
          <h1 className="hero-title">Wireframe</h1>
        </div>
        <Carousel responsive={{
          superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 1 },
          desktop: { breakpoint: { max: 1024, min: 768 }, items: 1 },
          tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
          mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
        }}>
          {wireframeImages.map((image, index) => (
            <img key={index} src={image} alt={`Wireframe ${index + 1}`} style={{ width: '100%', maxWidth: '400px', display: 'block', margin: 'auto' }} />
          ))}
        </Carousel>
      </div>

      <div style={{ marginBottom: '40px' }}>
        <div className="hero">
          <h1 className="hero-title">High-Fidelity Prototype</h1>
        </div>
        <Carousel responsive={{
          superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 1 },
          desktop: { breakpoint: { max: 1024, min: 768 }, items: 1 },
          tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
          mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
        }}>
          {hifiImages.map((image, index) => (
            <img key={index} src={image} alt={`High Fidelity Prototype ${index + 1}`} style={{ width: '100%', maxWidth: '400px', display: 'block', margin: 'auto' }} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CaseStudy;