import React from 'react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const CTASection = () => {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} style={{ background: 'var(--bg-warm)', padding: '80px 0' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9 fade-in-up">
            <div
              style={{
                background: 'linear-gradient(135deg, var(--primary), #E8552D)',
                borderRadius: 'var(--radius-xl)',
                padding: '52px 40px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 12px 40px rgba(var(--primary-rgb), 0.25)',
              }}
            >
              {/* Decorative circles */}
              <div style={{ position: 'absolute', top: -40, right: -40, width: 200, height: 200, borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }}></div>
              <div style={{ position: 'absolute', bottom: -30, left: -30, width: 150, height: 150, borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }}></div>

              <div style={{ position: 'relative', zIndex: 1 }}>
                <span style={{
                  display: 'inline-block', background: 'rgba(255,255,255,0.2)',
                  padding: '6px 18px', borderRadius: 'var(--radius-full)',
                  color: '#fff', fontSize: '0.85rem', fontWeight: 500, marginBottom: 18,
                }}>
                  📢 For Service Providers
                </span>
                <h2 style={{ color: '#fff', fontWeight: 700, fontSize: '2rem', marginBottom: 14 }}>
                  Are you a service provider in Vita?
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', marginBottom: 28, maxWidth: 480, margin: '0 auto 28px' }}>
                  Get listed on VitaConnect and reach hundreds of customers. It's <strong>completely free</strong>!
                </p>
                <div className="d-flex justify-content-center gap-3 flex-wrap">
                  <Link to="/contact" className="btn btn-lg btn-animate"
                    style={{ background: '#fff', color: 'var(--primary)', fontWeight: 600, padding: '14px 36px', borderRadius: 'var(--radius-md)', fontFamily: "'Inter', sans-serif", border: 'none' }}>
                    <i className="bi bi-plus-circle me-2"></i>Register Now — Free
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;