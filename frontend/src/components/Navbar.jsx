import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ onContactOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Prevent background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  // Close menu on ESC key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const navLinks = [
    { label: 'Expertises', href: '#expertises' },
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const handleCtaClick = () => {
    setMenuOpen(false);
    onContactOpen();
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar__inner container">
          
          {/* Logo */}
          <a href="/" className="navbar__logo">
            <span className="navbar__logo-text">GET HYPED</span>
          </a>

          {/* Desktop Links */}
          <ul className="navbar__links">
            {navLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <button className="navbar__cta" onClick={onContactOpen}>
            Get Results
            <span className="navbar__cta-icon">🔥</span>
          </button>

          {/* Burger Button */}
          <button
            className={`navbar__burger ${menuOpen ? 'navbar__burger--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {/* IMPORTANT: no extra class here */}
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="navbar__mobile-menu">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} onClick={handleLinkClick}>
              {l.label}
            </a>
          ))}

          <button
            className="navbar__cta navbar__cta--mobile"
            onClick={handleCtaClick}
          >
            Get Results
            <span className="navbar__cta-icon">🔥</span>
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;