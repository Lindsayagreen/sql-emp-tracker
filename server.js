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

//choose to ADD dept
//prompted to enter the name of the department and that department is added to the database
const addDept = () => inquirer.prompt({type: "input",
message:"What is the name of your department?",
name: "deptName"
})
.then(answer => {
  db.promise().execute("INSERT INTO department (name) VALUES (?)", [answer.deptName])
  .then(([rows, fields]) => {
    console.table(rows);
    initQuestions ();
  })
  .catch(err => {
    console.error(err);
    initQuestions();
  })
});

//choose ADD role
//prompted to enter the name, salary, and department for the role and that role is added to the database
const addRole = () => inquirer.prompt([
  { type: "input", message: "What's the name of the role?", name: "roleName" },
  { type: "input", message: "What is the salary for this role?", name: "salaryTotal" },
  { type: "input", message: "What is the department id number?", name: "deptID" }
]).then(answer => {
  // Use db.promise().execute for promise-based queries
  db.promise().execute("INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)",
      [answer.roleName, answer.salaryTotal, answer.deptID])
      .then(([rows, fields]) => {
          console.table(rows);
          initQuestions();
      })
      .catch(err => {
          console.error(err);
          initQuestions();
      });
});

//choose to ADD employee
//prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
const addEmp = () => inquirer.prompt([
  { type: "input", message: "What's the first name of the employee?", name: "firstName" },
  { type: "input", message: "What's the last name of the employee?", name: "lastName" },
  { type: "input", message: "What is the employee's role id number?", name: "roleID" },
  { type: "input", message: "What is the manager id number?", name: "managerID" }
]).then(answer => {
  // Use db.promise().execute for promise-based queries
  db.promise().execute("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)",
      [answer.firstName, answer.lastName, answer.roleID, answer.managerID])
      .then(([rows, fields]) => {
          console.table(rows);
          initQuestions();
      })
      .catch(err => {
          console.error(err);
          initQuestions();
      });
});

//choose to update an employee role
// prompted to select an employee to update and their new role and this information is updated in the database
// inquirer.prompt

const updateEmp = () => inquirer.prompt([
  { type: "input", message: "Which employee would you like to update?", name: "updateEmployee" },
  { type: "input", message: "What do you want to update to?", name: "updateRole" }
]).then(answer => {
  console.log("Updating employee:", answer.updateEmployee, "to role:", answer.updateRole);

  // Use the promise-based API for queries
  db.promise().execute('UPDATE employee SET role_id=? WHERE first_name= ?', [answer.updateRole, answer.updateEmployee])
      .then(([rows, fields]) => {
          console.table(rows);
          initQuestions();
      })
      .catch(err => {
          console.error(err);
          initQuestions();
      });
});

//view departments
const viewDepartment = () => db.promise().execute("SELECT * FROM department")
    .then(([rows, fields]) => {
        console.table(rows);
        initQuestions();
    })
    .catch(err => {
        console.error(err);
        initQuestions();
    });

//view roles
const viewRoles = () => db.promise().execute("SELECT * FROM role")
    .then(([rows, fields]) => {
        console.table(rows);
        initQuestions();
    })
    .catch(err => {
        console.error(err);
        initQuestions();
    });

// view employees
const viewEmp = () => db.promise().execute("SELECT * FROM employee")
    .then(([rows, fields]) => {
        console.table(rows);
        initQuestions();
    })
    .catch(err => {
        console.error(err);
        initQuestions();
    });