
import express from 'express';

const app = express();
const PORT = 3001;
const OLLAMA_URL = 'http://127.0.0.1:11434/api/chat';
const MODEL = 'qwen2.5:1.5b';

app.use(express.json({ limit: '2mb' }));

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Chatastrophe backend is running!',
  });
});

const taskPrompts = {
  summary: `Summarize the conversation clearly.
Include the main topics, important updates, and key highlights.
Do not invent facts.`,

  urgent: `Identify genuinely urgent information in the conversation.
Include deadlines, critical announcements, blockers, and the
message evidence supporting each item. If nothing is urgent,
say so. Do not invent deadlines or urgency.`,

  decisions: `Extract confirmed decisions and agreements only.
Separate confirmed decisions from suggestions and unresolved
questions. Include supporting context. Do not treat proposals
as final decisions.`,

  actions: `Extract actionable tasks from the conversation.
For each task, identify the task, owner, deadline, and status
when explicitly available. Use "Not specified" for missing
owners or deadlines. Do not invent information or duplicate tasks.`,
};

app.post('/api/analyze', async (req, res) => {
  const { text, task } = req.body ?? {};

  if (typeof text !== 'string' || !text.trim()) {
    return res.status(400).json({
      error: 'Please provide conversation text.',
    });
  }

  if (text.length > 100000) {
    return res.status(413).json({
      error: 'Conversation is too long. Please use under 100,000 characters.',
    });
  }

  if (!Object.hasOwn(taskPrompts, task)) {
    return res.status(400).json({
      error: 'Task must be summary, urgent, decisions, or actions.',
    });
  }

  try {
    const ollamaResponse = await fetch(OLLAMA_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: MODEL,
        stream: false,
        messages: [
          {
            role: 'system',
            content: taskPrompts[task],
          },
          {
            role: 'user',
            content: `Analyze this conversation:\n\n${text}`,
          },
        ],
      }),
      signal: AbortSignal.timeout(120000),
    });

    if (!ollamaResponse.ok) {
      console.error('Ollama returned status:', ollamaResponse.status);
      return res.status(502).json({
        error: 'The local AI service returned an error.',
      });
    }

    const data = await ollamaResponse.json();
    const result = data.message?.content;

    if (typeof result !== 'string' || !result.trim()) {
      return res.status(502).json({
        error: 'The AI returned an empty response. Please try again.',
      });
    }

    return res.json({
      task,
      result,
      model: MODEL,
    });
  } catch (error) {
    console.error('AI analysis failed:', error.message);

    return res.status(502).json({
      error: 'Could not reach the local AI service. Check that Ollama is running and try again.',
    });
  }
});

app.listen(PORT, '127.0.0.1', () => {
  console.log(`Chatastrophe backend running at http://127.0.0.1:${PORT}`);
});