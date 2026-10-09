import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ConversationBox from '../components/ConversationBox';
import { sampleConversationRawText, sampleSummarizeResult } from '../data/sampleData';

export default function SummarizePage() {
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
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
        </div>
        <h1 className="page-heading">Summarize Chats</h1>
        <p className="page-lead">
          Turn hours of unread group conversations into clear, digestible summaries
          that keep you fully informed in seconds.
        </p>
      </header>

      {/* Conversation Viewer & Input */}
      <ConversationBox
        currentText={conversationText}
        onTextChange={setConversationText}
      />

      {/* Feature Results Section */}
      <section className="results-container" aria-labelledby="summarize-results-heading">
        <div className="results-header">
          <div>
            <span className="results-badge">Feature Result</span>
            <h2 id="summarize-results-heading" className="results-title">
              Conversation Summary & Key Topics
            </h2>
            <p className="results-meta">{sampleSummarizeResult.timeframe}</p>
          </div>
          <span className="sample-indicator-pill">Realistic Test Data</span>
        </div>

        <div className="results-content">
          {/* Executive Overview */}
          <div className="summary-overview-card">
            <h3 className="section-label">Executive Briefing</h3>
            <p className="summary-text">{sampleSummarizeResult.overview}</p>
          </div>

          {/* Key Topics Breakdown */}
          <div className="topics-section">
            <h3 className="section-label">Key Discussion Topics</h3>
            <div className="topics-grid">
              {sampleSummarizeResult.keyTopics.map((topic, index) => (
                <article key={index} className="topic-card">
                  <div className="topic-header">
                    <span className="topic-number">0{index + 1}</span>
                    <h4 className="topic-title">{topic.title}</h4>
                  </div>
                  <p className="topic-summary">{topic.summary}</p>
                </article>
              ))}
            </div>
          </div>

          {/* Key Highlights */}
          <div className="highlights-section">
            <h3 className="section-label">Essential Highlights</h3>
            <ul className="highlights-list">
              {sampleSummarizeResult.keyHighlights.map((highlight, index) => (
                <li key={index} className="highlight-item">
                  <span className="highlight-bullet" aria-hidden="true">✓</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="results-footer">
          <p className="model-notice">
            ⚡ <strong>Testing Note:</strong> These results showcase the target summary format for the college team discussion. Once the local Ollama model is downloaded, live summaries will be generated directly from custom chats.
          </p>
        </div>
      </section>
    </main>
  );
}
