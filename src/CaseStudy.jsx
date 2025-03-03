import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './carousel.css'; 


function CaseStudy() {
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
    <div className="case-study-container">
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

      <section className="hero-section">
        <h1>Prospective</h1>
        <h3>AI Scholarship Finder</h3>
        <img src="/prospectiveapp.png" alt="Prospective App" className="hero-image" />
      </section>

      <section className="overview">
        <h2>01. Overview</h2>
        <p>
          Prospective is an AI-powered scholarship app designed to help students streamline the process
          of finding scholarships that align with their unique qualifications and requirements.
          While the app had a strong concept, the initial design lacked clarity in its Unique Value Proposition
          and an optimized user journey, making it difficult for students to efficiently navigate and discover relevant scholarship opportunities.
        </p>
      </section>

      <section className="problem">
        <h2>02. Problem</h2>
        <p>
          Before the redesign, Prospective’s interface was cluttered with an overwhelming number of scholarships
          but lacked an intuitive filtering system to help users find the most relevant opportunities.
          Additionally, the app did not effectively communicate how its AI-driven recommendation engine worked,
          leaving users uncertain about its value. As a result, students often abandoned their search before applying,
          leading to low engagement and a high dropout rate.
        </p>
      </section>

      <section className="design-process">
        <h2>03. Design Process</h2>
        <p>
          The redesign process began with an in-depth onboarding session and kickoff call, during which I collaborated
          with the Prospective team to define their goals and vision for the new user experience. Following this, I conducted
          a comprehensive audit of the existing app, along with competitor research, to identify opportunities for improvement and
          craft a seamless scholarship search journey tailored to students' needs.
        </p>
      </section>

      <section className="carousel-section">
        <h2>Wireframes</h2>
        <Carousel responsive={{
          superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 1 },
          desktop: { breakpoint: { max: 1024, min: 768 }, items: 1 },
          tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
          mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
        }}>
          {wireframeImages.map((image, index) => (
            <img key={index} src={image} alt={`Wireframe ${index + 1}`} className="carousel-image" />
          ))}
        </Carousel>
      </section>

      <section className="solution">
        <h2>04. Solution & Results</h2>
        <p>
          The primary goal of the redesign was to simplify the scholarship discovery process and make it easier for students
          to find opportunities tailored to their unique profiles. To accomplish this, we implemented an AI-driven filtering system
          that allowed users to refine searches based on eligibility criteria such as GPA, major, and demographic background.
          Additionally, a clear onboarding experience was introduced to guide new users in setting up their profiles and understanding
          how the AI recommendations worked.
        </p>
      </section>

      <section className="carousel-section">
        <h2>High-Fidelity Prototype</h2>
        <Carousel responsive={{
          superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 1 },
          desktop: { breakpoint: { max: 1024, min: 768 }, items: 1 },
          tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
          mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
        }}>
          {hifiImages.map((image, index) => (
            <img key={index} src={image} alt={`High Fidelity Prototype ${index + 1}`} className="carousel-image" />
          ))}
        </Carousel>
      </section>
    </div>
  );
}

export default CaseStudy;