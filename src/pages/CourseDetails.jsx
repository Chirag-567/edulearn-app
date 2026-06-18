import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CourseDetails = () => {
  const [openModule, setOpenModule] = useState('module1');
  const [openFaq, setOpenFaq] = useState('faq1');
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', phone: '' });
  };

  const modules = [
    { id: 'module1', title: 'Module 1: HTML & CSS', content: 'HTML Structure, Forms, Tables, CSS Layouts, Flexbox & Grid.' },
    { id: 'module2', title: 'Module 2: JavaScript', content: 'Variables, Functions, DOM Manipulation, APIs and ES6.' },
    { id: 'module3', title: 'Module 3: React JS', content: 'Components, Hooks, Routing and State Management.' },
    { id: 'module4', title: 'Module 4: Node.js & MongoDB', content: 'Server-side programming, REST APIs, and database management.' },
  ];

  const faqs = [
    { id: 'faq1', q: 'Is prior coding knowledge required?', a: 'No, this course starts from the basics. Complete beginners are welcome.' },
    { id: 'faq2', q: 'Will I receive a certificate?', a: 'Yes, a globally recognized completion certificate is included.' },
    { id: 'faq3', q: 'Is there placement support?', a: 'Yes, we provide career guidance, resume building, and job placement assistance.' },
  ];

  return (
    <>
      {/* Course Hero */}
      <section className="page-banner">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <span className="badge bg-primary mb-3 fs-6">Best Selling Course</span>
              <h1>Full Stack Web Development</h1>
              <p className="lead mt-3 text-muted">
                Master HTML, CSS, JavaScript, Bootstrap, React, Node.js, Express,
                MongoDB and become a job-ready Full Stack Developer.
              </p>
              <div className="d-flex flex-wrap gap-4 mt-4">
                <div><i className="fas fa-star text-warning me-1"></i><strong>4.9</strong> Rating</div>
                <div><i className="fas fa-users text-primary me-1"></i><strong>12,500+</strong> Students</div>
                <div><i className="fas fa-clock text-success me-1"></i><strong>6 Months</strong></div>
                <div><i className="fas fa-certificate text-danger me-1"></i>Certificate Included</div>
              </div>
            </div>
            <div className="col-lg-5">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800"
                className="img-fluid rounded-4 shadow"
                alt="Course"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {/* Main Content */}
            <div className="col-lg-8">
              {/* Overview */}
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-body p-4">
                  <h3>Course Overview</h3>
                  <p className="text-muted">
                    This comprehensive Full Stack Development program covers frontend and backend
                    technologies used by modern companies. Students will build real-world projects
                    and gain industry experience.
                  </p>
                </div>
              </div>

              {/* Learning Outcomes */}
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-body p-4">
                  <h3>What You'll Learn</h3>
                  <div className="row">
                    {[
                      ['HTML5 & CSS3', 'JavaScript ES6+', 'Bootstrap 5', 'Responsive Design'],
                      ['React JS', 'Node.js', 'MongoDB', 'Deployment & Hosting'],
                    ].map((col, i) => (
                      <div className="col-md-6" key={i}>
                        <ul className="list-unstyled">
                          {col.map((item) => (
                            <li key={item} className="mb-2">
                              <i className="fas fa-check-circle text-success me-2"></i>{item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Curriculum */}
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-body p-4">
                  <h3>Curriculum</h3>
                  <div className="accordion mt-3" id="curriculum">
                    {modules.map(({ id, title, content }) => (
                      <div className="accordion-item" key={id}>
                        <h2 className="accordion-header">
                          <button
                            className={`accordion-button ${openModule !== id ? 'collapsed' : ''}`}
                            onClick={() => setOpenModule(openModule === id ? '' : id)}
                          >
                            {title}
                          </button>
                        </h2>
                        {openModule === id && (
                          <div className="accordion-body">{content}</div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Instructor */}
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-body p-4">
                  <h3>Instructor</h3>
                  <div className="d-flex align-items-center mt-3">
                    <img
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      className="rounded-circle me-3"
                      width="80"
                      height="80"
                      alt="Instructor"
                    />
                    <div>
                      <h5 className="mb-1">Dr. John Smith</h5>
                      <p className="text-muted mb-0">
                        Senior Software Engineer & Industry Mentor with 12+ years of experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reviews */}
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-body p-4">
                  <h3>Student Reviews</h3>
                  {[
                    { stars: '★★★★★', text: 'Excellent course with practical projects and expert guidance.' },
                    { stars: '★★★★★', text: 'Helped me get my first developer job within 3 months!' },
                  ].map(({ stars, text }) => (
                    <div className="mb-3 pb-3 border-bottom" key={text}>
                      <span className="text-warning">{stars}</span>
                      <p className="mb-0 mt-1 text-muted">{text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <h3>Frequently Asked Questions</h3>
                  <div className="accordion mt-3">
                    {faqs.map(({ id, q, a }) => (
                      <div className="accordion-item" key={id}>
                        <h2 className="accordion-header">
                          <button
                            className={`accordion-button ${openFaq !== id ? 'collapsed' : ''}`}
                            onClick={() => setOpenFaq(openFaq === id ? '' : id)}
                          >
                            {q}
                          </button>
                        </h2>
                        {openFaq === id && (
                          <div className="accordion-body text-muted">{a}</div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="card border-0 shadow-sm sticky-top" style={{ top: '100px' }}>
                <div className="card-body p-4">
                  <h2 className="text-primary">₹19,999</h2>
                  <p className="text-muted">One-time payment with lifetime access.</p>
                  <Link to="/admissions" className="btn btn-primary w-100 mb-3">
                    Enroll Now
                  </Link>
                  <button className="btn btn-outline-primary w-100">
                    Download Brochure
                  </button>
                  <hr />
                  <ul className="list-unstyled">
                    {[
                      ['fa-video', '120+ Video Lessons'],
                      ['fa-certificate', 'Certificate Included'],
                      ['fa-mobile-alt', 'Mobile Access'],
                      ['fa-infinity', 'Lifetime Access'],
                      ['fa-users', 'Community Support'],
                    ].map(([icon, text]) => (
                      <li className="mb-2" key={text}>
                        <i className={`fas ${icon} text-primary me-2`}></i>{text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enroll Form */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="section-title text-center mb-5">
            <h2>Enroll Now</h2>
            <p>Start your learning journey today.</p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              {submitted ? (
                <div className="alert alert-success text-center p-4">
                  <i className="fas fa-check-circle fa-3x mb-3 d-block"></i>
                  <h4>Application Submitted!</h4>
                  <p>We'll contact you within 24 hours.</p>
                </div>
              ) : (
                <form className="card border-0 shadow-sm p-4" onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Full Name"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email Address"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Phone Number"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        value="Full Stack Web Development"
                        readOnly
                      />
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary w-100">
                        Submit Application
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseDetails;
