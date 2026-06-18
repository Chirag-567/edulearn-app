import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';

const allCourses = [
  {
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800',
    badge: 'Technology',
    badgeColor: 'primary',
    title: 'Full Stack Web Development',
    description: 'Learn HTML, CSS, JavaScript, React, Node.js, and modern web technologies.',
    duration: '6 Months',
    rating: '4.9',
    price: '19,999',
    category: 'Technology',
  },
  {
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    badge: 'Data Science',
    badgeColor: 'success',
    title: 'Data Science & Analytics',
    description: 'Master Python, SQL, Machine Learning, and Business Analytics.',
    duration: '8 Months',
    rating: '4.8',
    price: '24,999',
    category: 'Technology',
  },
  {
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    badge: 'Artificial Intelligence',
    badgeColor: 'danger',
    title: 'Artificial Intelligence',
    description: 'Build AI models, neural networks, and deep learning applications.',
    duration: '10 Months',
    rating: '5.0',
    price: '29,999',
    category: 'Technology',
  },
  {
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    badge: 'Marketing',
    badgeColor: 'warning',
    title: 'Digital Marketing',
    description: 'Learn SEO, Social Media Marketing, Ads, Content Strategy and Branding.',
    duration: '4 Months',
    rating: '4.7',
    price: '14,999',
    category: 'Marketing',
  },
  {
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800',
    badge: 'Design',
    badgeColor: 'info',
    title: 'Graphic Design Mastery',
    description: 'Adobe Photoshop, Illustrator, UI/UX Design and Branding.',
    duration: '5 Months',
    rating: '4.8',
    price: '16,999',
    category: 'Design',
  },
  {
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
    badge: 'Business',
    badgeColor: 'secondary',
    title: 'Business Management',
    description: 'Leadership, Entrepreneurship, Finance and Strategic Planning.',
    duration: '6 Months',
    rating: '4.9',
    price: '21,999',
    category: 'Business',
  },
];

const Courses = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All Categories');

  const filtered = allCourses.filter((c) => {
    const matchSearch = c.title.toLowerCase().includes(search.toLowerCase());
    const matchCat = category === 'All Categories' || c.category === category;
    return matchSearch && matchCat;
  });

  return (
    <>
      <PageBanner
        title="Explore Our Courses"
        subtitle="Industry-focused programs designed to help you succeed."
      />

      {/* Search & Filter */}
      <section className="py-4 bg-light">
        <div className="container">
          <div className="row g-3">
            <div className="col-lg-8">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Search Courses..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="col-lg-4">
              <select
                className="form-select form-select-lg"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option>All Categories</option>
                <option>Technology</option>
                <option>Business</option>
                <option>Design</option>
                <option>Marketing</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-5">
        <div className="container">
          {filtered.length === 0 ? (
            <div className="text-center py-5">
              <i className="fas fa-search fa-3x text-muted mb-3"></i>
              <h4 className="text-muted">No courses found</h4>
              <p className="text-muted">Try a different search term or category.</p>
            </div>
          ) : (
            <div className="row g-4">
              {filtered.map((course) => (
                <div className="col-lg-4 col-md-6" key={course.title}>
                  <div className="course-card card h-100">
                    <img src={course.image} className="card-img-top" alt={course.title} />
                    <div className="card-body d-flex flex-column">
                      <span
                        className={`badge bg-${course.badgeColor} mb-2`}
                        style={{ width: 'fit-content' }}
                      >
                        {course.badge}
                      </span>
                      <h5>{course.title}</h5>
                      <p className="text-muted flex-grow-1">{course.description}</p>
                      <div className="d-flex justify-content-between mb-3">
                        <small><i className="fas fa-clock me-1"></i>{course.duration}</small>
                        <small><i className="fas fa-star text-warning me-1"></i>{course.rating}</small>
                      </div>
                      <h4 className="text-primary mb-3">₹{course.price}</h4>
                      <Link to="/course-details" className="btn btn-primary w-100">
                        Enroll Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section text-center">
        <div className="container">
          <h2>Ready To Start Learning?</h2>
          <p>Join thousands of students and accelerate your career with industry-leading courses.</p>
          <Link to="/admissions" className="btn btn-light btn-lg fw-bold">
            Apply Today
          </Link>
        </div>
      </section>
    </>
  );
};

export default Courses;
