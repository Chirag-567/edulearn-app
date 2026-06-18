import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <>
      <PageBanner
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out anytime."
        dark
      />

      {/* Contact Info */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4 text-center">
            {[
              { icon: 'fa-map-marker-alt', color: 'primary', title: 'Campus Address', lines: ['123 Education Street,', 'Knowledge City, India'] },
              { icon: 'fa-phone', color: 'success', title: 'Phone Number', lines: ['+91 98765 43210', '+91 98765 43211'] },
              { icon: 'fa-envelope', color: 'danger', title: 'Email Address', lines: ['info@edulearn.com', 'admissions@edulearn.com'] },
            ].map(({ icon, color, title, lines }) => (
              <div className="col-md-4" key={title}>
                <div className="card border-0 shadow-sm p-4 h-100">
                  <i className={`fas ${icon} fa-3x text-${color} mb-3`}></i>
                  <h5>{title}</h5>
                  {lines.map((line) => <p className="text-muted mb-0" key={line}>{line}</p>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-5">
            {/* Form */}
            <div className="col-lg-7">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="mb-4">Send Us A Message</h3>
                  {submitted ? (
                    <div className="alert alert-success text-center p-4">
                      <i className="fas fa-check-circle fa-3x mb-3 d-block"></i>
                      <h4>Message Sent!</h4>
                      <p>Thank you for contacting us. We'll get back to you within 24 hours.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
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
                          <input type="tel" className="form-control" placeholder="Phone Number"
                            value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                        </div>
                        <div className="col-md-6">
                          <input type="text" className="form-control" placeholder="Subject"
                            value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} />
                        </div>
                        <div className="col-12">
                          <textarea rows="6" className="form-control" placeholder="Your Message"
                            value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                          ></textarea>
                        </div>
                        <div className="col-12">
                          <button type="submit" className="btn btn-primary">
                            <i className="fas fa-paper-plane me-2"></i>Send Message
                          </button>
                        </div>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>

            {/* Support Info */}
            <div className="col-lg-5">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <h4>Admission Support</h4>
                  <p className="text-muted">
                    Talk to our counselors regarding courses, scholarships and admissions.
                  </p>
                  <hr />
                  <h5>Working Hours</h5>
                  <p className="text-muted">
                    Monday - Saturday<br />9:00 AM - 6:00 PM
                  </p>
                  <hr />
                  <h5>Quick Actions</h5>
                  <div className="d-grid gap-2">
                    <a
                      href="https://wa.me/919876543210"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-success"
                    >
                      <i className="fab fa-whatsapp me-2"></i>WhatsApp Support
                    </a>
                    <Link to="/admissions" className="btn btn-primary">
                      Apply for Admission
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Find Us</h2>
          <div className="ratio ratio-21x9 shadow rounded overflow-hidden">
            <iframe
              src="https://maps.google.com/maps?q=india&t=&z=5&ie=UTF8&iwloc=&output=embed"
              allowFullScreen
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-5 bg-primary text-white text-center">
        <div className="container">
          <h2 className="text-white">Ready To Begin Your Journey?</h2>
          <p>Apply today and build your future with EduLearn.</p>
          <Link to="/admissions" className="btn btn-light btn-lg fw-bold">Apply Now</Link>
        </div>
      </section>
    </>
  );
};

export default Contact;
