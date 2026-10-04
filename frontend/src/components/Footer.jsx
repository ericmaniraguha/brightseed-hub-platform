import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Globe, Share2, Users, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Section */}
          <div>
            <Link to="/" className="footer-brand">
              <div className="footer-brand-icon">
                <Rocket size={22} />
              </div>
              <span className="footer-brand-text">
                BrightSeed<span className="text-primary">Hub</span>
              </span>
            </Link>
            <p className="footer-description">
              Bridging the gap between research and innovation. We provide cutting-edge IT solutions and AI-driven insights for modern businesses.
            </p>
            <div className="footer-socials">
              <a href="#" className="footer-social-link"><Globe size={20} /></a>
              <a href="#" className="footer-social-link"><Share2 size={20} /></a>
              <a href="#" className="footer-social-link"><Users size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-heading">Quick Links</h4>
            <div className="footer-links">
              <Link to="/about" className="footer-link">About Us</Link>
              <Link to="/services" className="footer-link">Our Services</Link>
              <Link to="/projects" className="footer-link">Case Studies</Link>
              <Link to="/blog" className="footer-link">Latest News</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="footer-heading">Contact Us</h4>
            <div className="footer-contact-item">
              <MapPin size={18} className="footer-contact-icon" />
              <span>Kigali, Rwanda</span>
            </div>
            <div className="footer-contact-item">
              <Phone size={18} className="footer-contact-icon" />
              <span>+250 788-746-696</span>
            </div>
            <div className="footer-contact-item">
              <Mail size={18} className="footer-contact-icon" />
              <span>info@brightseedhub.com</span>
            </div>
          </div>

          {/* Newsletter */}
          <div className="footer-newsletter">
            <h4 className="footer-heading">Newsletter</h4>
            <p>Stay updated with our latest insights and innovations.</p>
            <div className="footer-newsletter-form">
              <input
                type="email"
                placeholder="Your email"
                className="footer-newsletter-input"
              />
              <button className="footer-newsletter-btn">Submit</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} BrightSeed Hub Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
