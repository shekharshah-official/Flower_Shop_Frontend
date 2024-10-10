// src/routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Route to handle login requests
router.post('/', authController.login);

module.exports = router;
