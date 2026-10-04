import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, BarChart, Code, Shield, Users, Trophy } from 'lucide-react';
import heroBg from '../assets/hero-bg.png';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <img src={heroBg} alt="Hero Background" />
          <div className="hero-bg-overlay"></div>
        </div>

        <div className="container hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <Zap size={16} />
              <span>Next Gen IT Solutions</span>
            </div>
            <h1 className="hero-title">
              Innovating Future with <span className="gradient-text">Precision & AI</span>
            </h1>
            <p className="hero-description">
              Empowering businesses through advanced data analytics, research-driven innovation, and cutting-edge software solutions.
            </p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Let's Collaborate <ArrowRight size={20} />
              </Link>
              <Link to="/services" className="btn btn-outline btn-lg">
                Explore Services
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-cards glass">
              <div className="hero-cards-grid">
                {[
                  { icon: <BarChart size={32} />, title: "Data Insights", colorClass: "blue" },
                  { icon: <Code size={32} />, title: "Custom Dev", colorClass: "green" },
                  { icon: <Shield size={32} />, title: "Secure Systems", colorClass: "purple" },
                  { icon: <Users size={32} />, title: "Expert Team", colorClass: "orange" }
                ].map((item, idx) => (
                  <div key={idx} className="hero-card-item">
                    <div className={`hero-card-icon ${item.colorClass}`}>
                      {item.icon}
                    </div>
                    <span className="hero-card-label">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="hero-glow hero-glow-1"></div>
            <div className="hero-glow hero-glow-2"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {[
              { count: "150+", label: "Projects Completed", icon: <Trophy size={40} /> },
              { count: "50+", label: "Global Clients", icon: <Users size={40} /> },
              { count: "99%", label: "Satisfaction Rate", icon: <Zap size={40} /> },
              { count: "24/7", label: "Expert Support", icon: <Shield size={40} /> }
            ].map((stat, idx) => (
              <div key={idx} className="stat-item">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.count}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Comprehensive <span className="text-primary">Solutions</span></h2>
            <p className="section-subtitle">We combine technical expertise with strategic vision to deliver exceptional digital experiences.</p>
          </div>

          <div className="services-grid">
            <ServiceCard
              icon={<BarChart size={40} />}
              title="AI & Data Analytics"
              description="Transforming raw data into actionable business intelligence using state-of-the-art machine learning models."
            />
            <ServiceCard
              icon={<Code size={40} />}
              title="Software Development"
              description="Building scalable, high-performance web and mobile applications tailored to your specific business needs."
            />
            <ServiceCard
              icon={<Zap size={40} />}
              title="Research & Innovation"
              description="Pushing boundaries with R&D in emerging technologies to keep your business ahead of the curve."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const ServiceCard = ({ icon, title, description }) => (
  <div className="service-card">
    <div className="service-card-icon">
      {icon}
    </div>
    <h3 className="service-card-title">{title}</h3>
    <p className="service-card-desc">{description}</p>
    <Link to="/services" className="service-card-link">
      Learn More <ArrowRight size={18} />
    </Link>
  </div>
);

export default Home;
