const express = require('express');
const app = express();
const port = 2000;

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
