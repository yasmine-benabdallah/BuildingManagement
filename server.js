const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require("cors")
// Routes
const apartmentRoutes = require('./routes/apartmentRoutes');
const buildingRoutes = require('./routes/buildingRoutes');
const syndicRoutes = require('./routes/syndicRoutes');
app.use(cors())
// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Replace with your MySQL password
  database: 'property_management',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ', err);
    return;
  }
  console.log('Connected to the database');
});

// Use routes
app.use('/apartment', apartmentRoutes);
app.use('/building', buildingRoutes);
app.use('/syndic', syndicRoutes);

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

module.exports = db;
