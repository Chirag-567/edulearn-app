import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h5>
              <i className="fas fa-graduation-cap text-primary me-2"></i>
              EduLearn
            </h5>
            <p>Empowering students with modern, industry-focused education.</p>
            <div className="d-flex gap-3 mt-3">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <h5>Quick Links</h5>
            <ul className="footer-links">
              {[
                { to: '/about', label: 'About Us' },
                { to: '/courses', label: 'Courses' },
                { to: '/admissions', label: 'Admissions' },
                { to: '/faculty', label: 'Faculty' },
                { to: '/events', label: 'Events' },
                { to: '/contact', label: 'Contact' },
              ].map(({ to, label }) => (
                <li key={to}><Link to={to}>{label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="col-md-4 mb-4">
            <h5>Contact Info</h5>
            <ul className="footer-links">
              <li><i className="fas fa-map-marker-alt me-2 text-primary"></i> 123 Education Street, India</li>
              <li className="mt-2"><i className="fas fa-phone me-2 text-primary"></i> +91 98765 43210</li>
              <li className="mt-2"><i className="fas fa-envelope me-2 text-primary"></i> info@edulearn.com</li>
            </ul>
          </div>
        </div>

        <hr />

        <p className="text-center mb-0" style={{ color: '#CBD5E1' }}>
          © {new Date().getFullYear()} EduLearn. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
