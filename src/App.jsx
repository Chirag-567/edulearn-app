import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './styles/global.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';
import Faculty from './pages/Faculty';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Admissions from './pages/Admissions';
import Login from './pages/Login';
import Register from './pages/Register';

// Scroll to top on route change
const ScrollReset = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Pages that don't need Navbar/Footer (auth pages)
const authPaths = ['/login', '/register'];

const AppLayout = () => {
  const { pathname } = useLocation();
  const isAuth = authPaths.includes(pathname);

  return (
    <>
      <ScrollReset />
      {!isAuth && <Navbar />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course-details" element={<CourseDetails />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* 404 fallback */}
          <Route path="*" element={
            <section style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div className="text-center">
                <h1 className="display-1 text-primary fw-bold">404</h1>
                <h3>Page Not Found</h3>
                <p className="text-muted">The page you're looking for doesn't exist.</p>
                <a href="/" className="btn btn-primary">Go Home</a>
              </div>
            </section>
          } />
        </Routes>
      </main>
      {!isAuth && <Footer />}
      <ScrollToTop />
    </>
  );
};

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
