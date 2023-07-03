const express = require('express');

const app = express();
const PORT = process.env.PORT || 3333;
const viewRoutes = require('./routes/view_routes')

// Middleware
app.use(express.static('public'))
app.use(express.json());

// Routes
app.use('/', [
    viewRoutes
])

// Start the server
app.listen(PORT, () => console.log('Server started on port %s', PORT))