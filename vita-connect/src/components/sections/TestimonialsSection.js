import React from 'react';
import { testimonials } from '../../data/testimonials';
import SectionHeader from '../ui/SectionHeader';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const renderStars = (rating) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <i key={i} className={`bi ${i < rating ? 'bi-star-fill' : 'bi-star'}`}
        style={{ color: i < rating ? '#FFB800' : '#DDD', fontSize: '0.88rem' }}></i>
    );
  }
  return stars;
};

const TestimonialsSection = () => {
  const ref = useScrollAnimation();

  return (
    <section className="section-padding" style={{ background: 'var(--bg-white)' }} ref={ref}>
      <div className="container">
        <div className="fade-in-up">
          <SectionHeader
            title="What Our Users Say"
            subtitle="Real feedback from Vita residents who found services through VitaConnect"
          />
        </div>
        <div className="row g-4 stagger-children justify-content-center">
          {testimonials.map((t) => (
            <div key={t.id} className="col-12 col-md-6 col-lg-4 fade-in-up">
              <div
                style={{
                  background: '#fff',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '28px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: 'var(--shadow-sm)',
                  position: 'relative',
                }}
              >
                {/* Quote mark */}
                <div style={{
                  position: 'absolute', top: 16, right: 20,
                  fontSize: '3rem', color: 'var(--primary-light)',
                  fontFamily: 'Georgia, serif', lineHeight: 1,
                }}>
                  "
                </div>

                <div className="d-flex gap-1 mb-3">{renderStars(t.rating)}</div>

                <p style={{ fontSize: '0.93rem', color: 'var(--text-secondary)', lineHeight: 1.7, flex: 1 }}>
                  {t.text}
                </p>

                <div className="d-flex align-items-center gap-12 mt-3 pt-3" style={{ borderTop: '1px solid var(--border-light)' }}>
                  <img
                    src={t.image} alt={t.name} loading="lazy"
                    style={{ width: 44, height: 44, borderRadius: '50%', objectFit: 'cover', marginRight: 12 }}
                  />
                  <div>
                    <h6 className="mb-0" style={{ fontSize: '0.92rem', fontWeight: 600 }}>{t.name}</h6>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                      <i className="bi bi-geo-alt me-1"></i>{t.area}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;