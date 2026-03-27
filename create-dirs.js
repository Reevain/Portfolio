const fs = require('fs');
const path = require('path');

const baseDir = 'c:\\Users\\ASUS\\Desktop\\Portfolio';

// Directory structure to create
const directories = [
  'src',
  'public',
  'src\\components\\Navbar',
  'src\\components\\Hero',
  'src\\components\\About',
  'src\\components\\Skills',
  'src\\components\\Projects',
  'src\\components\\Education',
  'src\\components\\Contact',
  'src\\components\\Footer'
];

// Create directories
directories.forEach(dir => {
  const fullPath = path.join(baseDir, dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
    console.log(`✓ Created: ${dir}`);
  } else {
    console.log(`✓ Already exists: ${dir}`);
  }
});

console.log('\n✓ Directory structure created successfully!');
