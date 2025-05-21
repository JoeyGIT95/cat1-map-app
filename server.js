const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());

app.get('/cat1-status', (req, res) => {
  fs.readFile('cat1_status.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Failed to read JSON:', err);
      return res.status(500).send('Error reading CAT1 status');
    }
    res.json(JSON.parse(data));
  });
});

app.listen(PORT, () => {
  console.log(`✅ CAT1 Status API running at http://localhost:${PORT}/cat1-status`);
});
