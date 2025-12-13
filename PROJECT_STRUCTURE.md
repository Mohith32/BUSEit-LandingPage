# BUSEit Landing Page

Enterprise-level React landing page built with Vite.

## 📁 Project Structure

```
BUSEit/
├── assets/                          # Static assets (served publicly)
│   ├── logos/
│   │   └── BUSEit..svg
│   ├── heroSectionComponents/
│   │   └── heroSectionAnimation.gif
│   └── Apple and google download/
│       ├── Download_on_the_App_Store_Badge.svg
│       └── google-play-badge-logo-svgrepo-com.svg
│
├── src/
│   ├── components/                  # Reusable components
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx          # Navigation bar with glass effect
│   │   │   └── Navbar.css
│   │   ├── HeroSection/
│   │   │   ├── HeroSection.jsx     # Hero section with GIF & content
│   │   │   └── HeroSection.css
│   │   └── Footer/
│   │       ├── FooterBanner.jsx    # Footer banner component
│   │       └── FooterBanner.css
│   │
│   ├── styles/
│   │   └── designSystem.css         # Design tokens & variables
│   │
│   ├── App.jsx                      # Main app component
│   ├── App.css                      # App-level styles
│   ├── index.css                    # Global resets & base styles
│   └── main.jsx                     # Entry point
│
├── vite.config.js                   # Vite configuration
└── package.json
```

## 🎨 Design System

All design specifications are defined in `src/styles/designSystem.css`:
- **Colors**: Primary orange (#FF5202), neutrals, backgrounds
- **Typography**: SF Pro for body, Mafle Type for headlines
- **Spacing**: Consistent spacing scale
- **Effects**: Glassmorphism utilities

## 🚀 Running the Project

```bash
# Development server (already running)
npm run dev
# Open http://localhost:5173

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Components Built

### ✅ Navbar
- Glassmorphism effect with backdrop blur
- Logo, navigation links, contact button
- Smooth scroll to sections
- Pixel-perfect Figma specs

### ✅ Hero Section
- Animated GIF illustration
- Headline with custom typography
- Description text
- App store download badges
- Fully responsive

### ✅ Footer Banner
- Orange banner with tagline
- Exact Figma dimensions

## 🎯 Next Steps

- [ ] Build "How It Works" section
- [ ] Build "For Busy Users" section
- [ ] Build "Features" grid section
- [ ] Build "FAQs" section
- [ ] Add scroll animations with Framer Motion
- [ ] Implement spring animations for navigation
