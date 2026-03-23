import React from 'react';

const Badge = ({ variant = 'category', children, style = {}, className = '' }) => {
  const classMap = {
    verified: 'badge-verified',
    featured: 'badge-featured',
    category: 'badge-category',
    custom: '',
  };

  return (
    <span className={`${classMap[variant] || ''} ${className}`} style={style}>
      {children}
    </span>
  );
};

export default Badge;