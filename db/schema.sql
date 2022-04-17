DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;


--TODO WHEN I start the application. THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role


USE employee_db;

CREATE TABLE department (
  id: INT NOT NULL AUTO_INCREMENT,
  first_name: VARCHAR(30)
);

--TODO NAME OF DEPARTMENT,

CREATE TABLE roles (
  id: INT NOT NULL AUTO_INCREMENT PRIMARY KEY(id),
  title: VARCHAR(30) NOT NULL,
  salary: INT NOT NULL,
  department_id: INT NOT NULL,
  ON DELETE SET NULL
);

-- TODO NAME OF ROLE, SALARY OF ROLE, DEPARTMENT OF ROLE

CREATE TABLE employee (
  id: INT PRIMARY KEY,
  first_name: VARCHAR(30) NOT NULL,
  last_name:  VARCHAR(30) NOT NULL,
  role_id: TEXT,
  manager_id: INT NULL,
  ON DELETE SET NULL
);
