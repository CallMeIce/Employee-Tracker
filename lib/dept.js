// const { text } = require('express')
// const res = require('express/lib/response')
// const inquirer = require('inquirer')
// const mysql2 = require('mysql2')
// const connect = require('../db/connection')


// //TODO WHEN I choose to add a department
// //TODO THEN I am prompted to enter the name of the department and that department is added to the database

// const addDepartment = () => {
//     inquirer
//         .prompt({
//             type: 'text',
//             name: 'departmentName',
//             message: 'Enter the Department name you would like to add:'
//         }).then ((answer) => {
//             connect.query ('INSERT INTO department (dept_name) VALUES (?)', answer.departmentName, (err, res) => {
//                 if (err) throw (err)
//                 console.log(answer.departmentName);
//             })
//         })
// }

// addDepartment();
//TODO WHEN I choose to view all departments
//TODO THEN I am presented with a formatted table showing department names and department id
