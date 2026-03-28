import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import './About.css';

const About = () => {
  const socialLinks = [
    { icon: AiFillGithub, href: 'https://github.com/Reevain', label: 'GitHub' },
    { icon: AiFillLinkedin, href: 'https://www.linkedin.com/in/reevain-patel/', label: 'LinkedIn' },
    { icon: AiOutlineTwitter, href: 'https://x.com/reevain1501', label: 'Twitter' },
  ];

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-icon fade-in">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="12" y="12" width="36" height="36" stroke="url(#gradient)" strokeWidth="2" rx="3"/>
            <rect x="18" y="18" width="24" height="24" stroke="url(#gradient)" strokeWidth="1.5" rx="2" opacity="0.6"/>
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgb(224, 64, 251)"/>
                <stop offset="100%" stopColor="rgb(124, 77, 255)"/>
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="about-content fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="about-left">
            <h2 className="about-heading">My approach to the work is</h2>
            <p className="about-subheading">logic, consistency, and rationality</p>
          </div>

          <div className="about-right">
            <p className="about-text">
              Reevain is a dedicated full-stack developer with a pragmatic and detail-driven view. He applies a systematic mix of thoughtful engineering and modern UX design principles for scalable websites and mobile experiences. Reevain optimizes performance, maintains code quality, and collaborates closely with product and design owners to deliver consistent business value across each release.
            </p>
            <p className="about-text">
              His work is anchored by strong communication, clean architecture, and a data-backed delivery mindset. Beyond code, Reevain is passionate about design, finance, and anime. He's actively looking for opportunities in Dev Relations, Development, and Design roles where he can contribute meaningfully. He also writes technical articles on development and design.
            </p>

            <div className="social-links">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    aria-label={social.label}
                    title={social.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;