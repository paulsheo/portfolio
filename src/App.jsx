import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './index.css';
import AboutMe from './AboutMe';
import Resume from './Resume';
import HomePage from './Home';
import CaseStudy from './CaseStudy'; 



function App() {
  return (
    <Router>
      <Routes>
      <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<SimplicityRoom />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/case" element={<CaseStudy />} /> 
            <Route path="/resume" element={<Resume />} />

      </Routes>
    </Router>
  );
}

const SimplicityRoom = () => {
  return (
    <div>
  
      <header className="header">
        <img src="/logo.svg" alt="Logo" className="logo" />
        <nav className="nav">
        <Link to="/home" className="nav-link">Home</Link>
          <a href="#" className="nav-link">Projects</a>
          <Link to="/case" className="nav-link">Case Study</Link>
          <Link to="/about" className="nav-link">About Me</Link>
          <Link to="/resume" className="nav-link active">Resume</Link>
        </nav>
      </header>


      <div className="simplicity-room">
        <div className="hero">
          <h1 className="hero-title">Simplicity Room</h1>
          <p className="hero-subtitle">Founder / Digital Marketing</p>
        </div>

        <a href="https://simplicityroom.com" target="_blank" rel="noopener noreferrer">
          <img src="/simplicityroom.png" alt="Simplicity Room" className="main-image" />
        </a>

        <div className="content">
          <p>
            Simplicity Room stands as a testament to the power of organic digital marketing, proving that a minimalist yet
            highly functional e-commerce platform can achieve massive success without paid advertising. With a seamless user
            experience and intuitive navigation, the brand has leveraged highly engaging, self-produced video content to
            captivate audiences and drive conversions.
          </p>
          <p>
            A prime example of this success is the Odyssey Orb, which amassed 60,000 Instagram followers and generated over
            $100,000 in sales—all fueled purely by organic reach. Through strategic content creation, viral storytelling, and
            algorithm-driven visibility, Simplicity Room has mastered the art of digital engagement without relying on paid
            ads or external promotions.
          </p>
          <p>
            By focusing on compelling, original content and an optimized user experience, Simplicity Room continues to
            redefine modern e-commerce marketing, proving that authenticity and creativity can drive sustainable growth at
            scale.
          </p>
        </div>

        <div className="stats">
          <div className="stat">
            <a href="https://www.instagram.com/odysseyorb_official/" target="_blank" rel="noopener noreferrer">
              <img src="/instagram.png" alt="Instagram" />
            </a>
            <span>60K Followers</span>
          </div>
          <div className="stat">
            <a href="https://www.instagram.com/odysseyorb_official/reels/" target="_blank" rel="noopener noreferrer">
              <img src="/playbutton.webp" alt="Views" />
            </a>
            <span>120+ Million Views</span>
          </div>
          <div className="stat">
            <a href="https://simplicityroom.com/products/odysseyorb" target="_blank" rel="noopener noreferrer">
              <img src="/piggy.webp" alt="Sales" />
            </a>
            <span>$100,000+ in Sales</span>
          </div>
        </div>

        <div className="next-project">
          Next Project <a href="#prospective">&rarr;</a>
        </div>
      </div>


      <div className="prospective" id="prospective">
        <div className="hero">
          <h1 className="hero-title">Prospective</h1>
          <p className="hero-subtitle">Design / Project Manager</p>
        </div>


        <img src="/prospectiveapp.png" alt="prospective" className="app" />
        
        <div className="content">
          <p>
          Prospective is a design-first, AI-driven platform that reimagines the scholarship search experience through seamless user interaction, intuitive UI patterns, and human-centered UX design. Developed as a portfolio showcase, the project demonstrates my expertise in UX research, interface design, and project management, while collaborating with a team of full-stack developers to bring a functional, visually cohesive, and highly scalable product to life.


          </p>
          <p>
          As the lead UI/UX designer and project manager, my role extended beyond conceptual design—I was responsible for crafting a frictionless, accessible, and aesthetically refined experience while coordinating efforts with engineers to align design intent with technical feasibility. I conducted competitive analysis, user research, wireframing, prototyping, and usability testing, ensuring that every design decision was driven by data and user behavior insights.


          </p>
        
        </div>




        <div className="section">
        <img src="/prospectivedescription.png" alt="Logo" className="description" />
  <h2 className="section-title">Check Out our Demo</h2>
  <a href="https://vercel-prospective-awarewear.vercel.app/" target="_blank" rel="noopener noreferrer">
    <button className="demo-button">Demo</button>
  </a>


</div>

        
       

       
        <div className="next-project">
          Next Project <a href="#">&rarr;</a>
        </div>
      </div>
      <div className="simplicity-room">
        <div className="hero">
          <h1 className="hero-title">Thrive</h1>
          <p className="hero-subtitle">Design / Project Manager</p>
        </div>

        <a >
          <img src="/thrive.png" alt="Simplicity Room" className="main-image" />
        </a>

        <div className="content">
          <p>
          Thrive is an AI-driven fitness app designed to revolutionize the way you achieve your health and wellness goals. Combining intelligent coaching, real-time progress tracking, and seamless design, Thrive adapts to your lifestyle, making fitness more personalized, engaging, and effortless than ever before.
          </p>

          <p>
          As the lead UI/UX designer and project manager, my focus was on delivering a frictionless and aesthetically refined experience while aligning design with technical feasibility. I worked closely with a team of designers to ensure a data-driven and user-friendly platform
          </p>
        
        </div>

      

        <div className="next-project">
          Next Project <a href="#prospective">&rarr;</a>
        </div>
      </div>






      
    </div>








  );
};

export default App;
