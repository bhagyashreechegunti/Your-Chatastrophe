import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ConversationBox from '../components/ConversationBox';
import { sampleConversationRawText, sampleDecisionsResult } from '../data/sampleData';

export default function DecisionsPage() {
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
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="9 12 11 14 15 10"></polyline>
          </svg>
        </div>
        <h1 className="page-heading">Decisions</h1>
        <p className="page-lead">
          Find out what was decided, approved, and agreed upon across complex
          threads without reading through back-and-forth debates.
        </p>
      </header>

      {/* Conversation Viewer & Input */}
      <ConversationBox
        currentText={conversationText}
        onTextChange={setConversationText}
      />

      {/* Feature Results Section */}
      <section className="results-container" aria-labelledby="decisions-results-heading">
        <div className="results-header">
          <div>
            <span className="results-badge results-badge--decisions">Consensus Log</span>
            <h2 id="decisions-results-heading" className="results-title">
              Confirmed Decisions & Agreements
            </h2>
            <p className="results-meta">
              {sampleDecisionsResult.length} team alignments resolved from group discussion
            </p>
          </div>
          <span className="sample-indicator-pill">Realistic Test Data</span>
        </div>

        <div className="results-content">
          <div className="decisions-grid">
            {sampleDecisionsResult.map((decision) => (
              <article key={decision.id} className="decision-card">
                <div className="decision-card-header">
                  <span className="decision-status-pill">{decision.status}</span>
                  <span className="consensus-pill">
                    <span className="consensus-check" aria-hidden="true">✓</span>
                    {decision.consensus}
                  </span>
                </div>

                <h3 className="decision-title">{decision.title}</h3>

                <div className="decision-detail-block">
                  <h4 className="detail-heading">Context & Rationale:</h4>
                  <p className="detail-body">{decision.rationale}</p>
                </div>

                <div className="decision-outcome-block">
                  <h4 className="detail-heading">Agreed Next Step:</h4>
                  <p className="detail-body">{decision.outcome}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="results-footer">
          <p className="model-notice">
            ⚡ <strong>Testing Note:</strong> These sample decision cards demonstrate how the extractor pulls resolutions out of discussions (such as selecting Google Slides and agreeing on a backup video). Custom conversation parsing will become active in Stage 2 with Ollama.
          </p>
        </div>
      </section>
    </main>
  );
}
