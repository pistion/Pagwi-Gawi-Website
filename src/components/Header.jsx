import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import Button from './Button';
import AnimatedButton from './AnimatedButton';
import { navLinks } from '../data/siteData';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.classList.remove('menu-open');
  };

  const toggleMenu = () => {
    setMenuOpen((open) => {
      document.body.classList.toggle('menu-open', !open);
      return !open;
    });
  };

  return (
    <header className="pg-header">
      <nav className="pg-header__nav" aria-label="Main navigation">
        <Logo />
        <div className="pg-header__links">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `pg-header__link ${isActive ? 'pg-header__link--active' : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <span className="pg-header__cta">
            <AnimatedButton to="/contact" style={{ width: '190px', height: '42px', fontSize: '11px', '--line_color': '#000000' }}>
              Register for Updates
            </AnimatedButton>
          </span>
        </div>
        <button
          type="button"
          className="pg-header__menu-btn"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={toggleMenu}
        >
          <span className="pg-header__menu-icon" />
        </button>
      </nav>
      {menuOpen && (
        <div className="pg-drawer__backdrop" onClick={closeMenu} aria-hidden="true" />
      )}
      <nav
        id="mobile-menu"
        className={`pg-drawer ${menuOpen ? 'pg-drawer--open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          className="pg-drawer__close"
          aria-label="Close menu"
          onClick={closeMenu}
        >
          ✕
        </button>
        <div className="pg-drawer__links">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `pg-drawer__link ${isActive ? 'pg-drawer__link--active' : ''}`
              }
              onClick={closeMenu}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
        <div className="pg-drawer__cta">
          <Button variant="dark" to="/contact" onClick={closeMenu}>
            Register for Updates
          </Button>
        </div>
      </nav>
    </header>
  );
}