import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../../data/services';
import ServiceCard from '../ui/ServiceCard';
import SectionHeader from '../ui/SectionHeader';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const FeaturedSection = () => {
  const featured = services.filter((s) => s.isFeatured).slice(0, 6);
  const ref = useScrollAnimation();

  return (
    <section className="section-padding" style={{ background: 'var(--bg-warm)' }} ref={ref}>
      <div className="container">
        <div className="fade-in-up">
          <SectionHeader
            title="Featured Service Providers"
            subtitle="Top-rated and verified professionals trusted by Vita residents"
          />
        </div>
        <div className="row g-4 stagger-children">
          {featured.map((service) => (
            <div key={service.id} className="col-12 col-md-6 col-lg-4 fade-in-up">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
        <div className="text-center mt-5 fade-in-up">
          <Link to="/services" className="btn btn-primary-custom btn-lg btn-animate">
            <i className="bi bi-grid me-2"></i>View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;