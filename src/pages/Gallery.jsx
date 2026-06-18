import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';

const allImages = {
  Campus: [
    'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800',
    'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800',
    'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800',
  ],
  Events: [
    'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800',
    'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800',
    'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800',
    'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800',
  ],
  Students: [
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800',
    'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800',
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800',
  ],
};

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filters = ['All', ...Object.keys(allImages)];

  const displayImages = activeFilter === 'All'
    ? Object.values(allImages).flat()
    : allImages[activeFilter] || [];

  return (
    <>
      <PageBanner
        title="Campus Gallery"
        subtitle="Explore our vibrant campus life, events, classrooms, and student achievements."
        dark
      />

      {/* Filters */}
      <section className="py-4 bg-light">
        <div className="container text-center">
          {filters.map((f) => (
            <button
              key={f}
              className={`btn m-2 ${activeFilter === f ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {displayImages.map((src, i) => (
              <div
                className={`col-lg-4 col-md-6`}
                key={i}
                onClick={() => setLightbox(src)}
              >
                <img
                  src={src}
                  className="img-fluid rounded shadow gallery-img w-100"
                  alt={`Gallery ${i + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)',
            zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
          onClick={() => setLightbox(null)}
        >
          <img src={lightbox} alt="Gallery" style={{ maxHeight: '85vh', maxWidth: '90vw', borderRadius: 12 }} />
          <button
            style={{
              position: 'absolute', top: 20, right: 30, background: 'none',
              border: 'none', color: 'white', fontSize: 36, cursor: 'pointer',
            }}
            onClick={() => setLightbox(null)}
          >
            ×
          </button>
        </div>
      )}

      {/* Video Gallery */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="section-title text-center mb-5">
            <h2>Video Gallery</h2>
          </div>
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="ratio ratio-16x9 shadow rounded overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/jfKfPfyJRdk"
                  title="Campus Tour"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ratio ratio-16x9 shadow rounded overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/5qap5aO4i9A"
                  title="Student Life"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-5">
        <div className="container">
          <div className="row text-center">
            {[
              { stat: '500+', label: 'Campus Photos' },
              { stat: '100+', label: 'Events Conducted' },
              { stat: '10K+', label: 'Students' },
              { stat: '50+', label: 'Programs' },
            ].map(({ stat, label }) => (
              <div className="col-md-3" key={label}>
                <h2 className="text-primary">{stat}</h2>
                <p className="text-muted">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-5 bg-primary text-white text-center">
        <div className="container">
          <h2 className="text-white">Become Part of Our Community</h2>
          <p className="mb-4">Experience learning, innovation, and student success.</p>
          <Link to="/admissions" className="btn btn-light btn-lg fw-bold">Apply Now</Link>
        </div>
      </section>
    </>
  );
};

export default Gallery;
