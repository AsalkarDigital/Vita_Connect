import React, { useState, useEffect, useRef, useCallback } from 'react';

const stats = [
  { icon: 'bi-people-fill', end: 120, suffix: '+', label: 'Service Providers', color: '#FF6B35' },
  { icon: 'bi-grid-fill', end: 12, suffix: '', label: 'Categories', color: '#00897B' },
  { icon: 'bi-emoji-smile-fill', end: 500, suffix: '+', label: 'Happy Users', color: '#FFB800' },
  { icon: 'bi-geo-alt-fill', end: 10, suffix: '+', label: 'Areas Served', color: '#8B5CF6' },
];

const Counter = ({ end, suffix, started }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let current = 0;
    const step = Math.max(1, Math.floor(end / 50));
    const interval = setInterval(() => {
      current += step;
      if (current >= end) { current = end; clearInterval(interval); }
      setCount(current);
    }, 30);
    return () => clearInterval(interval);
  }, [end, started]);

  return <span>{count}{suffix}</span>;
};

const StatsSection = () => {
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  const handleIntersect = useCallback((entries) => {
    if (entries[0].isIntersecting) setStarted(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersect, { threshold: 0.3 });
    const el = ref.current;
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [handleIntersect]);

  return (
    <section ref={ref} style={{ background: '#fff', padding: '70px 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <div className="row g-4 text-center">
          {stats.map((s, i) => (
            <div key={i} className="col-6 col-md-3">
              <div>
                <div
                  style={{
                    width: 56, height: 56,
                    borderRadius: 'var(--radius-lg)',
                    background: `${s.color}12`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 12px',
                  }}
                >
                  <i className={`bi ${s.icon}`} style={{ fontSize: '1.5rem', color: s.color }}></i>
                </div>
                <h3 style={{ fontWeight: 700, fontSize: '2rem', margin: '0 0 4px', color: 'var(--text-primary)' }}>
                  <Counter end={s.end} suffix={s.suffix} started={started} />
                </h3>
                <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.88rem' }}>{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;