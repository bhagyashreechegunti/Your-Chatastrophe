import React from 'react';
import FeatureCard from '../components/FeatureCard';

export default function Home() {
  const features = [
    {
      to: '/summarize',
      title: 'Summarize Chats',
      description:
        'Transform long, cluttered chat threads into concise, readable briefings so you can digest hours of talk in minutes.',
      badge: 'Briefing',
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      ),
    },
    {
      to: '/urgent-news',
      title: 'Urgent News',
      description:
        'Highlight critical blockers, imminent deadlines, and high-priority announcements without sifting through noise.',
      badge: 'Priority',
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
        </svg>
      ),
    },
    {
      to: '/decisions',
      title: 'Decisions',
      description:
        'Quickly uncover team consensus, finalized conclusions, and approved resolutions made during busy conversations.',
      badge: 'Consensus',
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="9 12 11 14 15 10"></polyline>
        </svg>
      ),
    },
    {
      to: '/action-items',
      title: 'Action Items',
      description:
        'Extract clear tasks, assigned owners, and pending commitments so that nothing gets missed or delayed.',
      badge: 'Tasks',
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 11l3 3L22 4"></path>
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
        </svg>
      ),
    },
  ];

  return (
    <main className="home-container">
      {/* Hero Section */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-badge">
          <span className="hero-badge-dot" aria-hidden="true" />
          <span>Stage 1 UI Preview</span>
        </div>

        <h1 id="hero-title" className="hero-title">
          Chatastrophe
        </h1>

        <p className="hero-tagline">
          Your chats are disaster and we fix them.
        </p>

        <p className="hero-description">
          Chatastrophe is an AI micro-app designed to help you quickly catch up
          on long, unread conversations. Instead of endlessly scrolling through
          disorganized messages, jump into key briefings, critical alerts, and
          action items below.
        </p>
      </section>

      {/* Feature Cards Grid */}
      <section className="features-section" aria-label="Core Features">
        <div className="section-header">
          <h2 className="section-title">Catch-Up Categories</h2>
          <p className="section-subtitle">
            Select an area to explore how Chatastrophe organizes conversation chaos:
          </p>
        </div>

        <div className="cards-grid">
          {features.map((feature) => (
            <FeatureCard
              key={feature.to}
              to={feature.to}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              badge={feature.badge}
            />
          ))}
        </div>
      </section>

      {/* Development Stage Callout */}
      <aside className="stage-note" aria-label="Development Status">
        <div className="stage-note-icon" aria-hidden="true">
          ℹ️
        </div>
        <div className="stage-note-content">
          <strong>Testing Preview Active</strong>
          <p>
            Realistic college project sample data is now loaded across all 4
            feature categories below. You can explore the sample conversation,
            test custom inputs, and review realistic output formats while the
            local Ollama model is downloading.
          </p>
        </div>
      </aside>
    </main>
  );
}
