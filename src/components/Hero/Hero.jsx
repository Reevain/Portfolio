import React from 'react';
import { FiFileText } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-left fade-in">
          <p className="hello-badge">hello world</p>

          <h1 className="hero-title">
            I design <span className="soft">&amp; craft beautiful</span> websites for users,<br />
            that solves your <span className="emph">business tasks</span>
          </h1>

          <p className="hero-description">
            Hello, I'm Reevain, a Full Stack Developer & Designer with <strong>3+</strong> years of experience
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">See Projects →</a>

            {/* FIXED */}
            <a href="#resume" className="btn-secondary">
              <FiFileText size={18} />
              Resume
            </a>
          </div>
        </div>

        <div className="hero-right fade-in">
          <div className="hero-bio">
            <p>
              Hello, I'm Reevain, a <strong>Full Stack Developer & Designer</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;