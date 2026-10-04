import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8003/api/v1/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        console.error('Failed to submit form');
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Get In <span className="text-primary">Touch</span></h1>
          <p className="page-description">
            Have a project in mind or want to learn more about our services? We'd love to hear from you.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Sidebar */}
            <div className="contact-sidebar">
              <div className="contact-info-card glass">
                <h3>Contact Information</h3>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <div className="contact-info-label">Our Location</div>
                    <div className="contact-info-value">Kigali, Rwanda</div>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <Phone size={22} />
                  </div>
                  <div>
                    <div className="contact-info-label">Phone Number</div>
                    <div className="contact-info-value">+250 788 746 696</div>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <Mail size={22} />
                  </div>
                  <div>
                    <div className="contact-info-label">Email Address</div>
                    <div className="contact-info-value">info@brightseedhub.com</div>
                  </div>
                </div>
              </div>

              <div className="hours-card">
                <h3>Working Hours</h3>
                <div className="hours-list">
                  <div className="hours-item">
                    <span>Mon - Fri:</span><span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span>Saturday:</span><span>10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="hours-item closed">
                    <span>Sunday:</span><span>Closed</span>
                  </div>
                </div>
                <div className="hours-bg-icon">
                  <MessageSquare size={120} />
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="contact-form-wrapper">
              {submitted ? (
                <div className="contact-success">
                  <div className="contact-success-icon">
                    <CheckCircle size={80} />
                  </div>
                  <h2>Message Sent!</h2>
                  <p>Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                  <button onClick={() => setSubmitted(false)} className="btn btn-outline">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="form-input"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Project Inquiry"
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Your Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      placeholder="Tell us about your project..."
                      className="form-input"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary btn-full btn-lg">
                    Send Message <Send size={20} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
