// server.js

const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5001;

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '1234567890',
  database: 'StudentDB',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

app.use(cors());
app.use(bodyParser.json());

// Check database connection
pool.getConnection((err, connection) => {
  if (err) {
    console.log('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to the database');
    connection.release();
  }
});

// Registration route for students
app.post('/api/register', (req, res) => {
  const { name, email, branch, phone, address, password } = req.body;

  pool.query(
    'INSERT INTO students (name, email, branch, phone, address, password) VALUES (?, ?, ?, ?, ?, ?)',
    [name, email, branch, phone, address, password],
    (err, results) => {
      if (err) {
        console.error('Error registering student:', err);
        res.status(500).json({ error: 'Server error' });
      } else {
        res.status(201).json({ message: 'Student registered successfully' });
      }
    }
  );
});

// Registration route for teachers
app.post('/api/register-teacher', (req, res) => {
  const { name, email, subject, phone, password } = req.body;

  pool.query(
    'INSERT INTO teachers (name, email, subject, phone, password) VALUES (?, ?, ?, ?, ?)',
    [name, email, subject, phone, password],
    (err, results) => {
      if (err) {
        console.error('Error registering teacher:', err);
        res.status(500).json({ error: 'Server error' });
      } else {
        res.status(201).json({ message: 'Teacher registered successfully' });
      }
    }
  );
});

// Login route for students
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  pool.query(
    'SELECT * FROM students WHERE email = ? AND password = ?',
    [email, password],
    (err, results) => {
      if (err) {
        console.error('Error authenticating student:', err);
        res.status(500).json({ error: 'Server error' });
      } else if (results.length === 0) {
        res.status(401).json({ message: 'Invalid credentials' });
      } else {
        res.status(200).json({ message: 'Login successful', user: results[0] });
      }
    }
  );
});

// Login route for teachers
app.post('/api/login-teacher', (req, res) => {
  const { email, password } = req.body;

  pool.query(
    'SELECT * FROM teachers WHERE email = ? AND password = ?',
    [email, password],
    (err, results) => {
      if (err) {
        console.error('Error authenticating teacher:', err);
        res.status(500).json({ error: 'Server error' });
      } else if (results.length === 0) {
        res.status(401).json({ message: 'Invalid credentials' });
      } else {
        res.status(200).json({ message: 'Login successful', user: results[0] });
      }
    }
  );
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
