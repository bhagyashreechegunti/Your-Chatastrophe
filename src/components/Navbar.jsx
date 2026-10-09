import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/summarize', label: 'Summarize' },
    { path: '/urgent-news', label: 'Urgent News' },
    { path: '/decisions', label: 'Decisions' },
    { path: '/action-items', label: 'Action Items' },
  ];

  return (
    <header className="site-header">
      <nav className="nav-container" aria-label="Main Navigation">
        <Link to="/" className="brand-logo" aria-label="Chatastrophe Home">
          <span className="brand-spark" aria-hidden="true" />
          <span className="brand-text">Chatastrophe</span>
        </Link>
        <ul className="nav-menu">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`nav-link ${isActive ? 'nav-link--active' : ''}`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
