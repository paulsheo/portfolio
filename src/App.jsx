import React from 'react';
import './index.css';

const SimplicityRoom = () => {
    return (
        <div>
            <header>
                <img src="/logo.svg" alt="Logo" />
                <nav>
                    <a href="#">Projects</a>
                    <a href="#">Case Study</a>
                    <a href="#">About Me</a>
                    <a href="#">Resume</a>
                </nav>
            </header>

            <div className="hero">
                <h1>Simplicity Room</h1>
                <p>Founder</p>
            </div>

            <a href="https://simplicityroom.com" target="_blank" rel="noopener noreferrer">
    <img src="/simplicityroom.png" alt="Simplicity Room" className="main-image" />
</a>

            <div className="content">
                <p>Simplicity Room is a testament to a minimalist yet highly functional e-commerce design. The website showcases a seamless user interface and intuitive navigation, creating a delightful shopping experience for every visitor. Among the standout achievements is the "Odyssey Orb," a unique product that garnered an impressive 60,000 Instagram followers and surpassed $100,000 in sales. Simplicity Room embodies the blend of aesthetic appeal and business success.</p>
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
                Next Project <a href="#">&rarr;</a>
            </div>
        </div>
    );
};

export default SimplicityRoom;
