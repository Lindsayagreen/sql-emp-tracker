-- database-driven application, typically contains SQL statements to populate the databases withinital oor sample data. Seeding refers to the process of adding data to a database, and seeds diles are often used during the development or teating phases of an application to ensure tge database has some predefined data for testing or demonstration purposes
-- populates data into the tables defined in the schema.sql
-- this file uses the INSERT command 

INSERT INTO department (name)

VALUES ("Sales"), ("Engineering"), ("HR"), ("Operations");

INSERT INTO role (title, salary, department_id)

VALUES ("Director", 250000, 4),
("HR", 60000, 3),
("personality hire", 100000, 1),
("janitor", 85000, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)

VALUES ("Mark", "Walberg", 2, null),
("Jennifer", "Lawernce", 3, null),
("Ben", "Affleck", 4, null),
("Kris", "Jenner", 1, null);



