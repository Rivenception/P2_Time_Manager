DROP DATABASE IF EXISTS time_monitorDB;

CREATE DATABASE time_monitorDB;

USE time_monitorDB;

CREATE TABLE employees (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) NOT NULL,
  dept VARCHAR(45) DEFAULT '' NOT NULL,
  PRIMARY KEY (id)
  );

CREATE TABLE timesheet (
  id INT NOT NULL AUTO_INCREMENT,
  employee_name VARCHAR(45) NOT NULL,
  date VARCHAR(45) NULL,
  resource VARCHAR(45) NULL,
  timeSpent INT NULL,
  notes VARCHAR(200) NULL,
  employee_id int NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (employee_id) REFERENCES employees(id)
);

SELECT * FROM employees;