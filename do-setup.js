const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

try {
  // Change directory
  process.chdir('c:\\Users\\ASUS\\Desktop\\Portfolio');
  
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

  console.log('Creating directories...\n');

  dirs.forEach(dir => {
    const fullPath = path.resolve(dir);
    if (!fs.existsSync(fullPath)) {
      fs.mkdirSync(fullPath, { recursive: true });
      console.log(`✓ Created: ${dir}`);
    }
  });

  console.log('\n✅ Setup complete!\n');

  // List structure
  console.log('Directory structure:\n');
  execSync('tree /F /A', { stdio: 'inherit' });
} catch (error) {
  console.error('Error:', error.message);
}
