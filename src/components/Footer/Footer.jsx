import React from 'react';
import { SiVercel } from 'react-icons/si';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-col">
            <p className="footer-label">Crafted By</p>
            <p className="footer-text">Aman Kumar Jagdev</p>
          </div>

          <div className="footer-col">
            <p className="footer-label">Crafted Using</p>
            <p className="footer-text">React 18, TypeScript, Tailwind CSS</p>
          </div>

          <div className="footer-col">
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="vercel-badge">
              <SiVercel size={18} />
              Hosted on Vercel
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Aman Kumar Jagdev. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;