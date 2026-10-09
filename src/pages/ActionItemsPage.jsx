import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ConversationBox from '../components/ConversationBox';
import { sampleConversationRawText, sampleActionItemsResult } from '../data/sampleData';

export default function ActionItemsPage() {
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
            <path d="M9 11l3 3L22 4"></path>
            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
          </svg>
        </div>
        <h1 className="page-heading">Action Items</h1>
        <p className="page-lead">
          Extract todos, deliverables, assignees, and deadlines automatically
          so your team stays accountable without manual task tracking.
        </p>
      </header>

      {/* Conversation Viewer & Input */}
      <ConversationBox
        currentText={conversationText}
        onTextChange={setConversationText}
      />

      {/* Feature Results Section */}
      <section className="results-container" aria-labelledby="action-items-results-heading">
        <div className="results-header">
          <div>
            <span className="results-badge results-badge--action">Task Board</span>
            <h2 id="action-items-results-heading" className="results-title">
              Assigned Tasks, Owners & Deadlines
            </h2>
            <p className="results-meta">
              {sampleActionItemsResult.length} commitments detected with individual assignees
            </p>
          </div>
          <span className="sample-indicator-pill">Realistic Test Data</span>
        </div>

        <div className="results-content">
          <div className="actions-list">
            {sampleActionItemsResult.map((item) => (
              <article key={item.id} className="task-card">
                <div className="task-card-main">
                  <div className="task-header-row">
                    <span className={`priority-badge priority-${item.priority.toLowerCase()}`}>
                      {item.priority} Priority
                    </span>
                    <span className="deadline-badge">
                      📅 {item.deadline}
                    </span>
                  </div>

                  <h3 className="task-title">{item.task}</h3>
                  <p className="task-deliverable">
                    <strong>Deliverable:</strong> {item.deliverable}
                  </p>
                </div>

                <div className="task-card-aside">
                  <div className="assignee-card">
                    <span className="assignee-avatar" aria-hidden="true">
                      {item.owner.charAt(0)}
                    </span>
                    <div className="assignee-info">
                      <strong className="assignee-name">{item.owner}</strong>
                      <span className="assignee-role">{item.role}</span>
                    </div>
                  </div>

                  <span className={`status-pill status-${item.status.toLowerCase().replace(/\s+/g, '-')}`}>
                    ● {item.status}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="results-footer">
          <p className="model-notice">
            ⚡ <strong>Testing Note:</strong> These action items reflect the specific duties assigned to Liam, Chloe, Alex, and Maya in the college project chat. In Stage 2, Ollama will parse raw unstructured chats into structured task objects like this.
          </p>
        </div>
      </section>
    </main>
  );
}
