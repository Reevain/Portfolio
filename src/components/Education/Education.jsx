import React from 'react';
import { GiSchoolBag } from 'react-icons/gi';
import { PiGraduationCapFill, PiBooksFill } from 'react-icons/pi';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      degree: '10th Class',
      institution: 'Army Public School Bolarum, Secunderabad',
      duration: '2020 — 2021',
      percentage: '75%',
      icon: 'school',
      description: [
        'Completed high school education with strong foundation in science and mathematics.'
      ]
    },
    {
      degree: '11th & 12th Class',
      institution: 'CRPF Public School, Hakimpet, Hyderabad',
      duration: '2022 — 2023',
      percentage: '64%',
      icon: 'books',
      description: [
        'Completed intermediate education with specialization in Physics, Chemistry, and Mathematics.'
      ]
    },
    {
      degree: 'B.Tech Computer Science',
      institution: 'Lovely Professional University',
      duration: '2023 — 2027 (Present)',
      percentage: '6.67 CGPA',
      icon: 'graduation',
      description: [
        'Currently pursuing Computer Science degree with focus on software development and modern technologies.'
      ]
    }
  ];

  const renderIcon = (iconType) => {
    switch(iconType) {
      case 'school':
        return <GiSchoolBag size={28} />;
      case 'books':
        return <PiBooksFill size={28} />;
      case 'graduation':
        return <PiGraduationCapFill size={28} />;
      default:
        return <GiSchoolBag size={28} />;
    }
  };

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
                  <div className="school-icon">
                    {renderIcon(edu.icon)}
                  </div>
                  <h3 className="edu-degree">{edu.degree}</h3>
                  <p className="edu-institution">{edu.institution}</p>
                  <div className="edu-duration">
                    <span className="duration-dot">●</span>
                    <span>{edu.duration}</span>
                  </div>
                  {edu.percentage && (
                    <div className="edu-percentage">
                      <span className="percentage-dot">★</span>
                      <span>{edu.percentage}</span>
                    </div>
                  )}
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