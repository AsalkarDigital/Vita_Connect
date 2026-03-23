import React from 'react';
import useDarkMode from '../../hooks/useDarkMode';

const DarkModeToggle = () => {
  const { isDark, toggleTheme } = useDarkMode();

  return (
    <button
      className="btn p-2 lh-1"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light Mode' : 'Dark Mode'}
      style={{
        background: 'transparent',
        border: 'none',
        color: 'var(--text-primary)',
        fontSize: '1.2rem',
        cursor: 'pointer',
        transition: 'transform 0.3s ease',
      }}
    >
      <i className={`bi ${isDark ? 'bi-sun-fill' : 'bi-moon-fill'}`}></i>
    </button>
  );
};

export default DarkModeToggle;