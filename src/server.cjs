// server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5001;

app.use(cors());
app.use(bodyParser.json());

// Registration route
app.post('/api/register', (req, res) => {
  const { name, email, branch, phone, address, password } = req.body;

  // Validate input (add more validation as needed)
  if (!name || !email || !branch || !phone || !address || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Fetch existing registrations from localStorage
  const existingRegistrations = JSON.parse(localStorage.getItem('registrations')) || [];

  // Check if the email or phone is already registered
  const existingUser = existingRegistrations.find(user => user.email === email || user.phone === phone);

  if (existingUser) {
    return res.status(400).json({ message: 'User with the provided email or phone already exists' });
  }

  // Store registration details in localStorage
  const newRegistration = { name, email, branch, phone, address, password };
  existingRegistrations.push(newRegistration);
  localStorage.setItem('registrations', JSON.stringify(existingRegistrations));

  return res.status(201).json({ message: 'Student registered successfully', registration: newRegistration });
});

// Login route
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  // Fetch existing registrations from localStorage
  const existingRegistrations = JSON.parse(localStorage.getItem('registrations')) || [];

  // Find the user with the provided email and password
  const user = existingRegistrations.find(u => u.email === email && u.password === password);

  if (user) {
    // For simplicity, do not include the actual password in the response
    const { password: _, ...userWithoutPassword } = user;
    return res.status(200).json({ message: 'Login successful', user: userWithoutPassword });
  } else {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
