import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  useEffect(() => { 
    document.title = '404 — Page Not Found | VitaConnect'; 
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-enter" style={{ paddingTop: 'var(--navbar-height)' }}>
      <div className="container d-flex flex-column align-items-center justify-content-center text-center" style={{ minHeight: '70vh' }}>
        <div style={{
          width: 120, height: 120, borderRadius: '50%',
          background: 'var(--primary-light)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 28,
        }}>
          <i className="bi bi-emoji-frown" style={{ fontSize: '3rem', color: 'var(--primary)' }}></i>
        </div>
        <h1 style={{ fontWeight: 800, fontSize: '4rem', color: 'var(--primary)', marginBottom: 8 }}>404</h1>
        <h3 style={{ fontWeight: 600, marginBottom: 12 }}>Page Not Found</h3>
        <p style={{ color: 'var(--text-secondary)', maxWidth: 400, margin: '0 auto 28px', fontSize: '1rem' }}>
          The page you're looking for doesn't exist. Let's get you back on track!
        </p>
        <div className="d-flex gap-3 flex-wrap justify-content-center">
          <Link to="/" className="btn btn-primary-custom btn-lg btn-animate"><i className="bi bi-house me-2"></i>Go to Home</Link>
          <Link to="/services" className="btn btn-outline-custom btn-lg btn-animate"><i className="bi bi-grid me-2"></i>Browse Services</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;