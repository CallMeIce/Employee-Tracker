const fs = require("fs");
const inquirer = require("inquirer");
const mysql2 = require("mysql2")
const express = ("express")

function () {
    inquirer
        .prompt([{
            type: "list",
            name: "employeeTitle",
            message: "What would you like to do?",
            choices: ["View All Employees", "Add Employee", "Update Employee Role", "Add Employee Role", "View All Roles", "View All Departments", "Add Department", "View All Employees", "Exit" ]
        }

        ]).then((answer) => {
            if (answer.employeeTitle === "Engineer") {
                //* Call engineer function
                function engineerCard() {
                    inquirer
                        .prompt([
                            {
                                type: "input",
                                name: "name",
                                message: "What is your engineer's name?",
                            },
                            {
                                type: "input",
                                name: "id",
                                message: "What is your engineer's id?",
                            },
                            {
                                type: "input",
                                name: "email",
                                message: "What is your engineer's email?",
                            },
                            {
                                type: "input",
                                name: "github",
                                message: "Engineer's GitHub Profile:",
                            }
                        ]).then((answer) => {
                            //obj creation
                            console.log("this is the data for engineer", Engineer);
                            let engineerDiv = `          <div class="card" style="width: 18rem;">
                            <div class="card-header">
                              Engineer
                            </div>
                            <ul class="list-group list-group-flush">
                              <li class="list-group-item">${answer.name}</li>
                              <li class="list-group-item">${answer.id}</li>
                              <li class="list-group-item"><a href="${answer.email}">${answer.email}</a></li>
                              <li class="list-group-item"><a href="www.github.com/${answer.github}">www.github.com/${answer.github}</a></li>
                            </ul>
                            </div>`
                            console.log(engineerDiv);
                            teamCreation.push(engineerDiv);
                            teamBuilder();
                            console.log(teamCreation);
                            console.log(answer);
                        })
                }
                engineerCard();
            } else if (answer.employeeTitle === "Intern") {
                //*Call intern function
                function internCard() {
                    inquirer
                        .prompt([
                            {
                                type: "input",
                                name: "name",
                                message: "What is your intern's name?",
                            },
                            {
                                type: "input",
                                name: "id",
                                message: "What is your intern's id?",
                            },
                            {
                                type: "input",
                                name: "email",
                                message: "What is your intern's email?",
                            },
                            {
                                type: "input",
                                name: "school",
                                message: "What is your intern's school name?:",
                            }
                        ]).then((answer) => {
                            //obj creation

                            console.log(Intern);
                            let internDiv = `          <div class="card" style="width: 18rem;">
                            <div class="card-header">
                              Intern
                            </div>
                            <ul class="list-group list-group-flush">
                              <li class="list-group-item">${answer.name}</li>
                              <li class="list-group-item">${answer.id}</li>
                              <li class="list-group-item"><a href="${answer.email}">${answer.email}</a></li>
                              <li class="list-group-item">${answer.school}</li>
                            </ul>
                            </div>`
                            console.log(internDiv);
                            teamCreation.push(internDiv);
                            teamBuilder();
                        })
                }
                internCard();
            } else if (answer.employeeTitle === 'Manager') {
                function managerCard() {
                    inquirer
                        .prompt([
                            {
                                type: "input",
                                name: "name",
                                message: "What is your manager's name?",
                            },
                            {
                                type: "input",
                                name: "id",
                                message: "What is your manager's id?",
                            },
                            {
                                type: "input",
                                name: "email",
                                message: "What is your manager's email?",
                            },
                            {
                                type: "input",
                                name: "officeNumber",
                                message: "Manager's Office Number:",
                            }])
                        .then((answer) => {
                            const manager = new Manager(
                                answer.name, answer.id, answer.email, answer.officeNumber
                            )
                            console.log(manager);
                            let managerDiv = `          <div class="card" style="width: 18rem;">
                            <div class="card-header">
                              Manager
                            </div>
                            <ul class="list-group list-group-flush">
                              <li class="list-group-item">${answer.name}</li>
                              <li class="list-group-item">${answer.id}</li>
                              <li class="list-group-item"><a href="${answer.email}">${answer.email}</a></li>
                              <li class="list-group-item">${answer.officeNumber}</li>
                            </ul>
                            </div>`
                            console.log(managerDiv);
                            teamCreation.push(managerDiv);
                            teamBuilder();
                        });
                }
                managerCard();
            } else if (answer.employeeTitle === 'Done') {
                console.log("-----------", teamCreation);
                //*Call the done and write everything to html file
                fs.writeFile("cards.html", markdown (teamCreation), (err) => err ? console.log(err) : console.log("Success"))
            }
        })
}

teamBuilder();

module.exports = teamBuilder;