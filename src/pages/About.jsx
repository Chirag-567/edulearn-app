import React from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';

const About = () => {
  return (
    <>
      <PageBanner
        title="About EduLearn"
        subtitle="Empowering students with quality education, innovation, and career-focused learning."
      />

      {/* About Section */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <img
                src="https://student-cms.prd.timeshighereducation.com/sites/default/files/styles/default/public/istock-151597880.jpg?itok=zv65Onys"
                className="img-fluid rounded-4 shadow"
                alt="Campus"
              />
            </div>
            <div className="col-lg-6">
              <span className="hero-badge">Excellence Since 2005</span>
              <h2 className="mb-4">Building Future Leaders Through Education</h2>
              <p className="text-muted">
                EduLearn is a modern educational institution committed to delivering
                high-quality learning experiences through technology, innovation, and
                academic excellence.
              </p>
              <p className="text-muted">
                Our mission is to prepare students for global careers by combining
                practical skills, industry exposure, and world-class teaching.
              </p>
              <Link to="/courses" className="btn btn-primary mt-3">
                Explore Courses
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="why-us py-5">
        <div className="container">
          <div className="section-title text-center mb-5">
            <h2>Mission & Vision</h2>
            <p>Creating opportunities for lifelong learning.</p>
          </div>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="feature-card">
                <i className="fas fa-bullseye fa-3x text-primary"></i>
                <h4 className="mt-4">Our Mission</h4>
                <p className="text-muted">
                  To provide accessible, affordable, and high-quality education that
                  empowers students to succeed in the modern world.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="feature-card">
                <i className="fas fa-eye fa-3x text-primary"></i>
                <h4 className="mt-4">Our Vision</h4>
                <p className="text-muted">
                  To become a globally recognized educational institution fostering
                  innovation, leadership, and excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-5">
        <div className="container">
          <div className="section-title text-center mb-5">
            <h2>Our Journey</h2>
            <p>Key milestones in our educational excellence.</p>
          </div>
          <div className="row g-4">
            {[
              { year: '2005', text: 'Institution Founded' },
              { year: '2012', text: '10,000+ Students Enrolled' },
              { year: '2018', text: 'Digital Learning Platform Launch' },
              { year: '2025', text: 'Global Education Recognition' },
            ].map(({ year, text }) => (
              <div className="col-md-3" key={year}>
                <div className="feature-card text-center">
                  <h3 className="text-primary">{year}</h3>
                  <p className="text-muted mb-0">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="section-title text-center mb-5">
            <h2>Achievements & Recognition</h2>
          </div>
          <div className="row g-4">
            {[
              { icon: 'fa-award', color: 'warning', title: 'Best Educational Institute', text: 'Recognized nationally for academic excellence.' },
              { icon: 'fa-user-graduate', color: 'primary', title: '50,000+ Graduates', text: 'Successful alumni across industries worldwide.' },
              { icon: 'fa-globe', color: 'success', title: 'Global Partnerships', text: 'Collaborations with leading universities.' },
            ].map(({ icon, color, title, text }) => (
              <div className="col-md-4" key={title}>
                <div className="feature-card text-center">
                  <i className={`fas ${icon} fa-3x text-${color}`}></i>
                  <h5 className="mt-3">{title}</h5>
                  <p className="text-muted">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Facilities */}
      <section className="py-5">
        <div className="container">
          <div className="section-title text-center mb-5">
            <h2>Campus Facilities</h2>
          </div>
          <div className="row g-4">
            {[
              { icon: 'fa-book', label: 'Digital Library' },
              { icon: 'fa-laptop-code', label: 'Computer Labs' },
              { icon: 'fa-flask', label: 'Research Labs' },
              { icon: 'fa-futbol', label: 'Sports Complex' },
            ].map(({ icon, label }) => (
              <div className="col-md-3" key={label}>
                <div className="feature-card text-center">
                  <i className={`fas ${icon} fa-2x text-primary`}></i>
                  <h5 className="mt-3">{label}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section text-center">
        <div className="container">
          <h2>Join EduLearn Today</h2>
          <p>Start your journey toward academic excellence and career success.</p>
          <Link to="/admissions" className="btn btn-light btn-lg fw-bold">
            Apply for Admission
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;
