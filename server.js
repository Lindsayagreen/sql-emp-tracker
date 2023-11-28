// Importing the necessary modules: Express for creating a web server and mysql2 for interacting with MySQL databases.
const express = require('express');
const mysql = require('mysql2');

// Defining a constant PORT that takes its value from the environment variable PORT or defaults to 3001.
const PORT = process.env.PORT || 3001;

// Creating an Express application.
const app = express();

// Configuring middleware to parse URL-encoded and JSON request bodies.
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Creating a connection to the MySQL database.
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'classlist_db'
  },
  // Logging a message when the connection is established.
  console.log(`Connected to the classlist_db database.`)
);

// Executing a query to select all records from the 'students' table in the database.
db.query('SELECT * FROM students', function (err, results) {
  // Logging the results of the query (an array of student records) or an error if one occurred.
  console.log(results);
});

// Setting up a middleware function that handles all routes and sends a 404 response for any unmatched route.
app.use((req, res) => {
  res.status(404).end();
});

// Starting the Express application, and it listens for incoming requests on the specified port.
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
