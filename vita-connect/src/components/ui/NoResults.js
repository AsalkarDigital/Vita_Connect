import React from 'react';
import { Link } from 'react-router-dom';

const NoResults = ({ message = 'No services found matching your criteria.' }) => (
  <div className="text-center py-5">
    <div
      style={{
        width: 100,
        height: 100,
        borderRadius: '50%',
        background: 'var(--primary-light)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 24px',
      }}
    >
      <i className="bi bi-search" style={{ fontSize: '2.2rem', color: 'var(--primary)' }}></i>
    </div>
    <h4 className="mb-2">No Results Found</h4>
    <p className="mb-4" style={{ color: 'var(--text-secondary)', maxWidth: 400, margin: '0 auto' }}>
      {message}
    </p>
    <Link to="/services" className="btn btn-primary-custom btn-animate">
      View All Services
    </Link>
  </div>
);

export default NoResults;