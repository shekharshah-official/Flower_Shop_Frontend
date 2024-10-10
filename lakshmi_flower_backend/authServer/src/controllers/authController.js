// src/controllers/authController.js
const jwt = require('jsonwebtoken');

// Sample user (in a real-world app, retrieve this data from a database)
const users = [
  {
    email: 'user@example.com',
    password: 'password123' // For simplicity, passwords are not hashed in this example
  }
];

// Secret key for JWT (stored in .env file)
const SECRET_KEY = process.env.JWT_SECRET || 'supersecretkey';

exports.login = (req, res) => {
  const { email, password } = req.body;

  // Check if the user exists
  const user = users.find(u => u.email === email && u.password === password);
  
  if (!user) {
    return res.status(401).json({ success: false, message: 'Invalid credentials' });
  }

  // Generate a JWT token
  const token = jwt.sign({ email: user.email }, SECRET_KEY, { expiresIn: '1h' });

  // Send the token to the client
  res.json({ success: true, token });
};
