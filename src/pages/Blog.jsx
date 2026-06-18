import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PageBanner from "../components/PageBanner";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/blogs"
      );

      setPosts(response.data.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <>
      <PageBanner
        title="Our Blog"
        subtitle="Insights, guides, and stories from EduLearn's educators and industry experts."
      />

      <section className="py-5">
        <div className="container">
          {loading ? (
            <div className="text-center">
              <h4>Loading blogs...</h4>
            </div>
          ) : (
            <div className="row g-4">
              {posts.map((post) => (
                <div className="col-lg-4 col-md-6" key={post._id}>
                  <div className="blog-card card h-100">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="card-img-top"
                      style={{
                        height: "250px",
                        objectFit: "cover",
                      }}
                    />

                    <div className="card-body p-4 d-flex flex-column">
                      <span
                        className="badge bg-primary mb-2"
                        style={{ width: "fit-content" }}
                      >
                        {post.category}
                      </span>

                      <h5>{post.title}</h5>

                      <p className="text-muted flex-grow-1">
                        {post.content.length > 100
                          ? `${post.content.substring(0, 100)}...`
                          : post.content}
                      </p>

                      <div className="d-flex justify-content-between align-items-center mt-3">
                        <small className="text-muted">
                          <i className="fas fa-user me-1"></i>
                          {post.author}
                        </small>

                        <small className="text-muted">
                          {post.tags?.length} Tags
                        </small>
                      </div>

                      <div className="d-flex justify-content-between align-items-center mt-2">
                        <small className="text-muted">
                          <i className="fas fa-calendar me-1"></i>
                          {formatDate(post.createdAt)}
                        </small>

                        <Link
                          to={`/blog/${post.slug}`}
                          className="btn btn-sm btn-outline-primary"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <h2>Subscribe to Our Newsletter</h2>
              <p className="text-muted mb-4">
                Get the latest articles and resources delivered straight to your
                inbox.
              </p>

              <form
                className="d-flex gap-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you for subscribing!");
                  e.target.reset();
                }}
              >
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  required
                />

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ whiteSpace: "nowrap" }}
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section text-center">
        <div className="container">
          <h2>Explore Our Courses</h2>
          <p>
            Turn your knowledge into action with our industry-leading programs.
          </p>

          <Link
            to="/courses"
            className="btn btn-light btn-lg fw-bold"
          >
            View All Courses
          </Link>
        </div>
      </section>
    </>
  );
};

export default Blog;