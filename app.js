const sampleConversation = `
Ava: I reviewed the launch plan. We are still behind on the accounts workflow.
Ben: Agreed. The client wants a tighter rollout and we need to prioritize the publishing flows first.
Ava: We also need to finalize the onboarding checklist by Friday EOD.
Maya: I can handle the checklist. Also, we should set up a QA review before launch.
Ben: Good. Let's decide: publish the MVP on Wednesday morning and keep the legacy flow as fallback.
Ava: I will send the updated timeline to the team and ask Design for the revised banner assets by Tuesday.
Maya: I'll prepare the training notes and put a reminder in the project board. The deadline is Thursday at 5 PM.
Ben: Please flag any blockers before noon tomorrow. This is critical for the customer demo.
Ava: Blocker identified: the analytics tracking needs approval from Legal by end of day.
Maya: I will follow up with Legal and share the status in the group chat.
Ben: Perfect. We are aligned, and the top priority is shipping the customer-facing experience with the new sign-up flow.
`;

const STORAGE_KEY = 'chatastrophe_history';

const urgencySignals = [
  'critical',
  'asap',
  'urgent',
  'deadline',
  'before noon',
  'today',
  'blocker',
  'immediately',
  'priority',
  'customer demo',
  'approval',
  'legal',
  'launch',
  'by friday',
  'by tuesday',
  'by thursday'
];

function checkElement(id) {
  return document.getElementById(id);
}

function normalizeText(value) {
  return value.replace(/\s+/g, ' ').trim();
}

function splitConversation(input) {
  return input
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean)
    .filter((line) => !/^[-*•]\s*/.test(line));
}

function extractNamedMentions(lines, rawText) {
  const mentions = new Set();
  lines.forEach((line) => {
    const parts = line.match(/([A-Z][a-z]+):/g) || [];
    parts.forEach((part) => mentions.add(part.replace(':', '')));
  });

  const emailLike = [...new Set((rawText.match(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi) || []))];
  emailLike.forEach((item) => mentions.add(item));

  return [...mentions];
}

function detectActionItems(lines) {
  const actionPatterns = [
    /(need to|must|should|will|can|please|follow up|send|share|prepare|review|finalize|approve|handle|set up|send out|schedule|remind|update|flag)/i
  ];

  return lines
    .filter((line) => actionPatterns.some((pattern) => pattern.test(line)))
    .map((line) => line.replace(/^\s*([A-Z][a-z]+):\s*/, ''))
    .slice(0, 6);
}

function detectDecisionItems(lines) {
  const decisionPatterns = [
    /(decision|decided|agreed|approved|aligned|let's|we will|we should|plan is|priority is|going with|finalize)/i
  ];

  return lines
    .filter((line) => decisionPatterns.some((pattern) => pattern.test(line)))
    .map((line) => line.replace(/^\s*([A-Z][a-z]+):\s*/, ''))
    .slice(0, 5);
}

function detectDeadlines(lines) {
  const deadlinePattern = /(by\s+(?:monday|tuesday|wednesday|thursday|friday|saturday|sunday|today|tomorrow|\d{1,2}\/\d{1,2}|\d{1,2}-\d{1,2}|[A-Z][a-z]+\s+\d{1,2},?\s+\d{4})|deadline\s*(?:is|:)?\s*(?:.*?))|(?:end of day|eod|before noon|5 pm|noon)/i;

  return lines
    .filter((line) => deadlinePattern.test(line))
    .map((line) => line.replace(/^\s*([A-Z][a-z]+):\s*/, ''))
    .slice(0, 5);
}

function scoreUrgency(text) {
  let score = 0;
  urgencySignals.forEach((signal) => {
    if (text.toLowerCase().includes(signal)) {
      score += 1;
    }
  });
  return score;
}

function buildPriorityBrief(lines) {
  const candidates = [];
  lines.forEach((line) => {
    const clean = line.replace(/^\s*([A-Z][a-z]+):\s*/, '');
    const score = scoreUrgency(clean);
    if (score > 0 || /(launch|deadline|blocker|priority|approval|customer demo|critical)/i.test(clean)) {
      candidates.push({ text: clean, score });
    }
  });

  candidates.sort((a, b) => b.score - a.score);
  return candidates.slice(0, 4).map((item) => item.text);
}

function renderList(id, items) {
  const container = checkElement(id);
  if (!container) return;

  container.innerHTML = '';

  if (!items.length) {
    const empty = document.createElement('li');
    empty.className = 'empty-state';
    empty.textContent = 'No matches found yet.';
    container.appendChild(empty);
    return;
  }

  items.forEach((item) => {
    const entry = document.createElement('li');
    entry.textContent = item;
    container.appendChild(entry);
  });
}

function getStoredHistory() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    return [];
  }
}

function saveHistoryEntry(entry) {
  const current = getStoredHistory();
  const updated = [entry, ...current].slice(0, 8);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}

function formatDate(date) {
  return new Date(date).toLocaleString([], {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit'
  });
}

