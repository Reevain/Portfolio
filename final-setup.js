#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const os = require('os');

// Change to the Portfolio directory
const portfolioDir = 'c:\\Users\\ASUS\\Desktop\\Portfolio';
process.chdir(portfolioDir);

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

console.log('================================');
console.log('  Portfolio Setup - Starting');
console.log('================================\n');

dirs.forEach(dir => {
  const fullPath = path.resolve(dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
    console.log(`✓ Created: ${dir}`);
  } else {
    console.log(`✓ Already exists: ${dir}`);
  }
});

console.log('\n================================');
console.log('  Directory Structure Verified');
console.log('================================\n');

// Now list all directories recursively
console.log('Complete Directory Tree:\n');

const listTree = (dirPath, prefix = '') => {
  try {
    const items = fs.readdirSync(dirPath, { withFileTypes: true });
    const dirs = items.filter(item => item.isDirectory());
    
    dirs.forEach((item, index) => {
      const isLast = index === dirs.length - 1;
      const connector = isLast ? '└── ' : '├── ';
      const extension = isLast ? '    ' : '│   ';
      
      console.log(`${prefix}${connector}${item.name}/`);
      listTree(path.join(dirPath, item.name), prefix + extension);
    });
  } catch (err) {
    console.error(`Error reading ${dirPath}:`, err.message);
  }
};

console.log(`${portfolioDir}/`);
listTree(portfolioDir);

console.log('\n================================');
console.log('  Setup Complete!');
console.log('================================\n');
