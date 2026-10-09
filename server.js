
import express from 'express';

const app = express();
const PORT = 3001;

app.use(express.json({ limit: '2mb' }));

// Check whether the backend is running.
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Chatastrophe backend is running!'
  });
});

app.listen(PORT, '127.0.0.1', () => {
  console.log(`Chatastrophe backend running at http://127.0.0.1:${PORT}`);
});