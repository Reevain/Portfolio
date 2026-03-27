import React from 'react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      degree: 'B.Tech Computer Science',
      institution: 'University Name',
      duration: '2019 — 2023',
      description: [
        'Completed a comprehensive Computer Science degree with focus on full-stack development and system design.',
        'Developed various projects including web applications, mobile apps, and open-source contributions.'
      ]
    },
    {
      degree: 'Advanced Web Development Bootcamp',
      institution: 'Tech Institute',
      duration: '2023 — 2024',
      description: [
        'Intensive bootcamp covering modern JavaScript frameworks and cloud deployment.',
        'Built production-ready applications with React, Node.js, and various cloud platforms.'
      ]
    }
  ];

  return (
    <section className="education" id="education">
      <div className="container">
        <div className="education-header fade-in">
          <div className="education-icon">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="14" y="14" width="32" height="32" stroke="url(#gradient)" strokeWidth="2" rx="2"/>
              <rect x="20" y="20" width="20" height="20" stroke="url(#gradient)" strokeWidth="1.5" rx="1.5" opacity="0.5"/>
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgb(224, 64, 251)"/>
                  <stop offset="100%" stopColor="rgb(124, 77, 255)"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h2 className="education-title">Education</h2>
        </div>

        <div className="education-timeline fade-in" style={{ animationDelay: '0.2s' }}>
          {educationData.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
                {index < educationData.length - 1 && <div className="timeline-line"></div>}
              </div>

              <div className="education-content">
                <div className="education-left">
                  <h3 className="edu-degree">{edu.degree}</h3>
                  <p className="edu-institution">{edu.institution}</p>
                  <div className="edu-duration">
                    <span className="duration-dot">●</span>
                    <span>{edu.duration}</span>
                  </div>
                </div>

                <div className="education-right">
                  {edu.description.map((desc, idx) => (
                    <p key={idx} className="edu-description">{desc}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;