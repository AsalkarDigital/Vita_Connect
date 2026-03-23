import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { services } from '../data/services';
import { categories } from '../data/categories';
import { areas } from '../data/areas';
import { filterServices } from '../utils/filters';
import ServiceCard from '../components/ui/ServiceCard';
import SkeletonCard from '../components/ui/SkeletonCard';
import NoResults from '../components/ui/NoResults';
import useDebounce from '../hooks/useDebounce';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Services.css';

const Services = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState(searchParams.get('search') || '');
  const [category, setCategory] = useState(searchParams.get('category') || 'all');
  const [area, setArea] = useState(searchParams.get('area') || 'all');
  const [sortBy, setSortBy] = useState(searchParams.get('sort') || 'relevance');

  const debouncedSearch = useDebounce(search, 300);
  const ref = useScrollAnimation();

  useEffect(() => { 
    document.title = 'Browse Services — VitaConnect'; 
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(timer);
  }, [debouncedSearch, category, area, sortBy]);

  useEffect(() => {
    const params = {};
    if (debouncedSearch) params.search = debouncedSearch;
    if (category !== 'all') params.category = category;
    if (area !== 'all') params.area = area;
    if (sortBy !== 'relevance') params.sort = sortBy;
    setSearchParams(params, { replace: true });
  }, [debouncedSearch, category, area, sortBy, setSearchParams]);

  const lastUrlCategory = useRef(searchParams.get('category') || 'all');

  useEffect(() => {
    const currentUrlCategory = searchParams.get('category') || 'all';
    if (currentUrlCategory !== lastUrlCategory.current) {
      lastUrlCategory.current = currentUrlCategory;
      setCategory((prevCategory) => {
        if (prevCategory !== currentUrlCategory) {
          window.scrollTo(0, 0);
          return currentUrlCategory;
        }
        return prevCategory;
      });
    }
  }, [searchParams]);

  const results = useMemo(
    () => filterServices(services, { search: debouncedSearch, category, area, sortBy }),
    [debouncedSearch, category, area, sortBy]
  );

  const clearFilters = () => {
    setSearch(''); setCategory('all'); setArea('all'); setSortBy('relevance');
  };

  const hasActiveFilters = search || category !== 'all' || area !== 'all' || sortBy !== 'relevance';

  return (
    <div className="page-enter" ref={ref}>
      {/* Header */}
      <section className="vc-services-header">
        <div className="container">
          <nav aria-label="breadcrumb" className="mb-2">
            <ol className="breadcrumb mb-0" style={{ fontSize: '0.85rem' }}>
              <li className="breadcrumb-item"><Link to="/" style={{ color: 'var(--text-muted)' }}>Home</Link></li>
              <li className="breadcrumb-item active" style={{ color: 'var(--primary)' }}>Services</li>
            </ol>
          </nav>
          <h1 className="mb-1" style={{ fontWeight: 700 }}>Find Service Providers</h1>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 0 }}>
            Browse and filter from {services.length}+ trusted providers in Vita
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="vc-services-filters">
        <div className="container">
          <div className="row g-3 align-items-end">
            <div className="col-12 col-md-4">
              <label className="form-label vc-filter-label">Search</label>
              <div className="position-relative">
                <i className="bi bi-search position-absolute" style={{ left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}></i>
                <input
                  type="text" className="form-control vc-filter-input"
                  placeholder="Search by name, service..."
                  value={search} onChange={(e) => setSearch(e.target.value)}
                  style={{ paddingLeft: 40 }}
                />
              </div>
            </div>
            <div className="col-6 col-md-2">
              <label className="form-label vc-filter-label">Category</label>
              <select className="form-select vc-filter-input" value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="all">All Categories</option>
                {categories.map((c) => <option key={c.id} value={c.name}>{c.name}</option>)}
              </select>
            </div>
            <div className="col-6 col-md-2">
              <label className="form-label vc-filter-label">Area</label>
              <select className="form-select vc-filter-input" value={area} onChange={(e) => setArea(e.target.value)}>
                <option value="all">All Areas</option>
                {areas.map((a) => <option key={a.id} value={a.name}>{a.name}</option>)}
              </select>
            </div>
            <div className="col-6 col-md-2">
              <label className="form-label vc-filter-label">Sort By</label>
              <select className="form-select vc-filter-input" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="relevance">Relevance</option>
                <option value="rating">Rating (High)</option>
                <option value="experience">Experience (High)</option>
              </select>
            </div>
            <div className="col-6 col-md-2 d-flex align-items-end">
              {hasActiveFilters && (
                <button className="btn btn-outline-custom btn-sm w-100" onClick={clearFilters} style={{ height: 44 }}>
                  <i className="bi bi-x-circle me-1"></i>Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section-padding" style={{ paddingTop: 36, background: 'var(--bg-light)' }}>
        <div className="container">
          {!loading && (
            <p className="mb-4" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Showing <strong style={{ color: 'var(--text-primary)' }}>{results.length}</strong>{' '}
              provider{results.length !== 1 ? 's' : ''}
              {category !== 'all' && <span> in <strong style={{ color: 'var(--primary)' }}>{category}</strong></span>}
              {area !== 'all' && <span> near <strong style={{ color: 'var(--primary)' }}>{area}</strong></span>}
            </p>
          )}

          {loading ? (
            <div className="row g-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="col-12 col-md-6 col-lg-4"><SkeletonCard /></div>
              ))}
            </div>
          ) : results.length > 0 ? (
            <div className="row g-4 stagger-children">
              {results.map((s) => (
                <div key={s.id} className="col-12 col-md-6 col-lg-4 fade-in-up">
                  <ServiceCard service={s} />
                </div>
              ))}
            </div>
          ) : (
            <NoResults />
          )}
        </div>
      </section>
    </div>
  );
};

export default Services;