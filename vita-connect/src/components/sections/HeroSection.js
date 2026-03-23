import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../ui/SearchBar';
import { categories } from '../../data/categories';
import { PROVIDER_COUNT, CATEGORY_COUNT, AREA_COUNT } from '../../utils/constants';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import './HeroSection.css';
import centerLogo from '../layout/center-logo.png';

/* Orbit radius in pixels — items placed on this circle */
const ORBIT_RADIUS = 185;

const HeroSection = () => {
  const [search, setSearch] = useState('');
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate();
  const ref = useScrollAnimation();

  const handleSearch = (query) => {
    navigate(
      query?.trim()
        ? `/services?search=${encodeURIComponent(query.trim())}`
        : '/services'
    );
  };

  const handleCategoryClick = (name) => {
    navigate(`/services?category=${encodeURIComponent(name)}`);
  };

  const handleCategoryKey = (e, name) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCategoryClick(name);
    }
  };

  return (
    <section className="vc-hero" ref={ref}>
      {/* Soft decorative blobs */}
      <div className="vc-hero__decor" aria-hidden="true">
        <div className="vc-hero__blob vc-hero__blob--1"></div>
        <div className="vc-hero__blob vc-hero__blob--2"></div>
        <div className="vc-hero__blob vc-hero__blob--3"></div>
      </div>

      <div className="container position-relative">
        <div className="row align-items-center">
          {/* ======= LEFT — Text Content ======= */}
          <div className="col-lg-6 text-center text-lg-start">
            <span className="vc-hero__tag fade-in-up">
              🏡 Vita's #1 Service Directory
            </span>

            <h1 className="vc-hero__title fade-in-up">
              Find Trusted Local
              <br />
              Services in <span className="vc-hero__title-accent">Vita</span>
            </h1>

            <p className="vc-hero__subtitle fade-in-up">
              Connect with verified plumbers, electricians, doctors &amp; more
              — directly on WhatsApp. No login. No hassle.
            </p>

            <div className="vc-hero__search-wrap fade-in-up scale-in">
              <SearchBar
                value={search}
                onChange={setSearch}
                onSubmit={handleSearch}
                large
              />
            </div>

            {/* Mini stats */}
            <div className="vc-hero__stats fade-in-up">
              <div className="vc-hero__stat">
                <div className="vc-hero__stat-icon">
                  <i className="bi bi-people-fill"></i>
                </div>
                <div className="text-start">
                  <strong>{PROVIDER_COUNT}</strong>
                  <span>Providers</span>
                </div>
              </div>

              <div className="vc-hero__stat">
                <div className="vc-hero__stat-icon">
                  <i className="bi bi-grid-fill"></i>
                </div>
                <div className="text-start">
                  <strong>{CATEGORY_COUNT}</strong>
                  <span>Categories</span>
                </div>
              </div>

              <div className="vc-hero__stat">
                <div className="vc-hero__stat-icon">
                  <i className="bi bi-geo-alt-fill"></i>
                </div>
                <div className="text-start">
                  <strong>{AREA_COUNT}</strong>
                  <span>Areas</span>
                </div>
              </div>
            </div>

            {/* CTA row */}
            <div className="vc-hero__ctas fade-in-up">
              <button
                className="btn btn-primary-custom btn-lg btn-animate"
                onClick={() => navigate('/services')}
              >
                <i className="bi bi-grid me-2"></i>Browse Services
              </button>
              <button
                className="btn btn-outline-custom btn-lg btn-animate"
                onClick={() => navigate('/contact')}
              >
                <i className="bi bi-plus-circle me-2"></i>Join as Provider
              </button>
            </div>
          </div>

          {/* ======= RIGHT — Circular Orbit ======= */}
          <div className="col-lg-6 d-none d-lg-flex justify-content-end align-items-center">
            <div
              className={`vc-orbit fade-in-up ${isPaused ? 'vc-orbit--paused' : ''}`}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Visual orbit rings (decorative) */}
              <div className="vc-orbit__path" aria-hidden="true"></div>
              <div className="vc-orbit__path vc-orbit__path--inner" aria-hidden="true"></div>
              <div className="vc-orbit__path vc-orbit__path--glow" aria-hidden="true"></div>

              {/* Spinning ring holding all category items */}
              <div className="vc-orbit__ring">
                {categories.map((cat, index) => {
                  /* Place items evenly starting from the top (−π/2) */
                  const angle =
                    (index * 2 * Math.PI) / categories.length - Math.PI / 2;
                  const x = ORBIT_RADIUS * Math.cos(angle);
                  const y = ORBIT_RADIUS * Math.sin(angle);

                  return (
                    <div
                      key={cat.id}
                      className="vc-orbit__item"
                      style={{
                        left: `calc(50% + ${x.toFixed(1)}px)`,
                        top: `calc(50% + ${y.toFixed(1)}px)`,
                      }}
                      onClick={() => handleCategoryClick(cat.name)}
                      onKeyDown={(e) => handleCategoryKey(e, cat.name)}
                      role="button"
                      tabIndex={0}
                      title={`${cat.name} — ${cat.nameMarathi}`}
                      aria-label={`Browse ${cat.name} services`}
                    >
                      {/* Inner wrapper counter-rotates to keep content upright */}
                      <div className="vc-orbit__item-content">
                        <div
                          className="vc-orbit__item-icon"
                          style={{
                            background: cat.bgColor,
                            color: cat.color,
                          }}
                        >
                          <i className={`bi ${cat.icon}`}></i>
                        </div>
                        <span className="vc-orbit__item-name">{cat.name}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Center hub */}
              <div className="vc-orbit__center">
                <img src={centerLogo} alt="Vita Center" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', transform: 'scale(1.3)' }} />
              </div>

              {/* Tiny floating dots for sparkle effect */}
              <div className="vc-orbit__dots" aria-hidden="true">
                <span style={{ top: '18%', left: '75%', animationDelay: '0s' }}></span>
                <span style={{ top: '72%', left: '20%', animationDelay: '1.5s' }}></span>
                <span style={{ top: '30%', left: '12%', animationDelay: '3s' }}></span>
                <span style={{ top: '80%', left: '70%', animationDelay: '2s' }}></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;