const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS so the backend can accept requests from the React frontend
app.use(cors());

// Parse incoming request bodies in JSON format
app.use(bodyParser.json());

// MySQL connection configuration
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port:process.env.DB_PORT,
  user: process.env.DB_USER,     // Replace with your MySQL username
  password:process.env.DB_PASSWORD, // Replace with your MySQL password
  database: process.env.DB_NAME, // Replace with your MySQL database name
});

// Connect to MySQL database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// API route to handle contact form submissions
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  // SQL query to insert form data into the contacts table
  const sql = 'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)';
  db.query(sql, [name, email, message], (err, result) => {
    if (err) {
      console.error('Error inserting data into database:', err);
      return res.status(500).json({ error: 'Failed to store data' });
    }
    res.status(200).json({ message: 'Contact form submitted successfully' });
  });
});

// Start the server on port 5000
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
