import React, { useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('Languages');

  const skillsData = {
    Languages: ['C++', 'Python', 'C', 'JAVA'],
    Frameworks: ['HTML', 'Tailwind CSS', 'Node.js'],
    'Tools/Platforms': ['MongoDB', 'MS SQL Server'],
    'Soft Skills': ['Problem-Solving', 'Adaptability', 'Time-Management']
  };

  const workStack = [
    { name: 'C++', icon: '⚙️' },
    { name: 'Python', icon: '🐍' },
    { name: 'C', icon: '⚡' },
    { name: 'JAVA', icon: '☕' },
    { name: 'HTML', icon: '🟠' },
    { name: 'Tailwind CSS', icon: '🔷' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'MS SQL Server', icon: '📊' },
    { name: 'Problem-Solving', icon: '🧩' },
    { name: 'Adaptability', icon: '🔄' },
    { name: 'Time-Management', icon: '⏰' }
  ];

  const isSkillInActiveCategory = (skillName) => {
    return skillsData[activeFilter]?.includes(skillName) || false;
  };

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
              <h2 className="intro-heading">Technical & Professional Expertise</h2>
              <p className="intro-subheading">Languages, Frameworks & Tools</p>
            </div>
            <div className="intro-right">
              <p className="intro-text">
                I have strong proficiency in multiple programming languages including <strong>C++, Python, C, and Java</strong>, with expertise in modern web development frameworks and database management.
              </p>
              <p className="intro-text">
                My technical stack includes <strong>HTML, Tailwind CSS, and Node.js</strong> for web development, along with <strong>MongoDB and MS SQL Server</strong> for database solutions. I combine technical skills with soft skills like problem-solving, adaptability, and effective time-management.
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
              <div 
                key={index} 
                className={`work-stack-item ${isSkillInActiveCategory(item.name) ? 'highlighted' : ''}`}
              >
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