const fs = require('fs');
const path = require('path');

// Execute setup
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

console.log('Creating directory structure...\n');

dirs.forEach(dir => {
  const fullPath = path.join('c:\\Users\\ASUS\\Desktop\\Portfolio', dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
    console.log(`✓ Created: ${fullPath}`);
  } else {
    console.log(`✓ Already exists: ${fullPath}`);
  }
});

console.log('\nDirectory structure created successfully!\n');

// List all created directories
console.log('Verifying created directories:\n');
const verifyDirs = (dirPath, prefix = '') => {
  try {
    const items = fs.readdirSync(dirPath);
    items.forEach(item => {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        console.log(`${prefix}📁 ${item}/`);
        verifyDirs(fullPath, prefix + '  ');
      }
    });
  } catch (err) {
    // Ignore read errors
  }
};

verifyDirs('c:\\Users\\ASUS\\Desktop\\Portfolio');
