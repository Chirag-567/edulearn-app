import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CourseCard from '../components/CourseCard';

const Counter = ({ end, suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(end / (duration / 20));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 20);
    return () => clearInterval(timer);
  }, [end]);

  return <span>{count.toLocaleString()}{suffix}</span>;
};

const courses = [
  {
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800',
    badge: 'Technology',
    badgeColor: 'primary',
    title: 'Web Development',
    description: 'HTML, CSS, JavaScript, React & Node.js',
    duration: '12 Weeks',
    rating: '4.8',
    price: '9,999',
  },
  {
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800',
    badge: 'Data Science',
    badgeColor: 'success',
    title: 'Data Science',
    description: 'Python, SQL, Machine Learning & Analytics',
    duration: '10 Weeks',
    rating: '4.9',
    price: '12,999',
  },
  {
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    badge: 'AI',
    badgeColor: 'danger',
    title: 'Artificial Intelligence',
    description: 'AI, Deep Learning & Neural Networks',
    duration: '14 Weeks',
    rating: '4.9',
    price: '14,999',
  },
];

const testimonials = [
  { text: '"The courses helped me get my first software job. Best investment I ever made!"', name: 'Rahul Sharma', role: 'Software Engineer' },
  { text: '"Amazing faculty and practical learning experience. Highly recommended!"', name: 'Priya Verma', role: 'Data Analyst' },
  { text: '"Excellent placement support. Got placed in a top MNC within 2 months!"', name: 'Ankit Patel', role: 'Full Stack Developer' },
];

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/courses?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="hero-badge">#1 Modern Learning Platform</span>
              <h1 className="hero-title">
                Learn Today,{' '}
                <span className="text-primary">Lead Tomorrow</span>
              </h1>
              <p className="hero-text">
                Upgrade your skills with industry-leading courses, expert instructors,
                and globally recognized certifications.
              </p>
              <div className="hero-buttons">
                <Link to="/courses" className="btn btn-primary btn-lg">
                  Explore Courses
                </Link>
                <Link to="/admissions" className="btn btn-outline-primary btn-lg">
                  Apply Now
                </Link>
              </div>
              <div className="search-box">
                <form onSubmit={handleSearch}>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search courses..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button className="btn btn-primary" type="submit">
                      <i className="fas fa-search me-1"></i> Search
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900"
                className="hero-image"
                alt="Students Learning"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="row text-center g-4">
            {[
              { end: 50000, suffix: '+', label: 'Students' },
              { end: 500, suffix: '+', label: 'Courses' },
              { end: 200, suffix: '+', label: 'Expert Faculty' },
              { end: 95, suffix: '%', label: 'Placement Rate' },
            ].map(({ end, suffix, label }) => (
              <div className="col-6 col-md-3" key={label}>
                <h2><Counter end={end} suffix={suffix} /></h2>
                <p>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-5">
        <div className="container">
          <div className="section-title text-center mb-5">
            <h2>Featured Courses</h2>
            <p>Learn from the most demanded skills in the industry</p>
          </div>
          <div className="row g-4">
            {courses.map((course) => (
              <div className="col-md-4" key={course.title}>
                <CourseCard {...course} />
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <Link to="/courses" className="btn btn-outline-primary btn-lg">
              View All Courses <i className="fas fa-arrow-right ms-2"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us py-5">
        <div className="container">
          <div className="section-title text-center mb-5">
            <h2>Why Choose EduLearn?</h2>
            <p>We provide everything you need to succeed in your career</p>
          </div>
          <div className="row g-4">
            {[
              { icon: 'fa-user-graduate', title: 'Expert Faculty', text: 'Learn from industry professionals with years of real-world experience.' },
              { icon: 'fa-certificate', title: 'Certification', text: 'Globally recognized certificates to boost your career.' },
              { icon: 'fa-briefcase', title: 'Placement Support', text: 'Career guidance, mock interviews, and job opportunities.' },
              { icon: 'fa-laptop', title: 'Online Learning', text: 'Learn at your own pace from anywhere in the world.' },
            ].map(({ icon, title, text }) => (
              <div className="col-md-6 col-lg-3" key={title}>
                <div className="feature-card text-center">
                  <i className={`fas ${icon} fa-3x text-primary mb-3`}></i>
                  <h5>{title}</h5>
                  <p className="text-muted">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="section-title text-center mb-5">
            <h2>Student Testimonials</h2>
            <p>What our students say about us</p>
          </div>
          <div className="row g-4">
            {testimonials.map(({ text, name, role }) => (
              <div className="col-md-4" key={name}>
                <div className="testimonial-card h-100">
                  <i className="fas fa-quote-left fa-2x text-primary mb-3"></i>
                  <p>{text}</p>
                  <h6>{name}</h6>
                  <small className="text-muted">{role}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section text-center">
        <div className="container">
          <h2>Ready to Start Your Learning Journey?</h2>
          <p>Join thousands of students and build your future today.</p>
          <Link to="/register" className="btn btn-warning btn-lg fw-bold">
            Get Started <i className="fas fa-arrow-right ms-2"></i>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
