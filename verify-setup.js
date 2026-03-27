const fs = require('fs');
const path = require('path');

const baseDir = 'c:\\Users\\ASUS\\Desktop\\Portfolio';
const dirs = [
  'src',
  'src\\components',
  'src\\components\\Navbar',
  'src\\components\\Hero',
  'src\\components\\About',
  'src\\components\\Skills',
  'src\\components\\Projects',
  'src\\components\\Education',
  'src\\components\\Contact',
  'src\\components\\Footer',
  'public'
];

console.log('Creating directory structure...\n');

dirs.forEach(dir => {
  const fullPath = path.join(baseDir, dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
    console.log(`Created: ${dir}`);
  }
});

console.log('\nDirectory structure created successfully!\n');
console.log('Listing all created directories:\n');

// List structure
const listDirs = (dirPath, indent = '') => {
  const items = fs.readdirSync(dirPath, { withFileTypes: true });
  items.forEach(item => {
    if (item.isDirectory()) {
      console.log(`${indent}📁 ${item.name}/`);
      listDirs(path.join(dirPath, item.name), indent + '  ');
    }
  });
};

listDirs(baseDir);
