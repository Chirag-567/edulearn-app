import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';

const Admissions = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', course: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState('faq1');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', phone: '', course: '', message: '' });
  };

  const faqs = [
    { id: 'faq1', q: 'Can I apply online?', a: 'Yes, all admissions can be completed entirely online through our application portal.' },
    { id: 'faq2', q: 'Are scholarships available?', a: 'Yes, merit-based and need-based scholarships are available for eligible students.' },
    { id: 'faq3', q: 'What documents are required?', a: 'You need your academic transcripts, a valid ID proof, and a passport-sized photograph.' },
    { id: 'faq4', q: 'Is there an entrance test?', a: 'Most courses do not require an entrance test. Admission is based on academic records.' },
  ];

  return (
    <>
      <PageBanner
        title="Admissions Open 2025"
        subtitle="Begin your journey towards academic excellence and career success."
        dark
      />

      {/* Overview */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <img
                src="https://schoolaxis.in/website/images/all/admission-process.jpeg"
                className="img-fluid rounded shadow"
                alt="Admissions"
              />
            </div>
            <div className="col-lg-6">
              <h2>Admission Overview</h2>
              <p className="text-muted mt-3">
                EduLearn welcomes students from diverse backgrounds. Our admission process is
                transparent, simple, and focused on helping students achieve their educational goals.
              </p>
              <ul className="list-unstyled mt-3">
                {[
                  'Easy Online Application',
                  'Scholarship Opportunities',
                  'Expert Counseling Support',
                  'Flexible Payment Options',
                ].map((item) => (
                  <li className="mb-2" key={item}>
                    <i className="fas fa-check-circle text-success me-2"></i>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="section-title text-center mb-5">
            <h2>Admission Process</h2>
            <p>Complete your admission in 4 simple steps</p>
          </div>
          <div className="row g-4">
            {[
              { num: '1', title: 'Apply Online', text: 'Fill out the admission application form.' },
              { num: '2', title: 'Document Verification', text: 'Submit required academic documents.' },
              { num: '3', title: 'Admission Review', text: 'Our team reviews your application.' },
              { num: '4', title: 'Enrollment', text: 'Pay fees and start learning.' },
            ].map(({ num, title, text }) => (
              <div className="col-md-3" key={num}>
                <div className="card border-0 shadow-sm text-center p-4 h-100">
                  <h1 className="text-primary">{num}</h1>
                  <h5>{title}</h5>
                  <p className="text-muted mb-0">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Eligibility Criteria</h2>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card shadow-sm border-0 p-4 h-100">
                <h5><i className="fas fa-graduation-cap text-primary me-2"></i>Undergraduate Programs</h5>
                <ul className="mt-3">
                  <li className="mb-2">Minimum 50% in Higher Secondary</li>
                  <li className="mb-2">Valid Academic Records</li>
                  <li>Basic English Proficiency</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card shadow-sm border-0 p-4 h-100">
                <h5><i className="fas fa-briefcase text-primary me-2"></i>Professional Courses</h5>
                <ul className="mt-3">
                  <li className="mb-2">Open to Students & Professionals</li>
                  <li className="mb-2">No Age Restrictions</li>
                  <li>Basic Computer Knowledge</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Fee Structure</h2>
          <div className="table-responsive">
            <table className="table table-bordered table-hover bg-white">
              <thead className="table-primary">
                <tr>
                  <th>Program</th>
                  <th>Duration</th>
                  <th>Fees</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Web Development', '6 Months', '₹19,999'],
                  ['Data Science', '8 Months', '₹24,999'],
                  ['Artificial Intelligence', '10 Months', '₹29,999'],
                  ['Digital Marketing', '4 Months', '₹14,999'],
                  ['Graphic Design', '5 Months', '₹16,999'],
                ].map(([prog, dur, fee]) => (
                  <tr key={prog}>
                    <td>{prog}</td>
                    <td>{dur}</td>
                    <td className="fw-semibold text-primary">{fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section className="py-5">
        <div className="container">
          <div className="section-title text-center mb-5">
            <h2>Scholarship Programs</h2>
          </div>
          <div className="row g-4">
            {[
              { icon: 'fa-award', color: 'warning', title: 'Merit Scholarship', text: 'Up to 50% fee waiver for top performers.' },
              { icon: 'fa-user-graduate', color: 'primary', title: 'Student Scholarship', text: 'Special financial support for deserving students.' },
              { icon: 'fa-hand-holding-heart', color: 'success', title: 'Need-Based Aid', text: 'Financial assistance for eligible applicants.' },
            ].map(({ icon, color, title, text }) => (
              <div className="col-md-4" key={title}>
                <div className="card border-0 shadow-sm p-4 text-center h-100">
                  <i className={`fas ${icon} fa-3x text-${color} mb-3`}></i>
                  <h5>{title}</h5>
                  <p className="text-muted">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="admissionForm" className="py-5 bg-light">
        <div className="container">
          <div className="section-title text-center mb-5">
            <h2>Apply for Admission</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              {submitted ? (
                <div className="alert alert-success text-center p-5">
                  <i className="fas fa-check-circle fa-4x mb-3 d-block text-success"></i>
                  <h3>Application Submitted Successfully!</h3>
                  <p>Our admissions team will contact you within 2 business days.</p>
                  <button className="btn btn-success mt-2" onClick={() => setSubmitted(false)}>
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <form className="card border-0 shadow p-4" onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input type="text" className="form-control" placeholder="Full Name" required
                        value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                    </div>
                    <div className="col-md-6">
                      <input type="email" className="form-control" placeholder="Email Address" required
                        value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                    </div>
                    <div className="col-md-6">
                      <input type="tel" className="form-control" placeholder="Phone Number" required
                        value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                    </div>
                    <div className="col-md-6">
                      <select className="form-select" value={form.course}
                        onChange={(e) => setForm({ ...form, course: e.target.value })}>
                        <option value="">Select Course</option>
                        <option>Web Development</option>
                        <option>Data Science</option>
                        <option>Artificial Intelligence</option>
                        <option>Digital Marketing</option>
                        <option>Graphic Design</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <textarea className="form-control" rows="4" placeholder="Message (optional)"
                        value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                      ></textarea>
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

      {/* FAQ */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Frequently Asked Questions</h2>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion">
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
      </section>
    </>
  );
};

export default Admissions;
