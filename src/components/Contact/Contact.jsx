import React, { useState } from 'react';
import { AiOutlineTwitter, AiFillGithub, AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai';
import { SiDevdotto } from 'react-icons/si';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [messageType, setMessageType] = useState('hiring');

  const socialLinks = [
    { icon: AiOutlineTwitter, label: 'X (Twitter)', href: 'https://twitter.com' },
    { icon: AiFillGithub, label: 'GitHub', href: 'https://github.com' },
    { icon: AiFillLinkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
    { icon: AiOutlineInstagram, label: 'Instagram', href: 'https://instagram.com' },
    { icon: SiDevdotto, label: 'DEV.to', href: 'https://dev.to' },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { ...formData, messageType });
    // Add form submission logic here
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-content fade-in">
          <div className="contact-left">
            <div className="contact-icon">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 30L30 10M30 10H15M30 10V25" stroke="url(#gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgb(224, 64, 251)"/>
                    <stop offset="100%" stopColor="rgb(124, 77, 255)"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="contact-heading-group">
              <h2 className="contact-title">
                It's time<br />to talk!<br />Contact me
              </h2>
              <p className="contact-email">contact@amanjag.dev</p>
            </div>

            <div className="contact-social-grid">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-btn"
                    aria-label={social.label}
                    title={social.label}
                  >
                    <Icon size={20} />
                    <span>{social.label}</span>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="contact-right fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="contact-intro">
              Best way to reach out is <a href="mailto:contact@amanjag.dev">contact@amanjag.dev</a> or just simply fill out the form below. Don't be shy, I love to talk to new people and make new connections
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="form-textarea"
                  rows="5"
                ></textarea>

                <div className="message-tags">
                  <button
                    type="button"
                    className={`tag-btn ${messageType === 'hiring' ? 'active' : ''}`}
                    onClick={() => setMessageType('hiring')}
                  >
                    <span className="tag-dot hiring">🟢</span>
                    Interested In Hiring!
                  </button>
                  <button
                    type="button"
                    className={`tag-btn ${messageType === 'chat' ? 'active' : ''}`}
                    onClick={() => setMessageType('chat')}
                  >
                    <span className="tag-dot chat">🔴</span>
                    Some Chit-Chat! 🌎
                  </button>
                </div>
              </div>

              <button type="submit" className="submit-btn">
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;