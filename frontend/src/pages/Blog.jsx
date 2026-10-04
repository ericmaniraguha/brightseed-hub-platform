import React from 'react';
import { ArrowRight, Calendar, Clock, Brain, BarChart, Shield, Code } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: "The Future of AI in Business Intelligence",
      excerpt: "Explore how artificial intelligence is reshaping the way companies analyze data and make strategic decisions.",
      date: "Mar 15, 2026",
      readTime: "5 min read",
      color: "linear-gradient(135deg, #007BFF, #00C853)",
      icon: <Brain size={32} />
    },
    {
      title: "Data-Driven Decision Making: A Complete Guide",
      excerpt: "Learn the fundamental principles and best practices of using data analytics to drive organizational outcomes.",
      date: "Mar 08, 2026",
      readTime: "7 min read",
      color: "linear-gradient(135deg, #8b5cf6, #ec4899)",
      icon: <BarChart size={32} />
    },
    {
      title: "Cybersecurity Trends to Watch in 2026",
      excerpt: "Stay ahead of emerging threats with our analysis of the most important cybersecurity developments this year.",
      date: "Feb 28, 2026",
      readTime: "6 min read",
      color: "linear-gradient(135deg, #f97316, #ef4444)",
      icon: <Shield size={32} />
    },
    {
      title: "Building Scalable Cloud-Native Applications",
      excerpt: "A technical deep-dive into modern architecture patterns for building applications that grow with your business.",
      date: "Feb 20, 2026",
      readTime: "8 min read",
      color: "linear-gradient(135deg, #06b6d4, #7c3aed)",
      icon: <Code size={32} />
    },
    {
      title: "Machine Learning in Healthcare: Real Case Studies",
      excerpt: "Discover how ML models are being deployed in clinical settings to improve patient outcomes and diagnostics.",
      date: "Feb 12, 2026",
      readTime: "6 min read",
      color: "linear-gradient(135deg, #22c55e, #0ea5e9)",
      icon: <Brain size={32} />
    },
    {
      title: "The Rise of Low-Code Platforms in Enterprise",
      excerpt: "Exploring how low-code solutions are empowering business users while maintaining IT governance standards.",
      date: "Feb 05, 2026",
      readTime: "4 min read",
      color: "linear-gradient(135deg, #eab308, #22c55e)",
      icon: <Code size={32} />
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Latest <span className="text-primary">Insights</span></h1>
          <p className="page-description">
            Stay updated with the latest trends in AI, data analytics, cybersecurity, and technology research.
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <section>
        <div className="container">
          <div className="blog-grid">
            {posts.map((post, idx) => (
              <div key={idx} className="blog-card">
                <div className="blog-image">
                  <div className="blog-image-placeholder" style={{ background: post.color }}>
                    {post.icon}
                  </div>
                </div>
                <div className="blog-body">
                  <div className="blog-meta">
                    <span className="blog-meta-item">
                      <Calendar size={14} /> {post.date}
                    </span>
                    <span className="blog-meta-item">
                      <Clock size={14} /> {post.readTime}
                    </span>
                  </div>
                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <a href="#" className="blog-link">
                    Read More <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
