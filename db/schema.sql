-- file typically used to define the structure and organization of a database.
-- contains SQL statements that create tables, defines relationships between tables, data types, and other info involving data.

DROP DATABASE IF EXISTS emplist_db;

CREATE DATABASE emplist_db;

USE emplist_db;
-- command used to specify which database should be the current or default database for the current database session.


CREATE TABLE department (
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
title VARCHAR(30) NOT NULL,
salary DECIMAL,
department_id INT,
FOREIGN KEY (department_id) REFERENCES department (id) ON DELETE SET NULL
);

CREATE TABLE employee (
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
first_name VARCHAR(30),
last_name VARCHAR (30),
role_id INT,
FOREIGN KEY (role_id) REFERENCES role (id) ON DELETE SET NULL,
manager_id INT,
FOREIGN KEY (manager_id) REFERENCES employee (id) ON DELETE SET NULL
);

