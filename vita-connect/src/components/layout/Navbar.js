import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from './logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top vc-navbar ${scrolled ? 'vc-navbar--scrolled' : ''}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container">
        <Link to="/" className="navbar-brand vc-brand" onClick={closeMenu}>
          <img src={logo} alt="VitaConnect" className="vc-brand-logo-img" style={{ height: '70px', width: 'auto' }} />
        </Link>

        <button
          className={`navbar-toggler vc-toggler ${menuOpen ? '' : 'collapsed'}`}
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-controls="navbarNav"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          <span className="vc-toggler-bar"></span>
          <span className="vc-toggler-bar"></span>
          <span className="vc-toggler-bar"></span>
        </button>

        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-1">
            <li className="nav-item">
              <NavLink className="nav-link vc-nav-link" to="/" end onClick={closeMenu}>
                <i className="bi bi-house-door me-1 d-lg-none"></i>Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link vc-nav-link" to="/services" onClick={closeMenu}>
                <i className="bi bi-grid me-1 d-lg-none"></i>Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link vc-nav-link" to="/about" onClick={closeMenu}>
                <i className="bi bi-info-circle me-1 d-lg-none"></i>About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link vc-nav-link" to="/contact" onClick={closeMenu}>
                <i className="bi bi-envelope me-1 d-lg-none"></i>Contact
              </NavLink>
            </li>
            <li className="nav-item ms-lg-3">
              <Link
                className="btn btn-primary-custom btn-sm btn-animate vc-nav-cta"
                to="/contact"
                onClick={closeMenu}
              >
                <i className="bi bi-plus-circle me-1"></i>
                List Your Service
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;