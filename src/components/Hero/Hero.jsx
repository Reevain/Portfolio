import React, { useState } from 'react';
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
            Hello, I'm Aman, a Full Stack Developer &amp; Designer with <strong>4+</strong> years of experience
            developing and designing — web and mobile applications.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">
              See Projects →
            </a>
            <a href="#" className="btn-secondary">
              <FiFileText size={18} />
              Resume
            </a>
          </div>
        </div>

        <div className="hero-right fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="hero-bio">
            <p>
              Hello, I'm Aman, a <strong>Full Stack Developer &amp; Designer</strong> with <strong>4+</strong> years of experience
              developing and designing — <strong>web and mobile applications</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;