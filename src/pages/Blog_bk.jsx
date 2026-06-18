import React from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';

const posts = [
  {
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800',
    category: 'Technology',
    categoryColor: 'primary',
    title: 'Top 10 Web Development Trends in 2025',
    excerpt: 'Explore the latest technologies and frameworks shaping the future of web development.',
    date: 'Jan 15, 2025',
    author: 'Dr. John Smith',
    readTime: '5 min read',
  },
  {
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    category: 'Data Science',
    categoryColor: 'success',
    title: 'How to Start a Career in Data Science',
    excerpt: 'A complete guide for beginners looking to break into the data science industry.',
    date: 'Feb 20, 2025',
    author: 'Dr. Sarah Johnson',
    readTime: '7 min read',
  },
  {
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    category: 'AI',
    categoryColor: 'danger',
    title: 'Understanding Large Language Models',
    excerpt: 'A beginner-friendly breakdown of how LLMs work and their real-world applications.',
    date: 'Mar 05, 2025',
    author: 'Prof. Michael Lee',
    readTime: '8 min read',
  },
  {
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    category: 'Marketing',
    categoryColor: 'warning',
    title: 'Digital Marketing Strategies That Work',
    excerpt: 'Proven strategies to grow your online presence and drive measurable results.',
    date: 'Apr 10, 2025',
    author: 'Prof. Emily Brown',
    readTime: '6 min read',
  },
  {
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800',
    category: 'Design',
    categoryColor: 'info',
    title: 'UI/UX Principles Every Designer Should Know',
    excerpt: 'Master the fundamental principles of user-centered design for better products.',
    date: 'May 01, 2025',
    author: 'Prof. Anita Sharma',
    readTime: '4 min read',
  },
  {
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
    category: 'Business',
    categoryColor: 'secondary',
    title: 'Entrepreneurship Lessons from Successful Startups',
    excerpt: 'Key insights and lessons that every aspiring entrepreneur should know.',
    date: 'Jun 12, 2025',
    author: 'Prof. Michael Lee',
    readTime: '9 min read',
  },
];

const Blog = () => {
  return (
    <>
      <PageBanner
        title="Our Blog"
        subtitle="Insights, guides, and stories from EduLearn's educators and industry experts."
      />

      {/* Blog Grid */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {posts.map(({ image, category, categoryColor, title, excerpt, date, author, readTime }) => (
              <div className="col-lg-4 col-md-6" key={title}>
                <div className="blog-card card h-100">
                  <img src={image} alt={title} />
                  <div className="card-body p-4 d-flex flex-column">
                    <span className={`badge bg-${categoryColor} mb-2`} style={{ width: 'fit-content' }}>
                      {category}
                    </span>
                    <h5>{title}</h5>
                    <p className="text-muted flex-grow-1">{excerpt}</p>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <small className="text-muted">
                        <i className="fas fa-user me-1"></i>{author}
                      </small>
                      <small className="text-muted">
                        <i className="fas fa-clock me-1"></i>{readTime}
                      </small>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-2">
                      <small className="text-muted">
                        <i className="fas fa-calendar me-1"></i>{date}
                      </small>
                      <a href="#" className="btn btn-sm btn-outline-primary">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <h2>Subscribe to Our Newsletter</h2>
              <p className="text-muted mb-4">Get the latest articles and resources delivered straight to your inbox.</p>
              <form className="d-flex gap-2" onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing!'); e.target.reset(); }}>
                <input type="email" className="form-control" placeholder="Enter your email" required />
                <button type="submit" className="btn btn-primary" style={{ whiteSpace: 'nowrap' }}>Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section text-center">
        <div className="container">
          <h2>Explore Our Courses</h2>
          <p>Turn your knowledge into action with our industry-leading programs.</p>
          <Link to="/courses" className="btn btn-light btn-lg fw-bold">View All Courses</Link>
        </div>
      </section>
    </>
  );
};

export default Blog;
