import React, { useEffect, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { services } from '../data/services';
import WhatsAppButton from '../components/ui/WhatsAppButton';
import ServiceCard from '../components/ui/ServiceCard';
import Badge from '../components/ui/Badge';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './ServiceDetails.css';

const renderStars = (rating) => {
  const stars = [];
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  for (let i = 0; i < full; i++) stars.push(<i key={`f${i}`} className="bi bi-star-fill"></i>);
  if (half) stars.push(<i key="h" className="bi bi-star-half"></i>);
  const empty = 5 - full - (half ? 1 : 0);
  for (let i = 0; i < empty; i++) stars.push(<i key={`e${i}`} className="bi bi-star"></i>);
  return stars;
};

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const ref = useScrollAnimation();

  const service = useMemo(() => services.find((s) => s.id === Number(id)), [id]);
  const related = useMemo(() => {
    if (!service) return [];
    return services.filter((s) => s.categoryId === service.categoryId && s.id !== service.id).slice(0, 3);
  }, [service]);

  useEffect(() => {
    document.title = service ? `${service.name} — ${service.category} | VitaConnect` : 'Not Found | VitaConnect';
    window.scrollTo(0, 0);
  }, [service]);

  if (!service) {
    return (
      <div className="page-enter" style={{ paddingTop: 120 }}>
        <div className="container text-center py-5">
          <i className="bi bi-exclamation-circle" style={{ fontSize: '3rem', color: 'var(--text-muted)' }}></i>
          <h3 className="mt-3">Provider Not Found</h3>
          <p style={{ color: 'var(--text-secondary)' }}>The service provider you're looking for doesn't exist.</p>
          <Link to="/services" className="btn btn-primary-custom btn-animate">Browse All Services</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-enter" ref={ref}>
      {/* Header */}
      <section className="vc-details-header">
        <div className="container">
          <button className="btn btn-sm mb-3 vc-details-back" onClick={() => navigate(-1)}>
            <i className="bi bi-arrow-left me-1"></i>Back
          </button>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0" style={{ fontSize: '0.85rem' }}>
              <li className="breadcrumb-item"><Link to="/" style={{ color: 'var(--text-muted)' }}>Home</Link></li>
              <li className="breadcrumb-item"><Link to="/services" style={{ color: 'var(--text-muted)' }}>Services</Link></li>
              <li className="breadcrumb-item active" style={{ color: 'var(--primary)' }}>{service.name}</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding" style={{ paddingTop: 36, background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="row g-4 g-lg-5">
            {/* Image */}
            <div className="col-lg-5 fade-in-up">
              <div className="vc-details-img-wrap">
                <img src={service.image} alt={service.name} className="vc-details-img" loading="lazy" />
                <div className="vc-details-img-badges">
                  {service.isVerified && <Badge variant="verified"><i className="bi bi-patch-check-fill"></i> Verified</Badge>}
                  {service.isFeatured && <Badge variant="featured"><i className="bi bi-star-fill"></i> Featured</Badge>}
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="col-lg-7 fade-in-up">
              <Badge variant="category">{service.category}</Badge>
              <h1 className="mt-2 mb-2" style={{ fontWeight: 700, fontSize: '2rem' }}>{service.name}</h1>

              <div className="d-flex align-items-center gap-2 mb-3">
                <div className="stars">{renderStars(service.rating)}</div>
                <span style={{ fontWeight: 600 }}>{service.rating}</span>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>({service.reviewCount} reviews)</span>
              </div>

              {/* Meta grid */}
              <div className="vc-details-meta">
                <div className="vc-details-meta__item">
                  <div className="vc-details-meta__icon" style={{ background: '#EBF5FF' }}><i className="bi bi-geo-alt-fill" style={{ color: '#3B82F6' }}></i></div>
                  <div><span className="vc-details-meta__label">Location</span><span className="vc-details-meta__value">{service.area}, Vita</span></div>
                </div>
                <div className="vc-details-meta__item">
                  <div className="vc-details-meta__icon" style={{ background: '#FFF8E1' }}><i className="bi bi-briefcase-fill" style={{ color: '#F59E0B' }}></i></div>
                  <div><span className="vc-details-meta__label">Experience</span><span className="vc-details-meta__value">{service.experience}</span></div>
                </div>
                <div className="vc-details-meta__item">
                  <div className="vc-details-meta__icon" style={{ background: '#E8F5E9' }}><i className="bi bi-clock-fill" style={{ color: '#28A745' }}></i></div>
                  <div><span className="vc-details-meta__label">Available</span><span className="vc-details-meta__value">{service.availableHours}</span></div>
                </div>
                <div className="vc-details-meta__item">
                  <div className="vc-details-meta__icon" style={{ background: '#F3E8FF' }}><i className="bi bi-translate" style={{ color: '#8B5CF6' }}></i></div>
                  <div><span className="vc-details-meta__label">Languages</span><span className="vc-details-meta__value">{service.languages.join(', ')}</span></div>
                </div>
              </div>

              <div className="mt-4">
                <h5 style={{ fontWeight: 600 }}>About</h5>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.94rem' }}>{service.description}</p>
              </div>

              <div className="mt-3">
                <h5 style={{ fontWeight: 600 }}>Specialties</h5>
                <div className="d-flex flex-wrap gap-2 mt-2">
                  {service.specialties.map((sp, i) => <span key={i} className="pill-tag">{sp}</span>)}
                </div>
              </div>

              {/* CTA */}
              <div className="vc-details-cta mt-4">
                <WhatsAppButton
                  phone={service.phone}
                  message={`Hi ${service.name}, I found you on VitaConnect. I need help with ${service.category} services.`}
                  size="lg" fullWidth
                />
                <a href={`tel:+${service.phone}`} className="btn btn-outline-custom btn-lg btn-animate w-100">
                  <i className="bi bi-telephone me-2"></i>Call Now
                </a>
              </div>
            </div>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-5 pt-5" style={{ borderTop: '1px solid var(--border)' }}>
              <h3 className="mb-4 fade-in-up" style={{ fontWeight: 600 }}>More {service.category} Providers</h3>
              <div className="row g-4 stagger-children">
                {related.map((r) => (
                  <div key={r.id} className="col-12 col-md-6 col-lg-4 fade-in-up">
                    <ServiceCard service={r} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;