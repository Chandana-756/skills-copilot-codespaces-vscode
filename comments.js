// Create web server
// Start server
// Create a route for comments
// Send back a JSON response with the comments
// Stop server
// Test the route

const express = require('express');
const app = express();
const comments = require('./data/comments');

app.get('/comments', (req, res) => {
    res.json(comments);
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

// To test the route, go to http://localhost:3000/comments in your browser.
// You should see the comments displayed in JSON format.