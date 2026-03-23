import React from 'react';
import './SearchBar.css';

const SearchBar = ({
  value,
  onChange,
  placeholder = 'Search for plumber, electrician, doctor...',
  onSubmit,
  large = false,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(value);
  };

  const handleClear = () => {
    onChange('');
    if (onSubmit) onSubmit('');
  };

  return (
    <form className={`vc-search ${large ? 'vc-search--large' : ''}`} onSubmit={handleSubmit} role="search">
      <i className="bi bi-search vc-search-icon"></i>
      <input
        type="text"
        className="vc-search-input"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Search services"
      />
      {value && (
        <button type="button" className="vc-search-clear" onClick={handleClear} aria-label="Clear search">
          <i className="bi bi-x-lg"></i>
        </button>
      )}
      <button type="submit" className="vc-search-btn" aria-label="Submit search">
        <i className="bi bi-search d-md-none"></i>
        <span className="d-none d-md-inline">Search</span>
      </button>
    </form>
  );
};

export default SearchBar;