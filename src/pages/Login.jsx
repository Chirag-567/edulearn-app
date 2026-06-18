import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '', remember: false });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.email) errs.email = 'Email is required';
    if (!form.password) errs.password = 'Password is required';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="auth-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-7">
              <div className="card border-0 shadow-lg">
                <div className="card-body p-5 text-center">
                  <i className="fas fa-check-circle fa-4x text-success mb-4"></i>
                  <h3>Login Successful!</h3>
                  <p className="text-muted">Welcome back to EduLearn.</p>
                  <Link to="/" className="btn btn-primary mt-2">Go to Homepage</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="auth-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-7">
            <div className="card border-0 shadow-lg">
              <div className="card-body p-5">
                <div className="text-center mb-4">
                  <Link to="/" className="text-decoration-none">
                    <h2 className="fw-bold text-primary">
                      <i className="fas fa-graduation-cap me-2"></i>EduLearn
                    </h2>
                  </Link>
                  <h4 className="mt-3">Student Login</h4>
                  <p className="text-muted">Access your student dashboard</p>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Email Address</label>
                    <input
                      type="email"
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      placeholder="Enter your email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">Password</label>
                    <input
                      type="password"
                      className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                      placeholder="Enter password"
                      value={form.password}
                      onChange={(e) => setForm({ ...form, password: e.target.value })}
                    />
                    {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                  </div>

                  <div className="d-flex justify-content-between mb-4">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        checked={form.remember}
                        onChange={(e) => setForm({ ...form, remember: e.target.checked })}
                      />
                      <label className="form-check-label">Remember Me</label>
                    </div>
                    <a href="#" className="text-primary">Forgot Password?</a>
                  </div>

                  <button type="submit" className="btn btn-primary w-100">Login</button>
                </form>

                <hr />

                <div className="text-center">
                  <p className="text-muted">Don't have an account?</p>
                  <Link to="/register" className="btn btn-outline-primary">Register Now</Link>
                </div>

                <div className="text-center mt-4">
                  <Link to="/" className="text-muted text-decoration-none">
                    <i className="fas fa-arrow-left me-1"></i>Back to Homepage
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
