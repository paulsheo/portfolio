import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { motion } from "framer-motion";
import './home.css'; 
import AboutMe from './AboutMe';
import Resume from './Resume';
import SimplicityRoom from './App';
import CaseStudy from './CaseStudy';

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

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="header">
        <Link to="/home">
          <img src="/logo.svg" alt="Logo" className="logo" />
        </Link>
        <nav className="nav">
          <Link to="/home" className="nav-link">Home</Link>
          <Link to="/#" className="nav-link">Projects</Link>
          <Link to="/case" className="nav-link">Case Study</Link>
          <Link to="/about" className="nav-link">About Me</Link>
          <Link to="/resume" className="nav-link active">Resume</Link>
        </nav>
      </header>

      <section className="hero">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Welcome to My Portfolio
        </motion.h1>
        <motion.p 
          initial={{ color: "#000", x: -20 }}
          animate={{ x: [20, -20, 20], color: ["#ff5733", "#33ff57", "#5733ff"] }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Explore my journey in UI/UX design, digital marketing, and creative problem-solving.
        </motion.p>
        <Link to="/#" className="cta-button">View My Work</Link>
      </section>

      <section className="articles">
        {[
          {
            title: "Prospective: The Future of AI Scholarship Apps",
            image: "/prospectiveapp.png",
            link: "/case"
          },
          {
            title: "Simplicity Room: A Look into Digital Marketing",
            image: "/simplicityroom.png",
            link: "/#"
          },
          {
            title: "Thrive: A wellness app for Personalized Workouts",
            image: "/welcome-page.png",
            link: "/#thrive" 
          },
        ].map((article, index) => (
          <Link key={index} to={article.link} className="article-link">
            <div className="article-card">
              <img src={article.image} alt={article.title} className="article-image" />
              <div className="article-content">
                <h3 className="article-title">{article.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default HomePage;
