DROP DATABASE IF EXISTS time_monitorDB;

CREATE DATABASE time_monitorDB;

USE time_monitorDB;

CREATE TABLE employees (
  id VARCHAR(45) NOT NULL,
  name VARCHAR(45) NOT NULL,
  dept VARCHAR(45) DEFAULT '' NOT NULL,
  title VARCHAR(45) DEFAULT '' NOT NULL,
  salary INT,
  PRIMARY KEY (id),
  KEY (name)
  );

CREATE TABLE timesheet (
  id INT NOT NULL AUTO_INCREMENT,
  employee_id VARCHAR(45) NOT NULL,
  date DATE NOT NULL,
  category VARCHAR(45) NULL,
  task VARCHAR(45) NULL,
  timeSpent INT NULL,
  program INT NOT NULL,
  notes VARCHAR(200) NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (employee_id) REFERENCES employees(id)
);

SELECT * FROM timesheet INNER JOIN employees ON employee_id = employees.id;

SELECT * FROM timesheet INNER JOIN employees ON employee_id = employees.id ORDER BY date DESC;
SELECT * FROM timesheet INNER JOIN employees ON employee_id = employees.id ORDER BY name;
