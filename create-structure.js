const fs = require('fs');
const path = require('path');

// Create directories
const dirs = [
  'src',
  'src/components',
  'src/components/Navbar',
  'src/components/Hero',
  'src/components/About',
  'src/components/Skills',
  'src/components/Projects',
  'src/components/Education',
  'src/components/Contact',
  'src/components/Footer',
  'public'
];

dirs.forEach(dir => {
  const fullPath = path.join(__dirname, dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
  }
});

// File contents
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
}`
};

// Create files
Object.entries(files).forEach(([filePath, content]) => {
  const fullPath = path.join(__dirname, filePath);
  fs.writeFileSync(fullPath, content, 'utf8');
  console.log(`Created: ${filePath}`);
});

console.log('Setup complete!');
