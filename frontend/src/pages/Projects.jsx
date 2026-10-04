import React from 'react';
import { BarChart, Code, Brain, Shield, Zap, Database } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "HealthPulse AI",
      category: "AI & Healthcare",
      desc: "An AI-powered diagnostic platform that helps clinicians identify early-stage diseases using patient data analytics.",
      color: "linear-gradient(135deg, #007BFF, #00C853)",
      icon: <Brain size={40} />
    },
    {
      title: "FinSight Dashboard",
      category: "Data Analytics",
      desc: "A real-time financial analytics dashboard providing actionable insights for investment portfolio management.",
      color: "linear-gradient(135deg, #8b5cf6, #ec4899)",
      icon: <BarChart size={40} />
    },
    {
      title: "AgroTrack System",
      category: "IoT & Agriculture",
      desc: "Smart farming solution using IoT sensors and ML models to optimize crop yield and resource management.",
      color: "linear-gradient(135deg, #22c55e, #0ea5e9)",
      icon: <Database size={40} />
    },
    {
      title: "SecureVault Pro",
      category: "Cybersecurity",
      desc: "Enterprise-grade security platform with real-time threat monitoring, incident response, and compliance automation.",
      color: "linear-gradient(135deg, #f97316, #ef4444)",
      icon: <Shield size={40} />
    },
    {
      title: "EduStream Platform",
      category: "EdTech",
      desc: "Interactive e-learning platform with AI-personalized learning paths, live collaboration, and analytics tracking.",
      color: "linear-gradient(135deg, #06b6d4, #7c3aed)",
      icon: <Code size={40} />
    },
    {
      title: "SmartGrid Energy",
      category: "Energy & IoT",
      desc: "Intelligent energy management system optimizing power distribution and consumption across urban infrastructure.",
      color: "linear-gradient(135deg, #eab308, #22c55e)",
      icon: <Zap size={40} />
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Case <span className="text-primary">Studies</span></h1>
          <p className="page-description">
            Explore our portfolio of successful projects and see how we've helped organizations achieve their goals through technology.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <section>
        <div className="container">
          <div className="projects-grid">
            {projects.map((project, idx) => (
              <div key={idx} className="project-card">
                <div className="project-image">
                  <div className="project-image-placeholder" style={{ background: project.color }}>
                    {project.icon}
                  </div>
                </div>
                <div className="project-body">
                  <span className="project-category">{project.category}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
