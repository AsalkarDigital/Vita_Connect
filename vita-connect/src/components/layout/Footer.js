import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_EMAIL, CONTACT_PHONE, APP_TAGLINE_MARATHI } from '../../utils/constants';
import { generateWhatsAppLink } from '../../utils/whatsapp';
import './Footer.css';
import centerLogo from './center-logo.png';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="vc-footer" role="contentinfo">
      {/* Top Wave */}
      <div className="vc-footer-wave">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z" fill="#2D3436"/>
        </svg>
      </div>

      <div className="vc-footer-body">
        <div className="container">
          <div className="row g-4 py-5">
            <div className="col-lg-4 col-md-6">
              <Link to="/" className="vc-footer-brand">
                <div className="vc-footer-brand-icon" style={{ background: 'transparent', width: '38px', height: '38px' }}>
                  <img src={centerLogo} alt="VitaConnect" style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '3px' }} />
                </div>
                <span>Vita<span className="highlight">Connect</span></span>
              </Link>
              <p className="vc-footer-desc mt-3">
                Your trusted local service directory for Vita, Maharashtra.
                Find verified providers and connect via WhatsApp — instantly.
              </p>
              <p className="vc-footer-marathi">{APP_TAGLINE_MARATHI}</p>
              <div className="vc-footer-social mt-3">
                {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
                 */}
                <a href="https://www.instagram.com/asalkardigital/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
                {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i className="bi bi-twitter-x"></i></a>
                 */}
                <a href={generateWhatsAppLink(9766761763, 'Hi VitaConnect!')} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <i className="bi bi-whatsapp"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 col-6">
              <h6 className="vc-footer-heading">Quick Links</h6>
              <ul className="vc-footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 col-6">
              <h6 className="vc-footer-heading">Popular Categories</h6>
              <ul className="vc-footer-links">
                <li><Link to="/services?category=Plumber">Plumber</Link></li>
                <li><Link to="/services?category=Electrician">Electrician</Link></li>
                <li><Link to="/services?category=Doctor">Doctor</Link></li>
                <li><Link to="/services?category=Carpenter">Carpenter</Link></li>
                <li><Link to="/services?category=Catering">Catering</Link></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6">
              <h6 className="vc-footer-heading">Contact Us</h6>
              <ul className="vc-footer-contact">
                <li>
                  <i className="bi bi-geo-alt"></i>
                  <span>Vita, Sangli District,<br />Maharashtra 415311</span>
                </li>
                <li>
                  <i className="bi bi-envelope"></i>
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                </li>
                <li>
                  <i className="bi bi-whatsapp"></i>
                  <a href={generateWhatsAppLink(CONTACT_PHONE, 'Hi VitaConnect!')} target="_blank" rel="noopener noreferrer">
                    +91 9766761763
                  </a>
                </li>
              </ul>
            </div> 
          </div>

          <div className="vc-footer-bottom">
            <p>&copy; {year} VitaConnect. Vita, Sangli Maharashtra. </p>
            <p>Built for Growth. Built by <a href='https://sumitasalkar.vercel.app/' target="_blank" rel="noopener noreferrer">Asalkar Digital</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;