import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      position: 'Designer & Developer',
      company: 'Graphic Era University',
      duration: 'July 2022 — Present',
      points: [
        'Launched production-ready websites for Graphic Era Group, leveraging diverse technologies, including the flagship website https://geu.ac.in, resulting in a more visually appealing and engaging website that garnered a 25% increase in traffic and improved user flow.',
        'Development efforts onhttps://geimshospital.com, enabled patients to conveniently schedule appointments online, resulting in an average of 80+ appointments booked via the website. This significantly improved the hospital\'s operational efficiency and patient satisfaction.',
        'Contributed to the development of a centralized online hub for new students entering the college, including the websites https://induction.geu.one andhttps://buzz.geu.ac.in, streamlining the onboarding process and enabling better student queries resolution.'
      ]
    },
    {
      id: 2,
      position: 'Google DSC Lead',
      company: 'Google Developers',
      duration: 'August 2020 — August 2021',
      points: [
        'Expanded Student Clubs reach by over 1400%, cultivating a thriving online community of 1000 students across 4 platforms, from a mere initial 70 members.',
        'Executed several successful events and workshops across diverse domains (Web, Cloud, Mobile Development, etc.) engaging and educating audiences of over 300+ attendees per event, resulting in increased student awareness.',
        'Lead an high-performing internal team of 10+ members to execute successful events from end-to-end and building products for society.'
      ]
    }
  ];

  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="experience-header fade-in">
          <div className="experience-icon">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="12" y="18" width="36" height="30" stroke="url(#gradient)" strokeWidth="2" rx="2"/>
              <rect x="16" y="14" width="28" height="6" stroke="url(#gradient)" strokeWidth="2" rx="1"/>
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgb(224, 64, 251)"/>
                  <stop offset="100%" stopColor="rgb(124, 77, 255)"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h2 className="experience-title">Work Experience</h2>
        </div>

        <div className="experience-timeline fade-in" style={{ animationDelay: '0.2s' }}>
          {experiences.map((exp, index) => (
            <div key={exp.id} className="experience-item">
              <div className="timeline-track">
                <div className="timeline-marker">
                  <div className="timeline-dot"></div>
                  {index < experiences.length - 1 && <div className="timeline-line"></div>}
                </div>
              </div>

              <div className="experience-content">
                <div className="exp-left">
                  <h3 className="exp-position">{exp.position}</h3>
                  <p className="exp-company">{exp.company}</p>
                  <div className="exp-duration">
                    <span className="duration-icon">📅</span>
                    <span>{exp.duration}</span>
                  </div>
                </div>

                <div className="exp-right">
                  <ul className="exp-points">
                    {exp.points.map((point, idx) => (
                      <li key={idx} className="exp-point">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
