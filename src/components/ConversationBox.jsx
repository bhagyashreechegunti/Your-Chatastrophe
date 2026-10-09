import React, { useState } from 'react';
import { sampleMessages, sampleConversationRawText } from '../data/sampleData';

export default function ConversationBox({ currentText, onTextChange }) {
  const [viewMode, setViewMode] = useState('bubbles'); // 'bubbles' or 'editor'
  const [copyFeedback, setCopyFeedback] = useState(false);

  const isSample = currentText.trim() === sampleConversationRawText.trim();
  const isEmpty = currentText.trim().length === 0;

  const handleLoadSample = () => {
    onTextChange(sampleConversationRawText);
  };

  const handleClear = () => {
    onTextChange('');
  };

  const handleCopy = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(currentText);
      setCopyFeedback(true);
      setTimeout(() => setCopyFeedback(false), 2000);
    }
  };

  return (
    <section className="conversation-panel" aria-labelledby="conversation-panel-title">
      <div className="panel-topbar">
        <div className="panel-title-group">
          <h2 id="conversation-panel-title" className="panel-heading">
            Group Conversation Thread
          </h2>
          <span className="panel-source-badge">
            {isSample ? 'College Project Team (Sample)' : isEmpty ? 'Empty Conversation' : 'Custom Conversation'}
          </span>
        </div>

        <div className="view-switchers" role="tablist" aria-label="Conversation view mode">
          <button
            type="button"
            role="tab"
            aria-selected={viewMode === 'bubbles'}
            className={`view-tab-btn ${viewMode === 'bubbles' ? 'view-tab-btn--active' : ''}`}
            onClick={() => setViewMode('bubbles')}
          >
            💬 Chat View
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={viewMode === 'editor'}
            className={`view-tab-btn ${viewMode === 'editor' ? 'view-tab-btn--active' : ''}`}
            onClick={() => setViewMode('editor')}
          >
            ✏️ Raw Text / Paste
          </button>
        </div>
      </div>

      {/* Toolbar actions */}
      <div className="panel-controls">
        <div className="controls-left">
          <button
            type="button"
            className="panel-btn panel-btn--accent"
            onClick={handleLoadSample}
            aria-label="Load sample college project conversation"
          >
            🔄 Load Sample Chat
          </button>
          <button
            type="button"
            className="panel-btn panel-btn--ghost"
            onClick={handleClear}
            disabled={isEmpty}
            aria-label="Clear conversation text"
          >
            🗑️ Clear
          </button>
          <button
            type="button"
            className="panel-btn panel-btn--ghost"
            onClick={handleCopy}
            disabled={isEmpty}
            aria-label="Copy conversation to clipboard"
          >
            {copyFeedback ? '✓ Copied!' : '📋 Copy Text'}
          </button>
        </div>

        <div className="controls-right">
          <span className="char-count">
            {currentText ? `${currentText.split(/\s+/).filter(Boolean).length} words` : '0 words'}
          </span>
        </div>
      </div>

      {/* View Content */}
      {viewMode === 'bubbles' && isSample ? (
        <div className="messages-stream" tabIndex="0" aria-label="Stream of group chat messages">
          {sampleMessages.map((msg) => (
            <article key={msg.id} className={`chat-bubble chat-bubble--${msg.category || 'chat'}`}>
              <div className="bubble-header">
                <span className="sender-avatar" aria-hidden="true">
                  {msg.sender.charAt(0)}
                </span>
                <strong className="sender-name">{msg.sender}</strong>
                <span className="sender-role">{msg.role}</span>
                <time className="message-time">{msg.timestamp}</time>
                {msg.category === 'urgent' && <span className="category-pill pill-urgent">Urgent</span>}
                {msg.category === 'decision' && <span className="category-pill pill-decision">Decision</span>}
                {msg.category === 'action' && <span className="category-pill pill-action">Task</span>}
                {msg.category === 'casual' && <span className="category-pill pill-casual">Chitchat</span>}
              </div>
              <p className="bubble-text">{msg.text}</p>
            </article>
          ))}
        </div>
      ) : (
        <div className="editor-container">
          <label htmlFor="conversation-textarea" className="sr-only">
            Paste or edit chat conversation thread
          </label>
          <textarea
            id="conversation-textarea"
            className="conversation-textarea"
            placeholder="Paste your chat log or transcript here, or click 'Load Sample Chat' above to test with the college project conversation..."
            value={currentText}
            onChange={(e) => onTextChange(e.target.value)}
            rows={12}
            spellCheck="false"
          />
        </div>
      )}

      {/* Context info banner */}
      <div className="panel-status-note">
        <span className="status-note-icon" aria-hidden="true">
          💡
        </span>
        <div className="status-note-text">
          {isSample ? (
            <span>
              <strong>Sample conversation active:</strong> The results below are derived from this realistic 4-person college team chat.
            </span>
          ) : isEmpty ? (
            <span>
              <strong>Conversation is empty:</strong> Paste a chat thread above or click <em>Load Sample Chat</em> to inspect test results.
            </span>
          ) : (
            <span>
              <strong>Custom conversation entered:</strong> Live AI analysis for custom text requires the local Ollama model (currently downloading). The section below displays the sample test output format.
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
