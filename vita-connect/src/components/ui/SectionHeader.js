import React from 'react';

const SectionHeader = ({ title, subtitle, centered = true, className = '' }) => {
  return (
    <div className={`mb-5 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="fw-bold mb-2 section-title-underline">{title}</h2>
      {subtitle && (
        <p
          className="mt-3 mb-0"
          style={{
            color: 'var(--text-secondary)',
            fontSize: '1.02rem',
            maxWidth: centered ? '560px' : 'none',
            margin: centered ? '0 auto' : '0',
            lineHeight: 1.7,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;