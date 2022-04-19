const fs = require("fs");
const inquirer = require("inquirer");
const mysql2 = require("mysql2")
const express = ("express")
const connect = require('./db/connection')

function questionPrompts() {
  inquirer
    .prompt({
      type: "list",
      name: "choice",
      message: "What would you like to do?",
      choices: ["View All Employees", "Add Employee", "Update Employee Role", "View All Roles", "Add Role", "View All Departments", "Add Department"]
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
    })
}


const addDepartment = () => {
  inquirer
    .prompt([{
      type: 'input',
      name: 'departmentName',
      message: 'Enter the Department name you would like to add:'
    }]).then((answer) => {
      connect.query('INSERT INTO department (dept_name) VALUES (?)', answer.departmentName, (err, res) => {
        if (err) throw (err)
        console.log(answer.departmentName);
        questionPrompts();
      })
    })
}


const addRole = () => {
  inquirer
    .prompt({
      type: 'text',
      name: 'roleName',
      message: 'Enter the Role name you would like to add:'
    }).then((answer) => {
      connect.query('INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)', [answer.roleName, answer.salary, answer.department_id], (err, res) => {
        console.log(answer)
        if (err) throw (err)
        console.log(answer.roleName);
        questionPrompts();
      })
    })
}


const addEmployee = () => {
  inquirer
    .prompt({
      type: 'text',
      name: 'employeeName',
      message: 'Enter the Employee name you would like to add:'
    }).then((answer) => {
      connect.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', answer.employeeName, (err, res) => {
        if (err) throw (err)
        console.log(answer.employeeName);
        questionPrompts();
      })
    })
}

questionPrompts();

module.exports = questionPrompts;