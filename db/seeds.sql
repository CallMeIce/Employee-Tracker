INSERT INTO department (dept_name)
VALUES ('Engineer'),
       ('Software Engineer'),
       ('Programmer'),
       ('Human Resources'),
       ('Manager');

INSERT INTO roles (title, salary, department_id)
VALUES ("Engineer", 150000, 1),
       ('Software Engineer', 125000, 2),
       ('Programmer', 100000, 3),
       ('Human Resources', 85000, 4),
       ('Manager', 115000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Bob", 'Test', 4, 1),
       ("Sarah", 'Test', 1, 2),
       ("Jim", 'Test', 5, 3),       
       ("Larry", 'Test', 3, 4),
       ("Nick", 'Test', 2, 5);