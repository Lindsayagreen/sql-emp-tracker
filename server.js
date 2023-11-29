

// Importing the necessary modules: Express for creating a web server and mysql2 for interacting with MySQL databases.
const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');

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
    password: 'Driver1!',
    database: 'emplist_db'
  },
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

const initQuestions = () => inquirer.prompt({
  type: "list",
  choices: ["Add department", "Add role", "Add employee", "View departments", "View roles", "View employees", "Update employee role", "Quit"],
  message: "What would you like to do?",
  name: "option"
})
.then(result.option) {

}
  
//department function
//resulting in table showing dept names and dept ids

// view all roles function
//presented with the job title, role id, the department that role belongs to, and the salary for that role

//view all employees function
//resulting in table employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to

//choose to ADD dept
//prompted to enter the name of the department and that department is added to the database
inquirer.prompt
//choose ADD role
//prompted to enter the name, salary, and department for the role and that role is added to the database
inquirer.prompt

//choose to ADD employee
//prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
inquirer.prompt

//choose to update an employee role
// prompted to select an employee to update and their new role and this information is updated in the database
inquirer.prompt