import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    course: '', qualification: '', password: '', confirmPassword: '', agree: false,
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.firstName) errs.firstName = 'Required';
    if (!form.lastName) errs.lastName = 'Required';
    if (!form.email) errs.email = 'Required';
    if (!form.phone) errs.phone = 'Required';
    if (!form.password) errs.password = 'Required';
    if (form.password && form.password.length < 6) errs.password = 'Min 6 characters';
    if (form.password !== form.confirmPassword) errs.confirmPassword = 'Passwords do not match';
    if (!form.agree) errs.agree = 'You must agree to the terms';
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
            <div className="col-lg-5">
              <div className="card border-0 shadow-lg">
                <div className="card-body p-5 text-center">
                  <i className="fas fa-check-circle fa-4x text-success mb-4"></i>
                  <h3>Registration Successful!</h3>
                  <p className="text-muted">Your account has been created. You can now log in.</p>
                  <Link to="/login" className="btn btn-primary mt-2">Login Now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const field = (name, label, type = 'text', col = 6) => (
    <div className={`col-md-${col}`} key={name}>
      <label className="form-label fw-semibold">{label}</label>
      <input
        type={type}
        className={`form-control ${errors[name] ? 'is-invalid' : ''}`}
        value={form[name]}
        onChange={(e) => setForm({ ...form, [name]: e.target.value })}
      />
      {errors[name] && <div className="invalid-feedback">{errors[name]}</div>}
    </div>
  );

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="card border-0 shadow-lg">
              <div className="card-body p-5">
                <div className="text-center mb-4">
                  <Link to="/" className="text-decoration-none">
                    <h2 className="fw-bold text-primary">
                      <i className="fas fa-graduation-cap me-2"></i>EduLearn
                    </h2>
                  </Link>
                  <h4 className="mt-3">Student Registration</h4>
                  <p className="text-muted">Create your student account</p>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    {field('firstName', 'First Name')}
                    {field('lastName', 'Last Name')}
                    {field('email', 'Email Address', 'email')}
                    {field('phone', 'Phone Number', 'tel')}

                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Course Interested In</label>
                      <select
                        className="form-select"
                        value={form.course}
                        onChange={(e) => setForm({ ...form, course: e.target.value })}
                      >
                        <option value="">Select Course</option>
                        <option>Web Development</option>
                        <option>Data Science</option>
                        <option>Artificial Intelligence</option>
                        <option>Digital Marketing</option>
                        <option>Graphic Design</option>
                      </select>
                    </div>

                    {field('qualification', 'Qualification')}
                    {field('password', 'Password', 'password')}
                    {field('confirmPassword', 'Confirm Password', 'password')}

                    <div className="col-12">
                      <div className="form-check">
                        <input
                          className={`form-check-input ${errors.agree ? 'is-invalid' : ''}`}
                          type="checkbox"
                          checked={form.agree}
                          onChange={(e) => setForm({ ...form, agree: e.target.checked })}
                        />
                        <label className="form-check-label">
                          I agree to the <a href="#" className="text-primary">Terms & Conditions</a>
                        </label>
                        {errors.agree && <div className="invalid-feedback d-block">{errors.agree}</div>}
                      </div>
                    </div>

                    <div className="col-12">
                      <button type="submit" className="btn btn-primary w-100">
                        Create Account
                      </button>
                    </div>
                  </div>
                </form>

                <hr />
                <div className="text-center">
                  <p className="text-muted">Already have an account?</p>
                  <Link to="/login" className="btn btn-outline-primary">Login</Link>
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

export default Register;
