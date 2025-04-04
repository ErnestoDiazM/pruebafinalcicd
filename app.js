const express = require('express');
const app = express();
const data = require('./db.json');

app.use(express.json());

app.get('/users', (req, res) => {
  res.status(200).json(data.users);
});

app.get('/users/:id', (req, res) => {
  const user = data.users.find(u => u.id === parseInt(req.params.id, 10));
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

// Health check endpoint
app.get('/', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Start server if this file is run directly
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
