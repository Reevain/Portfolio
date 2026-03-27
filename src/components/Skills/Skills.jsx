import React, { useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('Frontend');

  const skillsData = {
    Frontend: ['React.js', 'Next.js 13', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'Sass'],
    Backend: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Prisma', 'REST APIs'],
    DevOps: ['Docker', 'Git & GitHub', 'CI/CD', 'Linux CLI', 'AWS', 'Vercel'],
    Databases: ['MongoDB', 'PostgreSQL', 'Firebase', 'SQLite', 'Firestore', 'MySQL'],
    Cloud: ['AWS', 'GCP', 'Microsoft Azure', 'Vercel', 'Firebase'],
    Other: ['C++/C', 'Microservices', 'GraphQL', 'ESLint', 'React Native']
  };

  const workStack = [
    { name: 'TypeScript', icon: '🔵' },
    { name: 'JavaScript', icon: '🟨' },
    { name: 'Next.js 13', icon: '⬛' },
    { name: 'Next.js 12', icon: '⬛' },
    { name: 'React.js', icon: '🔵' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'HTML', icon: '🟠' },
    { name: 'React Native', icon: '🔵' },
    { name: 'Tailwind CSS', icon: '🔷' },
    { name: 'CSS', icon: '🔷' },
    { name: 'Sass', icon: '🌺' },
    { name: 'Docker', icon: '🐋' },
    { name: 'Git & GitHub', icon: '🐙' },
    { name: 'Prisma', icon: '🔳' },
    { name: 'Express.js', icon: '🟢' },
    { name: 'Mongoose', icon: '🍃' },
    { name: 'ESLint', icon: '🔧' },
    { name: 'Firebase', icon: '🔥' },
    { name: 'Vercel', icon: '⬛' },
    { name: 'MySQL', icon: '🐬' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'SQLite', icon: '📊' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Firestore', icon: '🔥' },
    { name: 'AWS', icon: '🟠' },
    { name: 'GCP', icon: '🔵' },
    { name: 'Microsoft Azure', icon: '🔷' },
    { name: 'C++/C', icon: '⚙️' },
    { name: 'REST APIs', icon: '🌐' },
    { name: 'CI/CD', icon: '⚡' },
    { name: 'Linux CLI', icon: '🐧' },
    { name: 'Microservices', icon: '🔗' },
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="skills-top fade-in">
          <div className="skills-icon">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="12" stroke="url(#gradient)" strokeWidth="2"/>
              <circle cx="40" cy="20" r="12" stroke="url(#gradient)" strokeWidth="2"/>
              <circle cx="30" cy="40" r="12" stroke="url(#gradient)" strokeWidth="2"/>
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgb(224, 64, 251)"/>
                  <stop offset="100%" stopColor="rgb(124, 77, 255)"/>
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="skills-intro">
            <div className="intro-left">
              <h2 className="intro-heading">I build things for the people</h2>
              <p className="intro-subheading">I can Design, Develop, Deploy</p>
            </div>
            <div className="intro-right">
              <p className="intro-text">
                My go-to stack is <strong>Next JS (With TypeScript & SaSS)</strong>, which was previously known as the MERN Stack for web-based solutions. I have collaborated with developers to create a variety of open-source solutions.
              </p>
              <p className="intro-text">
                I have a thing for making unique user interfaces, so I always design the systems on Figma from scratch and code them using tailwind, giving the app a unique new look and better control and customizability.
              </p>
            </div>
          </div>
        </div>

        <div className="skills-filters fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="filter-label">Skills →</div>
          <div className="filter-buttons">
            {Object.keys(skillsData).map(filter => (
              <button
                key={filter}
                className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="skills-grid fade-in" style={{ animationDelay: '0.3s' }}>
          {skillsData[activeFilter].map((skill, index) => (
            <div key={index} className="skill-item">
              <span className="skill-name">{skill}</span>
            </div>
          ))}
        </div>

        <div className="work-stack-section fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="work-stack-label">Work Stack →</div>
          <div className="work-stack-grid">
            {workStack.map((item, index) => (
              <div key={index} className="work-stack-item">
                <span className="stack-icon">{item.icon}</span>
                <span className="stack-name">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;