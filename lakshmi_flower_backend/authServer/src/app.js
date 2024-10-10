const express = require('express');
const cors = require('cors'); 
const authRoutes = require('./routes/authRoutes');

// Create an instance of the express app
const app = express();

// Use CORS middleware
app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

// Middleware to parse JSON bodies
app.use(express.json());

// Use authentication routes
app.use('/api/login', authRoutes);

module.exports = app;
