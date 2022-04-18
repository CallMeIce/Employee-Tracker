const fs = require("fs");
const inquirer = require("inquirer");
const mysql2 = require("mysql2")
const express = ("express")

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
                
        // switch (expression) {
        //     case value1:
        //       Statements executed when the
        //       result of expression matches value1
        //       [break;]
        //     case value2:
        //       Statements executed when the
        //       result of expression matches value2
        //       [break;]
        //     ...
        //     case valueN:
        //       Statements executed when the
        //       result of expression matches valueN
        //       [break;]
        //     [default:
        //       Statements executed when none of
        //       the values match the value of the expression
        //       [break;]]
        //   }


questionPrompts();

module.exports = questionPrompts;