

// Importing the necessary modules: Express for creating a web server and mysql2 for interacting with MySQL databases.
const mysql = require('mysql2');
const inquirer = require('inquirer');

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
const viewDept = () => {db.query('SELECT * FROM department', function (err, results) {
  // Logging the results of the query (an array of student records) or an error if one occurred.
  if (err) throw err;
  console.table(results);
  initQuestions ()
});
};

const initQuestions = () => inquirer.prompt({
  type: "list",
  choices: ["Add department", "Add role", "Add employee", "View departments", "View roles", "View employees", "Update employee role", "Quit"],
  message: "What would you like to do?",
  name: "option"
})
.then(({option}) => {
if (option === "View departments") {
  viewDept()
}
})

initQuestions ()
  
//department function
//resulting in table showing dept names and dept ids

// view all roles function
//presented with the job title, role id, the department that role belongs to, and the salary for that role

//view all employees function
//resulting in table employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to

//choose to ADD dept
//prompted to enter the name of the department and that department is added to the database
// inquirer.prompt
//choose ADD role
//prompted to enter the name, salary, and department for the role and that role is added to the database
// inquirer.prompt

//choose to ADD employee
//prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
// inquirer.prompt

//choose to update an employee role
// prompted to select an employee to update and their new role and this information is updated in the database
// inquirer.prompt