function analyzeConversation() {
  const inputField = checkElement('chatInput');
  if (!inputField) return;

  const rawText = inputField.value || sampleConversation;
  const lines = splitConversation(rawText);
  const cleaned = lines.map((line) => normalizeText(line));

  const actions = detectActionItems(cleaned);
  const decisions = detectDecisionItems(cleaned);
  const deadlines = detectDeadlines(cleaned);
  const mentions = extractNamedMentions(cleaned, rawText);
  const priorityBrief = buildPriorityBrief(cleaned);

  const urgencyScore = cleaned.reduce((total, line) => total + scoreUrgency(line), 0);
  const urgencyLevel = urgencyScore >= 6 ? 'High' : urgencyScore >= 3 ? 'Medium' : 'Low';

  const metricSummary = checkElement('metricSummary');
  const metricDecisions = checkElement('metricDecisions');
  const metricActions = checkElement('metricActions');
  const metricUrgency = checkElement('metricUrgency');

  if (metricSummary) metricSummary.textContent = String(Math.max(3, priorityBrief.length + actions.length));
  if (metricDecisions) metricDecisions.textContent = String(decisions.length || 1);
  if (metricActions) metricActions.textContent = String(actions.length || 1);
  if (metricUrgency) metricUrgency.textContent = urgencyLevel;

  renderList('importanceList', priorityBrief.length ? priorityBrief : ['No high-priority items detected.']);
  renderList('decisionList', decisions.length ? decisions : ['No explicit decisions found.']);
  renderList('actionList', actions.length ? actions : ['No clear action items extracted.']);
  renderList('deadlineList', deadlines.length ? deadlines : ['No deadlines or due dates detected.']);

  const signalItems = [
    ...(mentions.length ? [`Mentioned parties: ${mentions.join(', ')}`] : ['No names or stakeholders detected.']),
    ...((priorityBrief.length && priorityBrief[0]) ? [`Top signal: ${priorityBrief[0]}`] : []),
    ...(urgencyLevel === 'High' ? ['Urgency level: high; needs immediate attention.'] : [`Urgency level: ${urgencyLevel.toLowerCase()}.`]),
    ...((actions.length) ? [`Action focus: ${actions[0]}`] : [])
  ];

  renderList('signalList', signalItems);
  return { priorityBrief, decisions, actions, deadlines, urgencyLevel, rawText };
}

function saveCurrentSummary() {
  const inputField = checkElement('chatInput');
  const result = analyzeConversation();

  if (!result || !inputField || !inputField.value.trim()) {
    return;
  }

  const historyEntry = {
    timestamp: new Date().toISOString(),
    title: 'Conversation summary',
    urgency: result.urgencyLevel,
    summary: result.priorityBrief.slice(0, 3).join(' • ') || 'No urgent items found.',
    text: inputField.value
  };

  saveHistoryEntry(historyEntry);
  alert('Summary saved locally on this device.');
}

function renderHistory() {
  const list = checkElement('historyList');
  if (!list) return;

  const entries = getStoredHistory();
  list.innerHTML = '';

  if (!entries.length) {
    const empty = document.createElement('li');
    empty.className = 'history-empty';
    empty.textContent = 'No saved summaries yet.';
    list.appendChild(empty);
    return;
  }

  entries.forEach((entry) => {
    const item = document.createElement('li');
    item.className = 'history-item';
    item.innerHTML = `
      <strong>${entry.title}</strong>
      <small>${entry.urgency} • ${formatDate(entry.timestamp)}</small>
      <div>${entry.summary}</div>
    `;
    list.appendChild(item);
  });
}

function clearHistory() {
  localStorage.removeItem(STORAGE_KEY);
  renderHistory();
}

function initializeAnalyzerPage() {
  const chatInput = checkElement('chatInput');
  const analyzeBtn = checkElement('analyzeBtn');
  const sampleBtn = checkElement('sampleBtn');
  const clearBtn = checkElement('clearBtn');
  const saveBtn = checkElement('saveBtn');

  if (!chatInput) return;

  if (analyzeBtn) {
    analyzeBtn.addEventListener('click', analyzeConversation);
  }

  if (sampleBtn) {
    sampleBtn.addEventListener('click', () => {
      chatInput.value = sampleConversation.trim();
      analyzeConversation();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      chatInput.value = '';
      const ids = ['importanceList', 'decisionList', 'actionList', 'deadlineList', 'signalList'];
      ids.forEach((id) => {
        const container = checkElement(id);
        if (container) container.innerHTML = '';
      });
      const metricSummary = checkElement('metricSummary');
      const metricDecisions = checkElement('metricDecisions');
      const metricActions = checkElement('metricActions');
      const metricUrgency = checkElement('metricUrgency');
      if (metricSummary) metricSummary.textContent = '0';
      if (metricDecisions) metricDecisions.textContent = '0';
      if (metricActions) metricActions.textContent = '0';
      if (metricUrgency) metricUrgency.textContent = 'Low';
      chatInput.focus();
    });
  }

  if (saveBtn) {
    saveBtn.addEventListener('click', saveCurrentSummary);
  }

  chatInput.addEventListener('keydown', (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
      analyzeConversation();
    }
  });

  chatInput.value = sampleConversation.trim();
  analyzeConversation();
}

function initializeHistoryPage() {
  const clearHistoryBtn = checkElement('clearHistoryBtn');
  if (clearHistoryBtn) {
    clearHistoryBtn.addEventListener('click', clearHistory);
  }
  renderHistory();
}

document.addEventListener('DOMContentLoaded', () => {
  if (checkElement('chatInput')) {
    initializeAnalyzerPage();
  }

  if (checkElement('historyList')) {
    initializeHistoryPage();
  }
});
