import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    { id: 1, title: 'Buzz — GEU Campus App', image: '📱' },
    { id: 2, title: 'Project 2', image: '🎨' },
    { id: 3, title: 'Project 3', image: '🚀' },
    { id: 4, title: 'Project 4', image: '💡' },
    { id: 5, title: 'Project 5', image: '🌟' },
    { id: 6, title: 'Project 6', image: '⚡' },
    { id: 7, title: 'Project 7', image: '🔥' },
    { id: 8, title: 'Project 8', image: '✨' },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="projects-header fade-in">
          <div className="projects-icon">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 20L40 40M40 20L20 40" stroke="url(#gradient)" strokeWidth="2" strokeLinecap="round"/>
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgb(224, 64, 251)"/>
                  <stop offset="100%" stopColor="rgb(124, 77, 255)"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h2 className="projects-title">Projects</h2>
        </div>

        <div className="carousel-container fade-in" style={{ animationDelay: '0.2s' }}>
          <button className="carousel-btn carousel-prev" onClick={handlePrev}>
            <FiChevronLeft size={24} />
          </button>

          <div className="carousel-slide">
            <div className="project-card">
              <div className="project-image">
                <span className="project-emoji">{projects[currentIndex].image}</span>
              </div>
              <h3 className="project-title">{projects[currentIndex].title}</h3>
            </div>
          </div>

          <button className="carousel-btn carousel-next" onClick={handleNext}>
            <FiChevronRight size={24} />
          </button>
        </div>

        <div className="carousel-dots fade-in" style={{ animationDelay: '0.3s' }}>
          {projects.map((project, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;