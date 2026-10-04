import React from 'react';

const Team = () => {
  const teamMembers = [
    { 
      name: "Alex Johnson", 
      role: "CEO & Founder", 
      initials: "AJ",
      image: "", // You can add image URLs here later
      linkedin: "#",
      twitter: "#"
    },
    { 
      name: "Sarah Chen", 
      role: "CTO", 
      initials: "SC",
      image: "",
      linkedin: "#",
      twitter: "#"
    },
    { 
      name: "David Okeke", 
      role: "Lead Data Scientist", 
      initials: "DO",
      image: "",
      linkedin: "#",
      twitter: "#"
    },
    { 
      name: "Maria Santos", 
      role: "Head of Design", 
      initials: "MS",
      image: "",
      linkedin: "#",
      twitter: "#"
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Meet Our <span className="text-primary">Team</span></h1>
          <p className="page-description">
            The brilliant minds behind BrightSeed Hub.
          </p>
        </div>
      </div>

      {/* Team Content */}
      <section className="team-section" style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className="team-grid">
            {teamMembers.map((member, idx) => (
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
      </section>
    </div>
  );
};

export default Team;
