const fs = require("fs");
const inquirer = require("inquirer");
const mysql2 = require("mysql2")
const express = ("express")
const connect = require('../db/connection')

function questionPrompts() {
    inquirer
        .prompt({
            type: "list",
            name: "choice",
            message: "What would you like to do?",
            choices: ["View All Employees", "Add Employee", "Update Employee Role", "View All Roles", "Add Role", "View All Departments", "Add Department"]
        }) 
            .then((data) => {
                switch (data[choice]) {
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
            })}
                
  
            const addDepartment = () => {
              inquirer
                  .prompt({
                      type: 'text',
                      name: 'departmentName',
                      message: 'Enter the Department name you would like to add:'
                  }).then ((answer) => {
                      connect.query ('INSERT INTO department (dept_name) VALUES (?)', answer.departmentName, (err, res) => {
                          if (err) throw (err)
                          console.log(answer.departmentName);
                          questionPrompts();
                      })
                  })
          }
          

questionPrompts();

module.exports = questionPrompts;