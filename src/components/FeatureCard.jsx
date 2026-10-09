import React from 'react';
import { Link } from 'react-router-dom';

export default function FeatureCard({ to, title, description, icon, badge }) {
  return (
    <Link
      to={to}
      className="feature-card"
      aria-label={`${title} feature page: ${description}`}
    >
      <div className="card-top">
        <div className="card-icon-wrapper" aria-hidden="true">
          {icon}
        </div>
        {badge && <span className="card-badge">{badge}</span>}
      </div>

      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>

      <div className="card-footer" aria-hidden="true">
        <span className="card-explore-text">Explore feature</span>
        <svg
          className="card-arrow"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </div>
    </Link>
  );
}
