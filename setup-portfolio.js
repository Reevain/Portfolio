const fs = require('fs');
const path = require('path');

// Use __dirname to work from the current directory
const basePath = __dirname;

// Directories to create
const directories = [
  'src',
  'public',
  'src/components',
  'src/components/Navbar',
  'src/components/Hero',
  'src/components/About',
  'src/components/Skills',
  'src/components/Projects',
  'src/components/Education',
  'src/components/Contact',
  'src/components/Footer'
];

// Create directories
console.log('Creating directories...');
directories.forEach(dir => {
  const fullPath = path.join(basePath, dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
    console.log(`✓ Created: ${dir}`);
  } else {
    console.log(`✓ Already exists: ${dir}`);
  }
});

// Files to create with their content
const files = {
  'public/index.html': `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#0a0a0a" />
    <meta name="description" content="Aman Kumar Jagdev - Full Stack Developer & Designer Portfolio" />
    <title>Aman Kumar Jagdev - Portfolio</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,700;1,500;1,700&display=swap" rel="stylesheet" />
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>`,
  
  'src/index.js': `import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`,

  'src/index.css': `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --accent-pink: #e040fb;
  --accent-purple: #7c4dff;
  --bg: #0a0a0a;
  --bg-secondary: #101010;
  --text: #ffffff;
  --text-muted: #aaaaaa;
  --text-light: #dddddd;
  --border: rgba(255, 255, 255, 0.1);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: var(--bg);
  color: var(--text);
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  border: none;
  background: none;
  cursor: pointer;
  font-family: inherit;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeInUp 0.8s ease-out forwards;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
}`,

  'src/App.jsx': `import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;`,

  'src/App.css': `.App {
  min-height: 100vh;
  background: linear-gradient(135deg, var(--bg) 0%, #0f0f0f 100%),
              radial-gradient(circle at 10% 15%, rgba(224, 64, 251, 0.1) 0%, transparent 35%),
              radial-gradient(circle at 90% 80%, rgba(224, 64, 251, 0.08) 0%, transparent 40%);
  background-attachment: fixed;
}

main {
  position: relative;
  z-index: 1;
}

.container {
  width: min(1200px, 92vw);
  margin: 0 auto;
  padding: 0 1rem;
}

@media (max-width: 768px) {
  .container {
    width: min(100%, 95vw);
  }
}`,

  // Component files
  'src/components/Navbar/Navbar.jsx': `import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">Aman Kumar Jagdev</h1>
        <ul className="nav-menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}`,

  'src/components/Navbar/Navbar.css': `.navbar {
  background: rgba(10, 10, 10, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: 0;
  z-index: 100;
}

.navbar-container {
  width: min(1200px, 92vw);
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-logo {
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--accent-pink), var(--accent-purple));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav-menu a {
  color: var(--text-light);
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-menu a:hover {
  color: var(--accent-pink);
}

@media (max-width: 768px) {
  .nav-menu {
    gap: 1rem;
    font-size: 0.9rem;
  }
}`,

  'src/components/Hero/Hero.jsx': `import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h2 className="hero-title">Hi, I'm Aman Kumar Jagdev</h2>
        <p className="hero-subtitle">Full Stack Developer & Designer</p>
        <p className="hero-description">
          Creating beautiful, functional digital experiences through code and design
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-secondary">Get In Touch</a>
        </div>
      </div>
    </section>
  );
}`,

  'src/components/Hero/Hero.css': `.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 1rem;
  text-align: center;
}

.hero-content {
  animation: fadeInUp 1s ease-out;
  max-width: 700px;
}

.hero-title {
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--accent-pink), var(--accent-purple));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: clamp(1.2rem, 3vw, 2rem);
  color: var(--text-light);
  margin-bottom: 1rem;
  font-weight: 500;
}

.hero-description {
  font-size: 1.1rem;
  color: var(--text-muted);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.hero-cta {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 0.8rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-block;
  text-decoration: none;
}

.btn-primary {
  background: linear-gradient(135deg, var(--accent-pink), var(--accent-purple));
  color: white;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(224, 64, 251, 0.3);
}

.btn-secondary {
  border: 2px solid var(--border);
  color: var(--text);
}

.btn-secondary:hover {
  border-color: var(--accent-pink);
  color: var(--accent-pink);
}

@media (max-width: 768px) {
  .hero {
    min-height: 80vh;
    padding: 2rem 1rem;
  }

  .hero-cta {
    flex-direction: column;
  }

  .btn {
    width: 100%;
  }
}`,

  'src/components/About/About.jsx': `import React from 'react';
import './About.css';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <p>
            I'm a passionate developer with a keen eye for design. I love building web applications 
            that are not just functional, but also beautiful and intuitive to use.
          </p>
          <p>
            With expertise in modern frontend and backend technologies, I create full-stack solutions 
            that solve real problems and deliver exceptional user experiences.
          </p>
        </div>
      </div>
    </section>
  );
}`,

  'src/components/About/About.css': `.about {
  padding: 6rem 1rem;
  background: var(--bg-secondary);
}

.about-container {
  width: min(1200px, 92vw);
  margin: 0 auto;
}

.section-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  margin-bottom: 3rem;
  text-align: center;
  background: linear-gradient(135deg, var(--accent-pink), var(--accent-purple));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.about-content {
  display: grid;
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.about-content p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-light);
}

@media (max-width: 768px) {
  .about {
    padding: 4rem 1rem;
  }
}`,

  'src/components/Skills/Skills.jsx': `import React from 'react';
import './Skills.css';

export default function Skills() {
  const skills = [
    { category: 'Frontend', items: ['React', 'JavaScript', 'HTML/CSS', 'Responsive Design'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'Databases', 'APIs'] },
    { category: 'Tools', items: ['Git', 'VS Code', 'npm', 'Figma'] },
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.category} className="skill-card">
              <h3>{skill.category}</h3>
              <ul>
                {skill.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`,

  'src/components/Skills/Skills.css': `.skills {
  padding: 6rem 1rem;
}

.skills-container {
  width: min(1200px, 92vw);
  margin: 0 auto;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.skill-card {
  padding: 2rem;
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.02);
  transition: all 0.3s ease;
}

.skill-card:hover {
  border-color: var(--accent-pink);
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(224, 64, 251, 0.1);
}

.skill-card h3 {
  color: var(--accent-pink);
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.skill-card ul {
  list-style: none;
}

.skill-card li {
  color: var(--text-light);
  padding: 0.5rem 0;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .skills {
    padding: 4rem 1rem;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }
}`,

  'src/components/Projects/Projects.jsx': `import React from 'react';
import './Projects.css';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'A description of your first project',
      link: '#'
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'A description of your second project',
      link: '#'
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'A description of your third project',
      link: '#'
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="project-link">View Project →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`,

  'src/components/Projects/Projects.css': `.projects {
  padding: 6rem 1rem;
  background: var(--bg-secondary);
}

.projects-container {
  width: min(1200px, 92vw);
  margin: 0 auto;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.project-card {
  padding: 2rem;
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.02);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  border-color: var(--accent-purple);
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(124, 77, 255, 0.1);
}

.project-card h3 {
  color: var(--text);
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.project-card p {
  color: var(--text-muted);
  line-height: 1.6;
  flex-grow: 1;
  margin-bottom: 1rem;
}

.project-link {
  color: var(--accent-purple);
  font-weight: 600;
  transition: color 0.3s ease;
}

.project-link:hover {
  color: var(--accent-pink);
}

@media (max-width: 768px) {
  .projects {
    padding: 4rem 1rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }
}`,

  'src/components/Education/Education.jsx': `import React from 'react';
import './Education.css';

export default function Education() {
  const education = [
    {
      id: 1,
      degree: 'Your Degree',
      institution: 'Your Institution',
      year: '2020 - 2024'
    },
  ];

  return (
    <section className="education" id="education">
      <div className="education-container">
        <h2 className="section-title">Education</h2>
        <div className="education-list">
          {education.map((edu) => (
            <div key={edu.id} className="education-item">
              <h3>{edu.degree}</h3>
              <p className="institution">{edu.institution}</p>
              <p className="year">{edu.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`,

  'src/components/Education/Education.css': `.education {
  padding: 6rem 1rem;
}

.education-container {
  width: min(1200px, 92vw);
  margin: 0 auto;
}

.education-list {
  display: grid;
  gap: 2rem;
  margin-top: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.education-item {
  padding: 2rem;
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.02);
  border-left: 4px solid var(--accent-pink);
  transition: all 0.3s ease;
}

.education-item:hover {
  transform: translateX(10px);
  box-shadow: 0 20px 40px rgba(224, 64, 251, 0.1);
}

.education-item h3 {
  color: var(--accent-pink);
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.institution {
  color: var(--text-light);
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.year {
  color: var(--text-muted);
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .education {
    padding: 4rem 1rem;
  }
}`,

  'src/components/Contact/Contact.jsx': `import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
}`,

  'src/components/Contact/Contact.css': `.contact {
  padding: 6rem 1rem;
  background: var(--bg-secondary);
}

.contact-container {
  width: min(1200px, 92vw);
  margin: 0 auto;
}

.contact-form {
  max-width: 600px;
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact-form input,
.contact-form textarea {
  padding: 1rem;
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  color: var(--text);
  font-family: inherit;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.contact-form input:focus,
.contact-form textarea:focus {
  outline: none;
  border-color: var(--accent-pink);
  box-shadow: 0 0 10px rgba(224, 64, 251, 0.3);
}

.contact-form button {
  padding: 1rem;
  font-size: 1rem;
}

@media (max-width: 768px) {
  .contact {
    padding: 4rem 1rem;
  }

  .contact-form {
    max-width: 100%;
  }
}`,

  'src/components/Footer/Footer.jsx': `import React from 'react';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; ${currentYear} Aman Kumar Jagdev. All rights reserved.</p>
        <div className="social-links">
          <a href="#" className="social-link">GitHub</a>
          <a href="#" className="social-link">LinkedIn</a>
          <a href="#" className="social-link">Twitter</a>
        </div>
      </div>
    </footer>
  );
}`,

  'src/components/Footer/Footer.css': `.footer {
  background: var(--bg-secondary);
  border-top: 1px solid var(--border);
  padding: 2rem 1rem;
  text-align: center;
}

.footer-container {
  width: min(1200px, 92vw);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-container p {
  color: var(--text-muted);
  font-size: 0.9rem;
}

.social-links {
  display: flex;
  gap: 1.5rem;
}

.social-link {
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.social-link:hover {
  color: var(--accent-pink);
}

@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    justify-content: center;
  }
}`
};

// Create files
console.log('\nCreating files...');
Object.entries(files).forEach(([filePath, content]) => {
  const fullPath = path.join(basePath, filePath);
  if (!fs.existsSync(fullPath)) {
    fs.writeFileSync(fullPath, content);
    console.log(`✓ Created: ${filePath}`);
  } else {
    console.log(`✓ Already exists: ${filePath}`);
  }
});

console.log('\n✓ Portfolio structure setup complete!');
