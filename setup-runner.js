#!/usr/bin/env node

/**
 * Portfolio Setup Runner
 * This script ensures the portfolio structure is created
 * Can be run directly with: node setup-runner.js
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const basePath = __dirname;

console.log('\n╔════════════════════════════════════════╗');
console.log('║  React Portfolio Setup                 ║');
console.log('╚════════════════════════════════════════╝\n');

try {
  // Run the setup-portfolio.js script
  console.log('Executing setup-portfolio.js...\n');
  execSync(`node "${path.join(basePath, 'setup-portfolio.js')}"`, {
    stdio: 'inherit',
    cwd: basePath
  });

  console.log('\n╔════════════════════════════════════════╗');
  console.log('║  ✓ Setup Complete!                    ║');
  console.log('╚════════════════════════════════════════╝\n');

  console.log('Project Structure:');
  console.log('  📁 src/');
  console.log('    ├── 📄 index.js');
  console.log('    ├── 📄 index.css');
  console.log('    ├── 📄 App.jsx');
  console.log('    ├── 📄 App.css');
  console.log('    └── components/');
  console.log('        ├── Navbar/');
  console.log('        ├── Hero/');
  console.log('        ├── About/');
  console.log('        ├── Skills/');
  console.log('        ├── Projects/');
  console.log('        ├── Education/');
  console.log('        ├── Contact/');
  console.log('        └── Footer/');
  console.log('  📁 public/');
  console.log('    └── 📄 index.html\n');

  console.log('Next Steps:');
  console.log('  1. npm install   (if not already done)');
  console.log('  2. npm start     (to start development server)');
  console.log('  3. npm build     (to build for production)\n');

} catch (error) {
  console.error('✗ Setup failed:', error.message);
  process.exit(1);
}
