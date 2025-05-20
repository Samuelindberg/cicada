const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Simple POST endpoint to check if the backend is alive
app.post('/alive', (req, res) => {
  res.json({status: 'alive'});
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
