import React from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';

const faculty = [
  {
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
    name: 'Dr. John Smith',
    dept: 'Computer Science',
    bio: 'PhD in Artificial Intelligence with 15+ years experience.',
  },
  {
    img: 'https://randomuser.me/api/portraits/women/44.jpg',
    name: 'Dr. Sarah Johnson',
    dept: 'Data Science',
    bio: 'Research expert in Machine Learning and Big Data Analytics.',
  },
  {
    img: 'https://randomuser.me/api/portraits/men/52.jpg',
    name: 'Prof. Michael Lee',
    dept: 'Business Management',
    bio: 'Corporate consultant and entrepreneurship mentor.',
  },
  {
    img: 'https://randomuser.me/api/portraits/women/65.jpg',
    name: 'Prof. Emily Brown',
    dept: 'Digital Marketing',
    bio: 'Certified marketing strategist and branding specialist.',
  },
  {
    img: 'https://randomuser.me/api/portraits/men/75.jpg',
    name: 'Dr. James Wilson',
    dept: 'Web Development',
    bio: 'Full-stack engineer and open-source contributor.',
  },
  {
    img: 'https://randomuser.me/api/portraits/women/28.jpg',
    name: 'Prof. Anita Sharma',
    dept: 'UI/UX Design',
    bio: 'Award-winning designer with expertise in user research.',
  },
];

const departments = [
  { icon: 'fa-laptop-code', color: 'primary', title: 'Computer Science' },
  { icon: 'fa-chart-line', color: 'success', title: 'Business Studies' },
  { icon: 'fa-brain', color: 'danger', title: 'AI & Data Science' },
  { icon: 'fa-palette', color: 'warning', title: 'Design & Media' },
];

const Faculty = () => {
  return (
    <>
      <PageBanner
        title="Meet Our Faculty"
        subtitle="Learn from experienced educators, researchers, and industry professionals."
        dark
      />

      {/* Faculty Intro */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <h2>World-Class Educators</h2>
              <p className="text-muted mt-3">
                Our faculty members bring academic excellence, industry expertise, and
                practical experience to every classroom.
              </p>
              <ul className="list-unstyled mt-3">
                {['100+ Expert Faculty', 'Industry Mentors', 'Research Leaders', 'Global Experience'].map((item) => (
                  <li className="mb-2" key={item}>
                    <i className="fas fa-check-circle text-success me-2"></i>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800"
                className="img-fluid rounded shadow"
                alt="Faculty"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Cards */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="section-title text-center mb-5">
            <h2>Featured Faculty Members</h2>
            <p>Dedicated professionals committed to student success.</p>
          </div>
          <div className="row g-4">
            {faculty.map(({ img, name, dept, bio }) => (
              <div className="col-lg-4 col-md-6" key={name}>
                <div className="card border-0 shadow-sm text-center h-100 faculty-card">
                  <img src={img} className="card-img-top" alt={name} />
                  <div className="card-body">
                    <h5>{name}</h5>
                    <p className="text-primary fw-semibold">{dept}</p>
                    <p className="text-muted">{bio}</p>
                    <div className="d-flex justify-content-center gap-3">
                      <a href="#" className="text-primary"><i className="fab fa-linkedin"></i></a>
                      <a href="#" className="text-info"><i className="fab fa-twitter"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-5">
        <div className="container">
          <div className="section-title text-center mb-5">
            <h2>Academic Departments</h2>
          </div>
          <div className="row g-4">
            {departments.map(({ icon, color, title }) => (
              <div className="col-md-3" key={title}>
                <div className="card text-center border-0 shadow-sm p-4">
                  <i className={`fas ${icon} fa-3x text-${color} mb-3`}></i>
                  <h5>{title}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Stats */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <div className="section-title mb-5">
            <h2>Research & Publications</h2>
            <p>
              Our faculty actively contributes to academic research, innovation, and industry
              advancements through journals, conferences, and collaborative projects.
            </p>
          </div>
          <div className="row">
            {[
              { num: '250+', label: 'Research Papers' },
              { num: '120+', label: 'Industry Projects' },
              { num: '50+', label: 'International Collaborations' },
            ].map(({ num, label }) => (
              <div className="col-md-4" key={label}>
                <h3 className="text-primary">{num}</h3>
                <p className="text-muted">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-5 text-center">
        <div className="container">
          <h2>Learn From Industry Experts</h2>
          <p className="text-muted mb-4">Join EduLearn and gain knowledge from top educators.</p>
          <Link to="/admissions" className="btn btn-primary btn-lg">
            Apply Now
          </Link>
        </div>
      </section>
    </>
  );
};

export default Faculty;
