import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/ui/SectionHeader';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { APP_TAGLINE_MARATHI } from '../utils/constants';

const About = () => {
  const ref = useScrollAnimation();
  useEffect(() => { 
    document.title = 'About Us — VitaConnect'; 
    window.scrollTo(0, 0);
  }, []);

  const values = [
    { icon: 'bi-shield-check', title: 'Trust', desc: 'We verify providers so you can trust every listing on our platform.', color: '#28A745', bg: '#E8F5E9' },
    { icon: 'bi-phone', title: 'Simplicity', desc: 'No login, no OTP, no hassle. Just search, find, and WhatsApp.', color: '#3B82F6', bg: '#EBF5FF' },
    { icon: 'bi-people', title: 'Community', desc: 'Built for Vita, by people who understand small-town needs.', color: '#FF6B35', bg: '#FFF3ED' },
    { icon: 'bi-stars', title: 'Quality', desc: 'We showcase only professional and experienced service providers.', color: '#8B5CF6', bg: '#F3E8FF' },
  ];

  return (
    <div className="page-enter" ref={ref}>
      <section style={{ background: 'var(--bg-warm)', padding: '110px 0 36px', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <nav aria-label="breadcrumb" className="mb-2">
            <ol className="breadcrumb mb-0" style={{ fontSize: '0.85rem' }}>
              <li className="breadcrumb-item"><Link to="/" style={{ color: 'var(--text-muted)' }}>Home</Link></li>
              <li className="breadcrumb-item active" style={{ color: 'var(--primary)' }}>About</li>
            </ol>
          </nav>
          <h1 style={{ fontWeight: 700 }}>About VitaConnect</h1>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 0, fontStyle: 'italic' }}>{APP_TAGLINE_MARATHI}</p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 fade-in-up">
              <span className="badge-category" style={{ display: 'inline-block', marginBottom: 14 }}>Our Story</span>
              <h2 className="fw-bold mb-3">Connecting Vita, One Service at a Time</h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.94rem' }}>
                VitaConnect was born from a simple observation — in small towns like Vita,
                finding a reliable plumber, electrician, or doctor often means asking
                neighbors or relatives for phone numbers.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.94rem' }}>
                We built a modern, easy-to-use platform where every resident can instantly
                discover trusted local service providers and contact them directly via
                WhatsApp. No middlemen, no fees, no complicated sign-ups.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.94rem' }}>
                Our mission is to digitally empower every local service provider in Vita,
                giving them visibility and connecting them with customers who need their services.
              </p>
            </div>
            <div className="col-lg-6 fade-in-up">
              <div style={{ background: 'linear-gradient(135deg, var(--primary-light), #FFF8E1)', borderRadius: 'var(--radius-xl)', padding: '48px', textAlign: 'center' }}>
                <div style={{
                  width: 90, height: 90, borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 18px', color: '#fff', fontSize: '2.2rem',
                  boxShadow: '0 8px 24px rgba(var(--primary-rgb), 0.3)',
                }}>
                  <i className="bi bi-geo-alt-fill"></i>
                </div>
                <h3 style={{ fontWeight: 700 }}>Vita<span style={{ color: 'var(--primary)' }}>Connect</span></h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: 26 }}>Your Trusted Local Service Directory</p>
                <div className="d-flex justify-content-center gap-4 flex-wrap" style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  <div><strong style={{ color: 'var(--primary)', fontSize: '1.5rem', display: 'block', fontFamily: "'Inter', sans-serif" }}>120+</strong>Providers</div>
                  <div><strong style={{ color: 'var(--primary)', fontSize: '1.5rem', display: 'block', fontFamily: "'Inter', sans-serif" }}>12</strong>Categories</div>
                  <div><strong style={{ color: 'var(--primary)', fontSize: '1.5rem', display: 'block', fontFamily: "'Inter', sans-serif" }}>500+</strong>Users</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding" style={{ background: 'var(--bg-warm)' }}>
        <div className="container">
          <div className="fade-in-up"><SectionHeader title="Our Values" subtitle="The principles that guide everything we do" /></div>
          <div className="row g-4 stagger-children">
            {values.map((v, i) => (
              <div key={i} className="col-12 col-md-6 col-lg-3 fade-in-up">
                <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '28px 22px', textAlign: 'center', height: '100%', boxShadow: 'var(--shadow-sm)' }}>
                  <div style={{ width: 56, height: 56, borderRadius: 'var(--radius-lg)', background: v.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                    <i className={`bi ${v.icon}`} style={{ fontSize: '1.4rem', color: v.color }}></i>
                  </div>
                  <h5 style={{ fontWeight: 600 }}>{v.title}</h5>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: 0, lineHeight: 1.6 }}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding text-center">
        <div className="container fade-in-up">
          <h2 className="fw-bold mb-3">Ready to explore?</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: 480, margin: '0 auto 24px' }}>
            Browse our service categories or list your own service on VitaConnect today.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link to="/services" className="btn btn-primary-custom btn-lg btn-animate"><i className="bi bi-grid me-2"></i>Browse Services</Link>
            <Link to="/contact" className="btn btn-outline-custom btn-lg btn-animate"><i className="bi bi-plus-circle me-2"></i>List Your Service</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;