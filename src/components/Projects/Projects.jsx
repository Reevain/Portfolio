import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'SinnerLifestyle E-Commerce Platform',
      tagline: 'Full-Stack E-Commerce Solutions',
      duration: 'Apr\'25 - May\'25',
      image: '🛍️',
      description: 'Architected a full-stack e-commerce platform (PHP, MySQL, HTML, CSS, JavaScript) with product catalog, authentication, cart, and order management, improving navigation efficiency by 40%. Optimized backend search, filtering, and dynamic pricing modules, reducing page load time by 35% and increasing user engagement by 50%. Boosted first-month revenue by ₹7000 by enhancing checkout flow, product placement, and delivering a mobile-responsive UI with 90% user satisfaction.',
      stats: [
        '40% Navigation Improvement',
        '50% User Engagement Increase',
        '₹7000 First Month Revenue'
      ],
      links: [
        { label: 'Live', icon: '🔗' },
        { label: 'Code', icon: '💻' }
      ]
    },
    {
      id: 2,
      title: 'Get Movies - Ticket Booking System',
      tagline: 'Movie Ticket Booking Platform',
      duration: 'Mar\'24 - Apr\'24',
      image: '🎬',
      description: 'Designed a movie ticket booking system with real-time seat availability, user authentication, and instant booking confirmation, improving booking efficiency by 45%. Integrated dynamic seat mapping, showtime scheduling, and automated booking validation using PHP/MySQL, reducing booking errors by 35%. Enhanced system reliability by implementing secure data handling and optimizing database queries, cutting server response time by 30% and reducing manual management efforts by 60%.',
      stats: [
        '45% Booking Efficiency',
        '35% Error Reduction',
        '30% Response Time Cut'
      ],
      links: [
        { label: 'Live', icon: '🔗' },
        { label: 'Code', icon: '💻' }
      ]
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const currentProject = projects[currentIndex];

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

        {/* Carousel Section */}
        <div className="carousel-wrapper fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="carousel-container">
            <button className="carousel-btn carousel-prev" onClick={handlePrev} aria-label="Previous project">
              <FiChevronLeft size={28} />
            </button>

            <div className="carousel-main">
              <div className="project-showcase">
                <div className="showcase-grid">
                  <div className="showcase-card main-card">
                    <div className="project-image-large">
                      <span className="emoji-large">{currentProject.image}</span>
                    </div>
                  </div>
                  <div className="showcase-card">
                    <div className="project-image">
                      <span className="emoji">{currentProject.image}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button className="carousel-btn carousel-next" onClick={handleNext} aria-label="Next project">
              <FiChevronRight size={28} />
            </button>
          </div>

          {/* Thumbnail Navigation */}
          <div className="carousel-thumbnails">
            {projects.map((project, index) => (
              <button
                key={project.id}
                className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Project ${index + 1}`}
              >
                <span className="thumbnail-emoji">{project.image}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Project Details Section */}
        <div className="project-details fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="details-header">
            <div className="details-title-section">
              <h3 className="project-detail-title">{currentProject.title}</h3>
              <span className="project-duration-badge">{currentProject.duration}</span>
            </div>
            <div className="project-links">
              {currentProject.links.map((link, idx) => (
                <button key={idx} className="project-link-btn">
                  <span className="link-emoji">{link.icon}</span>
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div className="project-stats">
            {currentProject.stats.map((stat, idx) => (
              <div key={idx} className="stat-item">
                <span className="stat-dot">★</span>
                {stat}
              </div>
            ))}
          </div>

          <p className="project-full-description">{currentProject.description}</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;