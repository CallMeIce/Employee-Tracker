const fs = require("fs");
const inquirer = require("inquirer");
const mysql2 = require("mysql2")
const express = ("express")

function questionPrompts() {
    inquirer
        .prompt({
            type: "list",
            name: "employeeTitle",
            message: "What would you like to do?",
            choices: ["View All Employees", "Add Employee", "Update Employee Role", "View All Roles", "Add Role", "View All Departments", "Add Department"]
        }) 
            .then((answer) => {
                switch (expression) {
                    case "View All Employees":
                      //Statements executed when the
                      //result of expression matches value1
                      [break;]
                    case "Add Employee":
                      //Statements executed when the
                      //result of expression matches value2
                      [break;]
                    
                    case "Update Employee Role":
                      //Statements executed when the
                      //result of expression matches valueN
                      [break;]
                    case "View All Roles"
                      //Statements executed when none of
                      //the values match the value of the expression
                      [break;]
                    case "Add Role":
                      //Statements executed when the
                      //result of expression matches value2
                      [break;]
                    
                    case "View All Departments":
                      //Statements executed when the
                      //result of expression matches valueN
                      [break;]
                    case "Add Department"
                      //Statements executed when none of
                      //the values match the value of the expression
                      [break;]
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

module.exports = teamBuilder;