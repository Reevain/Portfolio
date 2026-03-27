# React Portfolio Setup Guide

This portfolio project includes automated setup scripts to create the complete directory structure and all necessary files.

## Quick Start

### Option 1: Using the Batch File (Recommended for Windows)
Double-click the batch file to run the setup:
```
setup-complete.bat
```

This will:
1. Create all necessary directories
2. Generate all React component files
3. Create all CSS files
4. Set up the main App.jsx entry point

### Option 2: Using Node.js Directly
```bash
node setup-portfolio.js
```

### Option 3: Using the Setup Runner
```bash
node setup-runner.js
```

## What Gets Created

The setup script creates the following structure:

```
Portfolio/
├── public/
│   └── index.html               # Main HTML file
├── src/
│   ├── index.js                 # React entry point
│   ├── index.css                # Global styles
│   ├── App.jsx                  # Main App component
│   ├── App.css                  # App styles
│   └── components/
│       ├── Navbar/
│       │   ├── Navbar.jsx
│       │   └── Navbar.css
│       ├── Hero/
│       │   ├── Hero.jsx
│       │   └── Hero.css
│       ├── About/
│       │   ├── About.jsx
│       │   └── About.css
│       ├── Skills/
│       │   ├── Skills.jsx
│       │   └── Skills.css
│       ├── Projects/
│       │   ├── Projects.jsx
│       │   └── Projects.css
│       ├── Education/
│       │   ├── Education.jsx
│       │   └── Education.css
│       ├── Contact/
│       │   ├── Contact.jsx
│       │   └── Contact.css
│       └── Footer/
│           ├── Footer.jsx
│           └── Footer.css
└── package.json                 # Dependencies

```

## Development Commands

After setup, use these commands:

```bash
# Install dependencies (first time only)
npm install

# Start development server
npm start

# Build for production
npm build

# Run tests
npm test
```

## Features

- **Modern React Setup** - Uses React 18 with hooks
- **Dark Theme** - Beautiful dark mode with accent colors
- **Responsive Design** - Mobile-first approach with CSS media queries
- **Component-Based** - Modular architecture with reusable components
- **Custom Styling** - Global CSS variables for easy customization
- **Font Integration** - Google Fonts (DM Sans & Playfair Display)
- **Contact Form** - Fully functional contact form component
- **Smooth Animations** - Fade-in effects and transitions

## Color Scheme

The portfolio uses these CSS variables:
- **Primary Accent**: Pink (#e040fb)
- **Secondary Accent**: Purple (#7c4dff)
- **Background**: Dark (#0a0a0a)
- **Text**: White (#ffffff)

## Customization

Edit the following files to customize:
- `src/components/Hero/Hero.jsx` - Hero section content
- `src/components/About/About.jsx` - About section content
- `src/components/Projects/Projects.jsx` - Projects list
- `src/components/Education/Education.jsx` - Education details
- `src/index.css` - Global styles and color variables

## Setup Scripts Available

1. **setup-portfolio.js** - Complete setup with all files and directories
2. **setup-complete.bat** - Batch wrapper for easy execution on Windows
3. **setup-runner.js** - Node.js runner with nice output formatting
4. **create-dirs.js** - Creates directories only
5. **create-structure.js** - Creates directories and basic structure

## Requirements

- Node.js (v14 or higher)
- npm or yarn
- Windows/Linux/Mac

## Troubleshooting

If the setup fails:
1. Ensure Node.js is installed: `node --version`
2. Check npm is working: `npm --version`
3. Try running the setup script again
4. Delete the `src` and `public` folders and try again

## Next Steps

After setup:
1. Update content in component files
2. Add your projects to the Projects section
3. Update education and skills
4. Add social links to Footer
5. Configure contact form backend
6. Deploy to your hosting platform

---

Created with ❤️ for your portfolio
