import React from 'react';

const SkeletonCard = () => (
  <div style={{ background: '#fff', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--border)' }}>
    <div className="skeleton" style={{ height: 200, borderRadius: 0 }}></div>
    <div style={{ padding: '18px 20px 20px' }}>
      <div className="skeleton" style={{ width: '35%', height: 22, marginBottom: 12 }}></div>
      <div className="skeleton" style={{ width: '65%', height: 18, marginBottom: 10 }}></div>
      <div className="skeleton" style={{ width: '50%', height: 14, marginBottom: 10 }}></div>
      <div className="skeleton" style={{ width: '80%', height: 14, marginBottom: 8 }}></div>
      <div className="skeleton" style={{ width: '100%', height: 14, marginBottom: 18 }}></div>
      <div style={{ display: 'flex', gap: 10 }}>
        <div className="skeleton" style={{ flex: 1, height: 38 }}></div>
        <div className="skeleton" style={{ flex: 1, height: 38 }}></div>
      </div>
    </div>
  </div>
);

export default SkeletonCard;