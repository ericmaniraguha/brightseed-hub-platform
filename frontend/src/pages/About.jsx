import React from 'react';
import { Target, Eye, Lightbulb, Heart, Award, Zap, Users } from 'lucide-react';

const About = () => {
  return (
    <div>
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">About <span className="text-primary">BrightSeed Hub</span></h1>
          <p className="page-description">
            We are a leading IT solutions and research firm dedicated to bridging the gap between innovation and practical application.
          </p>
        </div>
      </div>

      {/* About Content */}
      <section className="about-section">
        <div className="container">
          {/* Mission & Vision */}
          <div className="about-grid">
            <div className="about-text">
              <h2>Our <span className="text-primary">Mission</span></h2>
              <p>
                At BrightSeed Hub Ltd, our mission is to empower businesses and organizations through
                innovative technology solutions. We combine cutting-edge AI, data analytics, and software
                engineering to transform how companies operate and grow.
              </p>
              <p>
                Founded with a vision to make advanced technology accessible, we work alongside our clients
                to understand their unique challenges and deliver tailored solutions that drive measurable results.
              </p>
            </div>
            <div className="about-image">
              <Target size={120} color="var(--primary)" strokeWidth={1} />
            </div>
          </div>

          <div className="about-grid">
            <div className="about-image">
              <Eye size={120} color="var(--secondary)" strokeWidth={1} />
            </div>
            <div className="about-text">
              <h2>Our <span className="text-primary">Vision</span></h2>
              <p>
                We envision a future where every business, regardless of size, can leverage the power of
                artificial intelligence and data-driven insights to make smarter decisions and achieve
                sustainable growth.
              </p>
              <p>
                Through continuous research and innovation, we strive to remain at the forefront of
                emerging technologies, ensuring our partners always have access to the most effective
                tools and strategies available.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="section-header" style={{ marginTop: '4rem' }}>
            <h2 className="section-title">Our Core <span className="text-primary">Values</span></h2>
            <p className="section-subtitle">The principles that guide everything we do.</p>
          </div>

          <div className="values-grid">
            {[
              { icon: <Lightbulb size={28} />, title: "Innovation", desc: "We constantly push boundaries to find creative solutions for complex challenges." },
              { icon: <Heart size={28} />, title: "Integrity", desc: "We maintain the highest standards of honesty and transparency in all our dealings." },
              { icon: <Award size={28} />, title: "Excellence", desc: "We deliver nothing less than exceptional quality in every project we undertake." },
              { icon: <Users size={28} />, title: "Collaboration", desc: "We believe the best results come from working together with our clients as partners." },
              { icon: <Zap size={28} />, title: "Agility", desc: "We adapt quickly to changing needs and emerging technologies to stay ahead." },
              { icon: <Target size={28} />, title: "Impact", desc: "We measure our success by the tangible results and value we create for clients." },
            ].map((value, idx) => (
              <div key={idx} className="value-card">
                <div className="value-card-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
              </div>
            ))}
          </div>

          {/* Team Section */}
          <div className="team-section">
            <div className="section-header">
              <h2 className="section-title">Meet Our <span className="text-primary">Team</span></h2>
              <p className="section-subtitle">The brilliant minds behind BrightSeed Hub.</p>
            </div>

            <div className="team-grid">
              {[
                { name: "Alex Johnson", role: "CEO & Founder", initials: "AJ", image: "", linkedin: "#", twitter: "#" },
                { name: "Sarah Chen", role: "CTO", initials: "SC", image: "", linkedin: "#", twitter: "#" },
                { name: "David Okeke", role: "Lead Data Scientist", initials: "DO", image: "", linkedin: "#", twitter: "#" },
                { name: "Maria Santos", role: "Head of Design", initials: "MS", image: "", linkedin: "#", twitter: "#" },
              ].map((member, idx) => (
                <div key={idx} className="team-card">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="team-avatar-img" />
                  ) : (
                    <div className="team-avatar">{member.initials}</div>
                  )}
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <div className="team-socials" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="social-link" style={{ color: 'var(--text-light)', transition: 'color 0.3s' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                    <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="social-link" style={{ color: 'var(--text-light)', transition: 'color 0.3s' }}>
                       <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
