#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('📁 React Portfolio Setup Assistant\n');
console.log('This script will organize the component files into the correct structure.\n');

const baseDir = process.cwd();

// Define the component files and their target locations
const fileMappings = {
  'Navbar.jsx': 'src/components/Navbar/Navbar.jsx',
  'Navbar.css': 'src/components/Navbar/Navbar.css',
  'Hero.jsx': 'src/components/Hero/Hero.jsx',
  'Hero.css': 'src/components/Hero/Hero.css',
  'About.jsx': 'src/components/About/About.jsx',
  'About.css': 'src/components/About/About.css',
  'Skills.jsx': 'src/components/Skills/Skills.jsx',
  'Skills.css': 'src/components/Skills/Skills.css',
  'Projects.jsx': 'src/components/Projects/Projects.jsx',
  'Projects.css': 'src/components/Projects/Projects.css',
  'Education.jsx': 'src/components/Education/Education.jsx',
  'Education.css': 'src/components/Education/Education.css',
  'Contact.jsx': 'src/components/Contact/Contact.jsx',
  'Contact.css': 'src/components/Contact/Contact.css',
  'Footer.jsx': 'src/components/Footer/Footer.jsx',
  'Footer.css': 'src/components/Footer/Footer.css'
};

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
console.log('📂 Creating directory structure...');
directories.forEach(dir => {
  const fullPath = path.join(baseDir, dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
    console.log(`✅ Created: ${dir}`);
  }
});

// Move component files to correct locations
console.log('\n📦 Moving component files to correct locations...\n');

Object.entries(fileMappings).forEach(([source, target]) => {
  const sourcePath = path.join(baseDir, source);
  const targetPath = path.join(baseDir, target);

  if (fs.existsSync(sourcePath)) {
    // Create target directory if it doesn't exist
    const targetDir = path.dirname(targetPath);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    // Move the file
    try {
      fs.copyFileSync(sourcePath, targetPath);
      fs.unlinkSync(sourcePath);
      console.log(`✅ Moved: ${source} → ${target}`);
    } catch (error) {
      console.error(`❌ Error moving ${source}: ${error.message}`);
    }
  } else {
    console.log(`⚠️  File not found: ${source}`);
  }
});

// List remaining files in root that should be in src
console.log('\n\n🔍 Files still in root directory that might need organizing:');
const jsxFiles = fs.readdirSync(baseDir).filter(file => file.endsWith('.jsx') || file.endsWith('.css'));
if (jsxFiles.length === 0) {
  console.log('✅ All component files have been organized!');
} else {
  jsxFiles.forEach(file => {
    console.log(`  - ${file}`);
  });
}

console.log('\n\n📝 Next Steps:');
console.log('1. Run: npm install');
console.log('2. Run: npm start');
console.log('3. Open: http://localhost:3000\n');

console.log('✨ Setup complete! Your React portfolio is ready to run.\n');
