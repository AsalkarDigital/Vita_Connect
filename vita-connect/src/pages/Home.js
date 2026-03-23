import React, { useEffect } from 'react';
import HeroSection from '../components/sections/HeroSection';
import CategoriesSection from '../components/sections/CategoriesSection';
import FeaturedSection from '../components/sections/FeaturedSection';
import StatsSection from '../components/sections/StatsSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import CTASection from '../components/sections/CTASection';
import useScrollAnimation from '../hooks/useScrollAnimation';

const HowItWorks = () => {
  const ref = useScrollAnimation();

  const steps = [
    { icon: 'bi-search', title: 'Search', desc: 'Find the service you need from 12+ categories', color: '#3B82F6', bg: '#EBF5FF' },
    { icon: 'bi-person-check-fill', title: 'Choose', desc: 'Browse verified providers with ratings & reviews', color: '#00897B', bg: '#E0F2F1' },
    { icon: 'bi-whatsapp', title: 'Connect', desc: 'Contact directly on WhatsApp — no middlemen', color: '#25D366', bg: '#E8F5E9' },
  ];

  return (
    <section className="section-padding" style={{ background: 'var(--bg-warm)' }} ref={ref}>
      <div className="container">
        <div className="text-center mb-5 fade-in-up">
          <h2 className="fw-bold section-title-underline">How It Works</h2>
          <p className="mt-3" style={{ color: 'var(--text-secondary)', fontSize: '1.02rem' }}>
            Three simple steps to find and connect with local service providers
          </p>
        </div>

        <div className="row g-4 justify-content-center stagger-children">
          {steps.map((step, i) => (
            <div key={i} className="col-12 col-md-4 fade-in-up">
              <div className="text-center px-3">
                {/* Step number + icon */}
                <div style={{ position: 'relative', display: 'inline-block', marginBottom: 22 }}>
                  <div style={{
                    width: 80, height: 80, borderRadius: '50%',
                    background: step.bg,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <i className={`bi ${step.icon}`} style={{ fontSize: '1.8rem', color: step.color }}></i>
                  </div>
                  <span style={{
                    position: 'absolute', top: -6, right: -6,
                    width: 28, height: 28, borderRadius: '50%',
                    background: 'var(--primary)', color: '#fff',
                    fontWeight: 700, fontSize: '0.78rem',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: "'Inter', sans-serif",
                    boxShadow: '0 2px 8px rgba(var(--primary-rgb), 0.3)',
                  }}>
                    {i + 1}
                  </span>
                </div>
                <h5 style={{ fontWeight: 600 }}>{step.title}</h5>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>{step.desc}</p>

                {/* Connecting arrow (not after last) */}
                {i < steps.length - 1 && (
                  <div className="d-none d-md-block" style={{
                    position: 'absolute', top: '50%', right: '-14%',
                    color: 'var(--text-light)', fontSize: '1.5rem',
                    transform: 'translateY(-50%)',
                  }}>
                    <i className="bi bi-arrow-right"></i>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  useEffect(() => {
    document.title = 'VitaConnect — Find Local Services in Vita, Maharashtra';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-enter">
      <HeroSection />
      <CategoriesSection />
      <HowItWorks />
      <FeaturedSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default Home;