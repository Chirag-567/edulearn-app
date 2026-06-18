import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/courses', label: 'Courses' },
    { path: '/faculty', label: 'Faculty' },
    { path: '/events', label: 'Events' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`navbar navbar-expand-lg navbar-light bg-white sticky-top ${scrolled ? 'shadow' : 'shadow-sm'}`}>
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          <i className="fas fa-graduation-cap text-primary me-2"></i>
          EduLearn
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            {navLinks.map(({ path, label }) => (
              <li className="nav-item" key={path}>
                <Link
                  className={`nav-link ${isActive(path) ? 'active' : ''}`}
                  to={path}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/register"
            className="btn btn-primary ms-lg-3"
            onClick={() => setMenuOpen(false)}
          >
            Apply Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
