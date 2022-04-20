const fs = require("fs");
const inquirer = require("inquirer");
const mysql2 = require("mysql2");
const connect = require("./db/connection");
const table = require("console.table");
const Connection = require("mysql2/typings/mysql/lib/Connection");

function questionPrompts() {
  inquirer
    .prompt({
      type: "list",
      name: "choice",
      message: "What would you like to do?",
      choices: [
        "View All Employees",
        "Add Employee",
        "Update Employee Role",
        "View All Roles",
        "Add Role",
        "View All Departments",
        "Add Department",
      ],
    })
    .then((answer) => {
      switch (answer.choice) {
        case "View All Employees":
          viewAllEmployees();
          break;
        case "Add Employee":
          addEmployee();
          break;
        case "Update Employee Role":
          updateEmployeeRole();
          break;
        case "View All Roles":
          viewAllRoles();
          break;
        case "Add Role":
          addRole();
          break;
        case "View All Departments":
          viewAllDepartments();
          break;
        case "Add Department":
          addDepartment();
          break;
      }
    });
}

const addDepartment = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "departmentName",
        message: "Enter the Department name you would like to add:",
      },
    ])
    .then((answer) => {
      connect.query(
        "INSERT INTO department (dept_name) VALUES (?)",
        answer.departmentName,
        (err, res) => {
          if (err) throw err;
          console.log(answer.departmentName);
          questionPrompts();
        }
      );
    });
};

const viewAllDepartments = () => {
  connect.query("SELECT * FROM department", (err, res) => {
    if (err) throw err;
    console.table(res);
    questionPrompts();
  });
};

const addRole = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "Enter the Role name you would like to add:",
      },
      {
        type: "input",
        name: "salary",
        message: "Enter the salary for this role:",
      },
      {
        type: "input",
        name: "department_id",
        message: "Enter the department id you would like to add:",
      }
    ])
    .then((answer) => {
      connect.query(
        "INSERT INTO roles (roles.title, roles.salary, roles.department_id) VALUES (?, ?, ?)",
        [answer.title, answer.salary, answer.department_id],
        (err, res) => {
          console.log(answer);
          if (err) throw err;
          console.log(answer.title, answer.salary, answer.department_id);
          questionPrompts();
        }
      );
    });
};

const viewAllRoles = () => {
  connect.query("SELECT * FROM roles", (err, res) => {
    if (err) throw err;
    console.table(res);
    questionPrompts();
  });
};

const addEmployee = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "first_name",
        message: "Employee's first name:",
      },
      {
        type: "input",
        name: "last_name",
        message: "Employee's last name:",
      },
      {
        type: "input",
        name: "role_id",
        message: "Employee's role id:",
      },
      {
        type: "input",
        name: "manager_id",
        message: "Employee's manager id (if any):",
      }
    ])
    .then((answer) => {
      connect.query(
        "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)",
        [answer.first_name, answer.last_name, answer.role_id, answer.manager_id],
        (err, res) => {
          console.log(answer);
          if (err) throw err;
          console.log(answer.first_name, answer.last_name, answer.role_id, answer.manager_id);
          questionPrompts();
        }
      );
    });
};
const viewAllEmployees = () => {
  connect.query("SELECT * FROM employee INNER JOIN roles on roles.id = employee.id INNER JOIN department on department.id = roles.id", (err, res) => {
    if (err) throw err;
    console.table(res);
    questionPrompts();
  });
};

const updateEmployeeRole = () => {
  connection,query("SELECT * FROM employee WHERE id = ?",  (err, res) => {
  if (err) throw err;
})

// SELECT 
//     firstname, 
//     lastname, 
//     email
// FROM
//     employees
// WHERE
//     employeeNumber = 1056;


};

questionPrompts();

module.exports = questionPrompts;