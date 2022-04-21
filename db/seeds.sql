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
VALUES ("Bob", 'Test', 1, 1),
       ("Sarah", 'Best', 2, 2),
       ("Jim", 'Rest', 3, 3),       
       ("Larry", 'Crest', 4, 4),
       ("Nick", 'Nest', 5, 5);