import React from 'react';
import { BarChart, Code, Zap, Shield, Database, Monitor, Brain, Cloud } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Brain size={36} />,
      title: "AI & Machine Learning",
      desc: "Build intelligent systems that learn and adapt. From predictive models to natural language processing, we bring AI to your business.",
      features: ["Custom ML Models", "NLP Solutions", "Computer Vision", "AI Consulting"]
    },
    {
      icon: <BarChart size={36} />,
      title: "Data Analytics & BI",
      desc: "Transform raw data into actionable insights. Our analytics solutions help you make informed decisions with confidence.",
      features: ["Data Visualization", "Predictive Analytics", "Real-time Dashboards", "Data Strategy"]
    },
    {
      icon: <Code size={36} />,
      title: "Software Development",
      desc: "Custom-built applications designed for performance and scale. From web platforms to mobile apps, we build it right.",
      features: ["Web Applications", "Mobile Apps", "API Development", "System Integration"]
    },
    {
      icon: <Cloud size={36} />,
      title: "Cloud Solutions",
      desc: "Migrate, manage, and optimize your cloud infrastructure. We ensure reliability, security, and cost-efficiency.",
      features: ["Cloud Migration", "DevOps & CI/CD", "Serverless Architecture", "Multi-cloud Strategy"]
    },
    {
      icon: <Shield size={36} />,
      title: "Cybersecurity",
      desc: "Protect your digital assets with enterprise-grade security solutions. Stay safe from evolving cyber threats.",
      features: ["Security Audits", "Penetration Testing", "Compliance Solutions", "Incident Response"]
    },
    {
      icon: <Zap size={36} />,
      title: "Research & Innovation",
      desc: "Stay ahead with cutting-edge R&D. We explore emerging technologies and translate research into real-world applications.",
      features: ["Technology Research", "Proof of Concept", "Innovation Strategy", "Academic Partnerships"]
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Our <span className="text-primary">Services</span></h1>
          <p className="page-description">
            We offer comprehensive IT solutions, AI development, data analytics, and custom software engineering to help your business thrive.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <section>
        <div className="container">
          <div className="services-detail-grid">
            {services.map((service, idx) => (
              <div key={idx} className="service-detail-card">
                <div className="service-detail-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <div className="service-features">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="service-feature">
                      <div className="service-feature-dot"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
