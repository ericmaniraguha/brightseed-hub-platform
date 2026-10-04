import React, { useState, useEffect } from 'react';
import { Briefcase, MapPin, Clock } from 'lucide-react';

const Career = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch('http://localhost:8003/api/v1/careers');
        const data = await res.json();
        if (data.success) {
          setJobs(data.data.filter(job => job.status === 'open'));
        }
      } catch (error) {
        console.error('Failed to fetch jobs', error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return (
    <div>
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Join Our <span className="text-primary">Team</span></h1>
          <p className="page-description">
            Build the future with us. We are always looking for passionate individuals to join our growing team.
          </p>
        </div>
      </div>

      {/* Career Content */}
      <section className="section" style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Open <span className="text-primary">Positions</span></h2>
            <p className="section-subtitle">Find your next opportunity at BrightSeed Hub.</p>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem' }}>
            {loading ? (
              <p style={{ textAlign: 'center', color: 'var(--text-light)', padding: '2rem' }}>Loading open positions...</p>
            ) : jobs.length === 0 ? (
              <div className="glass" style={{ padding: '3rem 2rem', textAlign: 'center', borderRadius: '1rem' }}>
                <h3 style={{ marginBottom: '1rem' }}>No open positions right now</h3>
                <p style={{ color: 'var(--text-light)' }}>Check back later or follow us on our social media for updates.</p>
              </div>
            ) : (
              jobs.map((job, idx) => (
                <div key={job.id || idx} className="glass" style={{ padding: '2rem', borderRadius: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', transition: 'all 0.3s' }}>
                  <div>
                    <h3 style={{ marginBottom: '0.5rem' }}>{job.title}</h3>
                    <div style={{ display: 'flex', gap: '1.5rem', color: 'var(--text-light)', fontSize: '0.9rem' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><MapPin size={16} /> {job.location}</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Clock size={16} /> {job.type}</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Briefcase size={16} /> {job.department}</span>
                    </div>
                  </div>
                  <button className="btn btn-primary">Apply Now</button>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;
