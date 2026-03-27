# 🚀 Complete React Portfolio Setup Guide

## Overview

This guide will help you set up the Aman Kumar Jagdev React Portfolio Website from scratch. The project is fully built with React 18, featuring 8 components, responsive design, and a modern dark theme with gradient accents.

## 📋 What's Included

- ✅ 8 Pre-built React Components (Navbar, Hero, About, Skills, Projects, Education, Contact, Footer)
- ✅ 16 CSS Files (1 for each component + global styles)
- ✅ All dependencies configured (React 18, React Icons)
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Dark theme with pink/purple gradients
- ✅ Animations and smooth transitions
- ✅ Contact form with validation
- ✅ Project carousel with navigation
- ✅ Filterable skills grid

## ⚙️ Installation Steps

### Step 1: Verify Prerequisites

Make sure you have:
- **Node.js** v14 or higher
- **npm** (comes with Node.js)
- **Command Prompt** or **PowerShell**

Check versions:
```bash
node --version
npm --version
```

### Step 2: Navigate to Portfolio Directory

Open Command Prompt or PowerShell and run:

```bash
cd c:\Users\ASUS\Desktop\Portfolio
```

### Step 3: Organize Component Files (Windows)

The component files are currently in the root directory. Move them to the correct structure:

**Option A: Using the provided script (Recommended)**
```bash
node organize-files.js
```

**Option B: Manual organization**
Create the following folder structure:
```
src\
├── components\
│   ├── Navbar\
│   ├── Hero\
│   ├── About\
│   ├── Skills\
│   ├── Projects\
│   ├── Education\
│   ├── Contact\
│   └── Footer\
```

Then move the `.jsx` and `.css` files accordingly:
- `Navbar.jsx` and `Navbar.css` → `src\components\Navbar\`
- `Hero.jsx` and `Hero.css` → `src\components\Hero\`
- etc.

### Step 4: Install Dependencies

```bash
npm install
```

This will install:
- React 18.2.0
- React DOM 18.2.0
- React Icons 4.12.0
- React Scripts 5.0.1

**Expected time:** 2-5 minutes depending on internet speed

### Step 5: Start Development Server

```bash
npm start
```

The browser should automatically open to `http://localhost:3000`

If it doesn't, manually navigate to `http://localhost:3000`

### Step 6: You're Done! 🎉

The portfolio website is now running! You should see:
- Navbar with navigation links
- Hero section with intro
- About section with bio
- Skills section with filterable tabs
- Projects carousel
- Education timeline
- Contact form
- Footer with links

## 📁 Final Project Structure

After setup, your project structure should look like:

```
Portfolio/
├── node_modules/                    # Dependencies installed
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── index.js
│   ├── index.css
│   ├── App.jsx
│   ├── App.css
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
├── package.json
├── package-lock.json
└── README.md
```

## 🎨 Customization Guide

### Edit Site Content

Each component file in `src/components/` contains the content you can edit:

**Hero Component** (`src/components/Hero/Hero.jsx`):
- Change the heading text
- Update the description
- Modify button links

**About Component** (`src/components/About/About.jsx`):
- Update bio text
- Change social media links
- Add new social platforms

**Skills Component** (`src/components/Skills/Skills.jsx`):
- Add/remove skills
- Modify filter categories
- Update work stack items

**Education Component** (`src/components/Education/Education.jsx`):
- Add education entries
- Update degrees and institutions
- Change dates

**Contact Component** (`src/components/Contact/Contact.jsx`):
- Update email address
- Change social links
- Modify form fields

### Change Colors

Edit `src/index.css` and modify the CSS variables:

```css
:root {
  --accent-pink: #e040fb;
  --accent-purple: #7c4dff;
  --bg: #0a0a0a;
  --text: #ffffff;
  /* ... other colors ... */
}
```

### Change Fonts

1. Edit `public/index.html`
2. Find the Google Fonts link
3. Replace with your desired fonts
4. Update font-family in CSS

### Modify Styling

Each component has its own CSS file with all styles. Edit any `.css` file to customize:
- Colors
- Spacing (padding, margins)
- Typography (font-size, line-height)
- Layout (grid, flexbox)
- Animations

## 🚀 Building for Production

When you're ready to deploy:

```bash
npm run build
```

This creates a `build/` folder with optimized production files.

Upload the contents of the `build/` folder to your hosting provider.

## 📈 Performance Tips

- Images should be optimized and in WebP format
- Use lazy loading for heavy components
- Minimize custom fonts
- Use CDN for external resources

## 🐛 Troubleshooting

### Issue: `npm install` fails
**Solution:** 
- Clear npm cache: `npm cache clean --force`
- Try again: `npm install`

### Issue: Port 3000 already in use
**Solution:**
- Kill process: `netstat -ano | findstr :3000`
- Or specify different port: `set PORT=3001 && npm start`

### Issue: Components not loading
**Solution:**
- Check file paths in imports
- Ensure files are in correct folders
- Verify no typos in file names

### Issue: Styles not applying
**Solution:**
- Clear browser cache (Ctrl+Shift+Del)
- Check CSS file imports in components
- Verify class names match in JSX

## 📚 File Purposes

| File | Purpose |
|------|---------|
| `src/index.js` | React entry point |
| `src/index.css` | Global styles & CSS variables |
| `src/App.jsx` | Main component |
| `src/App.css` | App-level styles |
| `src/components/*/Component.jsx` | React component |
| `src/components/*/Component.css` | Component-specific styles |
| `public/index.html` | HTML template |
| `package.json` | Project configuration & dependencies |

## 🔐 Important Notes

- **Don't modify** `node_modules/` - it's auto-generated
- **Don't modify** `.git/` if using version control
- **Always commit** `package.json` and `package-lock.json`
- **Add to .gitignore**: `node_modules/`, `build/`, `.env`

## 📱 Testing Responsiveness

The portfolio is responsive across all screen sizes:

- **Desktop:** 1920px and above
- **Tablet:** 768px to 1920px
- **Mobile:** Below 768px

Test using:
- Browser DevTools (F12)
- Physical devices
- Responsive design simulators

## 🚀 Next Steps After Setup

1. **Personalize content** - Edit components with your info
2. **Update social links** - Add your actual social URLs
3. **Customize colors** - Change theme to match your brand
4. **Add projects** - Update project carousel with your work
5. **Optimize images** - Add high-quality screenshots
6. **Deploy** - Push to production hosting

## 📞 Support

If you encounter issues:
1. Check error messages in terminal
2. Review browser console (F12)
3. Check the Troubleshooting section above
4. Review component code for typos

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [React Icons](https://react-icons.github.io/react-icons/)
- [CSS Tricks](https://css-tricks.com/)
- [MDN Web Docs](https://developer.mozilla.org/)

---

**Congratulations!** 🎉 Your React portfolio is now set up and ready to customize. Happy coding!

Last Updated: March 2026
