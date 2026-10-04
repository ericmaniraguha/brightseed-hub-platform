import React from 'react';
import { BookOpen, FileText, FlaskConical, Target } from 'lucide-react';

const Research = () => {
  const researchAreas = [
    {
      title: "Artificial Intelligence in Healthcare",
      description: "Exploring new machine learning models to predict patient outcomes and optimize treatment plans.",
      icon: <FlaskConical size={32} />
    },
    {
      title: "Sustainable Tech Infrastructure",
      description: "Developing energy-efficient cloud architectures for large-scale data processing.",
      icon: <Target size={32} />
    },
    {
      title: "Advanced Data Analytics",
      description: "Creating novel algorithms for real-time processing of unstructured data streams.",
      icon: <FileText size={32} />
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Our <span className="text-primary">Research</span></h1>
          <p className="page-description">
            Pushing the boundaries of technology to create tomorrow's solutions today.
          </p>
        </div>
      </div>

      {/* Research Content */}
      <section className="section" style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Current <span className="text-primary">Initiatives</span></h2>
            <p className="section-subtitle">Discover what our R&D team is working on.</p>
          </div>
          
          <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
            {researchAreas.map((area, idx) => (
              <div key={idx} className="glass" style={{ padding: '2rem', borderRadius: '1rem', transition: 'transform 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <div style={{ color: 'var(--primary)', marginBottom: '1rem' }}>
                  {area.icon}
                </div>
                <h3 style={{ marginBottom: '1rem' }}>{area.title}</h3>
                <p style={{ color: 'var(--text-light)' }}>{area.description}</p>
                <button className="btn btn-outline" style={{ marginTop: '1.5rem', width: '100%' }}>Read More</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;
