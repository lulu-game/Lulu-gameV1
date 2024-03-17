const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
app.use(cors());
app.use(express.json());

// MySQL connection configuration
const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'lulu',
  password: 'kali',
  database: 'lulu_game',
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ', err);
    return;
  }
  console.log('Connected to the database!');
});

// Route for user registration
app.post('/register', (req, res) => {
  const { username, email, password, age, country, gender } = req.body;

  // Hash the password for security (you can use a library like bcrypt)
  const hashedPassword = password; // Replace with hashed password

  const sql = 'INSERT INTO users (username, email, password, age, country, gender) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(sql, [username, email, hashedPassword, age, country, gender], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('An error occurred while registering the user.');
    } else {
      res.status(200).send('User registered successfully!');
    }
  });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});