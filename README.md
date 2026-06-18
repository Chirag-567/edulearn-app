# EduLearn React App

A full React conversion of the EduLearn educational website.

## 📁 Project Structure

```
edulearn-react/
├── public/
│   └── index.html          ← HTML shell with Bootstrap & Font Awesome CDN
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       ← Sticky navbar with active link detection
│   │   ├── Footer.jsx       ← Site footer
│   │   ├── PageBanner.jsx   ← Reusable page hero banner
│   │   ├── CourseCard.jsx   ← Course card component
│   │   └── ScrollToTop.jsx  ← Scroll-to-top button
│   ├── pages/
│   │   ├── Home.jsx         ← Home page with counter animations
│   │   ├── About.jsx        ← About page
│   │   ├── Courses.jsx      ← Courses with search & filter
│   │   ├── CourseDetails.jsx← Course detail with accordion
│   │   ├── Faculty.jsx      ← Faculty listing
│   │   ├── Events.jsx       ← Events with live countdown timer
│   │   ├── Gallery.jsx      ← Image gallery with lightbox
│   │   ├── Blog.jsx         ← Blog posts
│   │   ├── Contact.jsx      ← Contact form + Google Maps
│   │   ├── Admissions.jsx   ← Admissions form + FAQ
│   │   ├── Login.jsx        ← Student login with validation
│   │   └── Register.jsx     ← Student registration with validation
│   ├── styles/
│   │   └── global.css       ← All styles (converted from original CSS)
│   ├── App.jsx              ← Router + layout
│   └── index.js             ← React entry point
├── package.json
└── README.md
```

## 🚀 Setup & Run

### Prerequisites
- Node.js v16+ installed

### Steps

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm start

# 3. Open browser at
http://localhost:3000
```

## ✅ Features Converted

| Feature | Status |
|---|---|
| All 12 pages | ✅ |
| React Router navigation | ✅ |
| Active nav link detection | ✅ |
| Course search & filter | ✅ |
| Live countdown timer | ✅ |
| Animated counters | ✅ |
| Gallery with lightbox | ✅ |
| Accordion (FAQ/Curriculum) | ✅ |
| Form validation | ✅ |
| Form success states | ✅ |
| Scroll to top button | ✅ |
| Responsive design | ✅ |
| 404 page | ✅ |

## 📦 Dependencies

- `react` ^18
- `react-dom` ^18
- `react-router-dom` ^6
- Bootstrap 5 (via CDN in index.html)
- Font Awesome 6 (via CDN in index.html)
- Google Fonts (via CDN in index.html)
