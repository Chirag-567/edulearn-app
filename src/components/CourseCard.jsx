import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ image, badge, badgeColor, title, description, duration, rating, price }) => {
  return (
    <div className="course-card card h-100">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body d-flex flex-column">
        <span className={`badge bg-${badgeColor} mb-2`} style={{ width: 'fit-content' }}>
          {badge}
        </span>
        <h5>{title}</h5>
        <p className="text-muted flex-grow-1">{description}</p>
        <div className="d-flex justify-content-between mb-3">
          <small><i className="fas fa-clock me-1"></i>{duration}</small>
          <small><i className="fas fa-star text-warning me-1"></i>{rating}</small>
        </div>
        <h4 className="text-primary mb-3">₹{price}</h4>
        <Link to="/course-details" className="btn btn-primary w-100">
          Enroll Now
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
