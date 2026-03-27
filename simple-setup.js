const fs = require('fs');
const path = require('path');

// Ensure we're in the right directory
const cwd = process.cwd();
console.log('Current working directory:', cwd);

// Define directories to create
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

console.log('\nCreating directories:\n');

dirs.forEach(dir => {
  const fullPath = path.join(__dirname, dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
    console.log(`✓ Created: ${dir}`);
  } else {
    console.log(`✓ Exists: ${dir}`);
  }
});

console.log('\n✅ Directory structure created successfully!\n');

// List all created items
console.log('Verifying directory structure:\n');

function walkDir(dirPath, depth = 0) {
  const prefix = '  '.repeat(depth);
  const items = fs.readdirSync(dirPath);
  
  items.sort().forEach(item => {
    const fullPath = path.join(dirPath, item);
    const stats = fs.statSync(fullPath);
    
    if (stats.isDirectory()) {
      console.log(`${prefix}📁 ${item}/`);
      walkDir(fullPath, depth + 1);
    }
  });
}

console.log(`📁 ${path.basename(__dirname)}/`);
walkDir(__dirname, 1);

console.log('\n✅ All directories verified!\n');
