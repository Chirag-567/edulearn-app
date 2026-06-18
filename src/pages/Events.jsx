import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';

const useCountdown = (targetDate) => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const calc = () => {
      const diff = new Date(targetDate) - new Date();
      if (diff <= 0) return setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    calc();
    const timer = setInterval(calc, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
};

const events = [
  {
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
    badge: 'Workshop',
    badgeColor: 'primary',
    title: 'AI & Machine Learning Bootcamp',
    desc: 'Learn practical AI skills from industry experts.',
    date: '20 Aug 2025',
  },
  {
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800',
    badge: 'Seminar',
    badgeColor: 'success',
    title: 'Career Development Seminar',
    desc: 'Career guidance and placement preparation.',
    date: '05 Sept 2025',
  },
  {
    image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800',
    badge: 'Hackathon',
    badgeColor: 'danger',
    title: 'National Coding Challenge',
    desc: 'Compete with students across the country.',
    date: '18 Oct 2025',
  },
];

const Events = () => {
  const countdown = useCountdown('2025-12-15');
  const [form, setForm] = useState({ name: '', email: '', phone: '', event: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', phone: '', event: '' });
  };

  return (
    <>
      <PageBanner
        title="Events & Workshops"
        subtitle="Participate in seminars, workshops, hackathons, conferences, and networking events."
        dark
      />

      {/* Countdown */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2>Next Mega Tech Summit</h2>
          <p className="text-muted">Event Date: 15 December 2025</p>
          <div className="row justify-content-center mt-4">
            {[
              { val: countdown.days, label: 'Days' },
              { val: countdown.hours, label: 'Hours' },
              { val: countdown.minutes, label: 'Minutes' },
              { val: countdown.seconds, label: 'Seconds' },
            ].map(({ val, label }) => (
              <div className="col-6 col-md-2 mb-3" key={label}>
                <div className="card shadow-sm p-3">
                  <h2 className="text-primary">{String(val ?? 0).padStart(2, '0')}</h2>
                  <p className="mb-0 text-muted">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-5">
        <div className="container">
          <div className="section-title text-center mb-5">
            <h2>Upcoming Events</h2>
          </div>
          <div className="row g-4">
            {events.map(({ image, badge, badgeColor, title, desc, date }) => (
              <div className="col-lg-4" key={title}>
                <div className="card border-0 shadow-sm h-100">
                  <img src={image} className="card-img-top" alt={title} style={{ height: 200, objectFit: 'cover' }} />
                  <div className="card-body">
                    <span className={`badge bg-${badgeColor} mb-2`}>{badge}</span>
                    <h5>{title}</h5>
                    <p className="text-muted">{desc}</p>
                    <p><i className="fas fa-calendar me-2 text-primary"></i>{date}</p>
                    <a href="#register" className="btn btn-primary">Register</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="section-title text-center mb-5">
            <h2>Workshops & Seminars</h2>
          </div>
          <div className="row g-4">
            {[
              { icon: 'fa-chalkboard-teacher', color: 'primary', title: 'Digital Marketing Workshop', desc: 'Learn SEO, Google Ads, Social Media Marketing and Branding.' },
              { icon: 'fa-laptop-code', color: 'success', title: 'Web Development Masterclass', desc: 'Build responsive websites using HTML, CSS, JavaScript and Bootstrap.' },
            ].map(({ icon, color, title, desc }) => (
              <div className="col-md-6" key={title}>
                <div className="card border-0 shadow-sm p-4">
                  <h4><i className={`fas ${icon} text-${color} me-2`}></i>{title}</h4>
                  <p className="text-muted mb-0">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Highlights */}
      <section className="py-5">
        <div className="container">
          <div className="section-title text-center mb-5">
            <h2>Past Event Highlights</h2>
          </div>
          <div className="row g-4">
            {[
              'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800',
              'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800',
              'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800',
            ].map((src, i) => (
              <div className="col-md-4" key={i}>
                <img src={src} className="img-fluid rounded shadow gallery-img" alt="" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="register" className="py-5 bg-light">
        <div className="container">
          <div className="section-title text-center mb-5">
            <h2>Register For An Event</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              {submitted ? (
                <div className="alert alert-success text-center p-4">
                  <i className="fas fa-check-circle fa-3x mb-3 d-block"></i>
                  <h4>Registration Successful!</h4>
                  <p>You've been registered for the event. We'll send details to your email.</p>
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
                      <input type="tel" className="form-control" placeholder="Phone Number"
                        value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                    </div>
                    <div className="col-md-6">
                      <select className="form-select" value={form.event}
                        onChange={(e) => setForm({ ...form, event: e.target.value })}>
                        <option value="">Select Event</option>
                        <option>AI Bootcamp</option>
                        <option>Career Seminar</option>
                        <option>Coding Challenge</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary w-100">Register Now</button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-5 text-center">
        <div className="container">
          <h2>Stay Updated With Our Events</h2>
          <p className="text-muted">Join our community and never miss a learning opportunity.</p>
          <Link to="/contact" className="btn btn-primary btn-lg">Contact Us</Link>
        </div>
      </section>
    </>
  );
};

export default Events;
