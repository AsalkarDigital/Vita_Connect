import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
      style={{
        position: 'fixed',
        bottom: 28,
        right: 28,
        zIndex: 1040,
        width: 48,
        height: 48,
        borderRadius: '50%',
        background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))',
        color: '#fff',
        border: 'none',
        boxShadow: '0 4px 16px rgba(var(--primary-rgb), 0.35)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.2rem',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.8)',
        pointerEvents: visible ? 'auto' : 'none',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
      }}
    >
      <i className="bi bi-arrow-up"></i>
    </button>
  );
};

export default ScrollToTop;