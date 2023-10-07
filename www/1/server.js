const fs = require("fs");
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Use body-parser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files (HTML, CSS, JS, etc.) from a directory
app.use(express.static('public'));

// Handle form submission
app.get('/primers_designe', (req, res) => {
  const seq_f = req.query.seq_f;
  const seq_r = req.query.seq_r;

  // Your primer design and analysis logic goes here
  // You can send a response back to the client or save results to a file

  // Example: Sending a response
  res.send(`Received seq_f: ${seq_f}, seq_r: ${seq_r}`);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
