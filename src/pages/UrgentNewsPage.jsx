import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ConversationBox from '../components/ConversationBox';
import { sampleConversationRawText, sampleUrgentNewsResult } from '../data/sampleData';

export default function UrgentNewsPage() {
  const [conversationText, setConversationText] = useState(sampleConversationRawText);

  return (
    <main className="feature-page">
      <nav className="breadcrumb-nav" aria-label="Breadcrumb">
        <Link to="/" className="back-link">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Home
        </Link>
      </nav>

      <header className="page-header">
        <div className="header-icon-badge" aria-hidden="true">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
          </svg>
        </div>
        <h1 className="page-heading">Urgent News</h1>
        <p className="page-lead">
          Surface urgent alerts, critical roadblocks, and time-sensitive deadlines
          without getting bogged down in casual conversations.
        </p>
      </header>

      {/* Conversation Viewer & Input */}
      <ConversationBox
        currentText={conversationText}
        onTextChange={setConversationText}
      />

      {/* Feature Results Section */}
      <section className="results-container" aria-labelledby="urgent-results-heading">
        <div className="results-header">
          <div>
            <span className="results-badge results-badge--urgent">Priority Scanner</span>
            <h2 id="urgent-results-heading" className="results-title">
              Important Announcements & Deadlines
            </h2>
            <p className="results-meta">
              {sampleUrgentNewsResult.length} actionable alert signals detected in discussion
            </p>
          </div>
          <span className="sample-indicator-pill">Realistic Test Data</span>
        </div>

        <div className="results-content">
          <div className="alerts-stack">
            {sampleUrgentNewsResult.map((alert) => (
              <article
                key={alert.id}
                className={`alert-card alert-card--${alert.severity.toLowerCase()}`}
              >
                <div className="alert-card-top">
                  <div className="alert-badge-group">
                    <span className={`severity-tag severity-${alert.severity.toLowerCase()}`}>
                      {alert.severity} Urgency
                    </span>
                    <span className="alert-category-tag">{alert.category}</span>
                  </div>
                  <time className="alert-time">{alert.timestamp}</time>
                </div>

                <h3 className="alert-title">{alert.title}</h3>
                <p className="alert-details">{alert.details}</p>

                <div className="alert-action-box">
                  <strong className="action-box-label">Immediate Action Required:</strong>
                  <p className="action-box-text">{alert.actionRequired}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="results-footer">
          <p className="model-notice">
            ⚡ <strong>Testing Note:</strong> These alerts illustrate how Chatastrophe filters out noise (like the cafe queue or basketball talk) and highlights high-stakes deadlines. Real-time inference will connect once Ollama finishes downloading.
          </p>
        </div>
      </section>
    </main>
  );
}
