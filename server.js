const express = require('express');

const app = express();
const PORT = process.env.PORT || 3333;

// Middleware
app.use(express.static('public'))
app.use(express.json());

// Routes

// Start the server
app.listen(PORT, () => console.log('Server started on port %s', PORT))