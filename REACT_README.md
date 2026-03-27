# Aman Kumar Jagdev - React Portfolio Website

A modern, fully responsive React portfolio website with a beautiful dark theme and gradient accents. Built with React 18, TypeScript support, and fully customizable components.

## 🎨 Features

- ✅ **8 React Components** - Navbar, Hero, About, Skills, Projects, Education, Contact, Footer
- ✅ **Dark Theme** - Modern dark UI with pink/purple gradient accents
- ✅ **Fully Responsive** - Mobile, tablet, and desktop optimization
- ✅ **Smooth Animations** - Fade-in effects and interactive transitions
- ✅ **Contact Form** - Functional contact form with message type selection
- ✅ **Project Carousel** - Interactive project showcase with navigation
- ✅ **Skills Showcase** - Filterable skills grid and work stack display
- ✅ **Education Timeline** - Timeline-based education display
- ✅ **Social Links** - Integrated social media buttons
- ✅ **CSS Variables** - Easy customization and theming
- ✅ **Best Practices** - Clean code, semantic HTML, accessible components

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Navigate to the Portfolio directory:**
   ```bash
   cd c:\Users\ASUS\Desktop\Portfolio
   ```

2. **Copy component files to src structure:**
   ```bash
   # On Windows, run this batch file to copy files to correct locations
   # Or manually move files according to the structure below
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm start
   ```

5. **Open browser:**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
Portfolio/
├── public/
│   └── index.html
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
└── README.md
```

## 🎯 Component Guide

### Navbar
- Sticky navigation with smooth scroll
- Responsive mobile menu toggle
- Brand name with gradient subtitle
- Contact button with chat icon

### Hero
- Large, eye-catching introduction
- Two-column layout with bio section
- Call-to-action buttons (Projects & Resume)
- Responsive typography with clamp()

### About
- Decorative rotating icon
- Professional bio section
- Social media links (Twitter, GitHub, LinkedIn, Instagram, DEV.to)
- Clean grid layout

### Skills
- Venn diagram icon
- Two-part skills display:
  - Top: Introduction to tech stack
  - Bottom: Filterable skills by category (Frontend, Backend, DevOps, etc.)
  - Work stack grid with 32+ technologies

### Projects
- Carousel/slider interface
- Previous/Next navigation buttons
- Dot indicators for project selection
- Responsive image showcase

### Education
- Timeline-based education display
- Left-aligned timeline markers
- Degree, institution, and duration info
- Detailed descriptions

### Contact
- Split layout (Form + Social Links)
- Contact form with name, email, message
- Message type selection (Hiring/Chat)
- Social media buttons
- Email link

### Footer
- Three-column layout
- Crafted by, Crafted using, and Vercel badge
- Copyright notice

## 🎨 Color Scheme

```css
--accent-pink: #e040fb
--accent-purple: #7c4dff
--bg: #0a0a0a
--text: #ffffff
--text-muted: #aaaaaa
--text-light: #dddddd
--border: rgba(255, 255, 255, 0.1)
```

## 🔤 Typography

- **Display/Serif:** "Playfair Display" - For headings and italic text
- **Body:** "DM Sans" - For regular text and body content

Imported from Google Fonts

## 📦 Dependencies

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-icons": "^4.12.0",
  "react-scripts": "5.0.1"
}
```

## 🛠️ Available Scripts

- `npm start` - Run development server
- `npm build` - Build for production
- `npm test` - Run tests
- `npm eject` - Eject from create-react-app (irreversible)

## 📱 Responsive Breakpoints

- **Desktop:** 1200px (full width container)
- **Tablet:** 768px (single column layout)
- **Mobile:** 480px (optimized mobile view)

All components have media queries for optimal display on all screen sizes.

## ✨ Animations

- **Fade-in:** Components fade in on page load with staggered delays
- **Hover Effects:** Interactive buttons and links have smooth transitions
- **Carousel:** Smooth transitions between project slides
- **Icon Animations:** Rotating and floating animations on icons

## 🔧 Customization

### Colors
Edit CSS variables in `src/index.css`:
```css
:root {
  --accent-pink: #e040fb;
  --accent-purple: #7c4dff;
  /* ... other colors ... */
}
```

### Content
Edit component JSX files to customize:
- About bio text
- Skills list (in Skills.jsx)
- Education details
- Social links
- Contact information

### Typography
Update font imports in `public/index.html` to use different Google Fonts

## 📝 Notes

- All component CSS is scoped to prevent conflicts
- Uses CSS Flexbox and Grid for layout
- No external UI libraries - pure CSS and React
- Fully accessible with semantic HTML
- Mobile-first responsive design approach

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
Connect your GitHub repository to Netlify for automatic deployments

### Traditional Hosting
```bash
npm run build
# Upload the 'build' folder to your hosting provider
```

## 📧 Contact

- **Email:** contact@amanjag.dev
- **Portfolio:** [Your portfolio URL]
- **GitHub:** [Your GitHub]
- **LinkedIn:** [Your LinkedIn]

## 📄 License

This project is open source and available under the MIT License.

---

**Built with ❤️ using React, TypeScript, and CSS**

Last Updated: March 2026

