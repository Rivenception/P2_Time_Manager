INSERT INTO employees (name, employee_id, dept, title, salary) VALUES ('Rick Mingione', 'rmingione', 'Program Management', 'Sr. Program Manager', 70000);
INSERT INTO employees (name, employee_id, dept, title, salary) VALUES ('Fernando Lucena', 'flucena', 'Engineering', 'Engineer', 70000);
INSERT INTO employees (name, employee_id, dept, title, salary) VALUES ('Bhaumik Patel', 'bpatel', 'Engineering', 'Engineering Manager', 70000);
INSERT INTO employees (name, employee_id, dept, title, status, salary) VALUES ('Andrew Groover', 'agroover', 'Engineering', 'Engineer', 'Inactive', 70000);

INSERT INTO timesheets (name, date, category, task, timeSpent, program, ecr, notes, FKname) VALUES ('Rick Mingione', '20/11/07', 'Program Management', 'Admin', 30, "5924", null, 'test note', 'Rick Mingione');
INSERT INTO timesheets (name, date, category, task, timeSpent, program, ecr, notes, FKname) VALUES ('Rick Mingione', '20/11/04', 'Program Management', 'Meeting', 30, "99999", "19562", 'test note', 'Rick Mingione');
INSERT INTO timesheets (name, date, category, task, timeSpent, program, ecr, notes, FKname) VALUES ('Rick Mingione', '20/11/05', 'Program Management', 'Planning', 30, "99999", null, 'test note', 'Rick Mingione');
INSERT INTO timesheets (name, date, category, task, timeSpent, program, ecr, notes, FKname) VALUES ('Rick Mingione', '20/11/02', 'Program Management', 'Emails', 30, "5924", null, 'test note', 'Rick Mingione');
INSERT INTO timesheets (name, date, category, task, timeSpent, program, ecr, notes, FKname) VALUES ('Fernando Lucena', '20/11/06', 'ECR', 'Admin', 30, "99999", null, 'test note', 'Fernando Lucena');
INSERT INTO timesheets (name, date, category, task, timeSpent, program, ecr, notes, FKname) VALUES ('Fernando Lucena', '20/11/06', 'Development', 'Meeting', 30, "99999", "19562", 'test note', 'Fernando Lucena');
INSERT INTO timesheets (name, date, category, task, timeSpent, program, ecr, notes, FKname) VALUES ('Fernando Lucena', '20/11/04', 'Non-Development', 'Planning', 30, "5924", null, 'test note', 'Fernando Lucena');
INSERT INTO timesheets (name, date, category, task, timeSpent, program, ecr, notes, FKname) VALUES ('Fernando Lucena', '20/11/04', 'Non-Development', 'Emails', 30, "99999", "19542", 'test note', 'Fernando Lucena');
INSERT INTO timesheets (name, date, category, task, timeSpent, program, ecr, notes, FKname) VALUES ('Bhaumik Patel', '20/11/02', 'Non-Development', 'Admin', 30, "5924", null, 'test note', 'Bhaumik Patel');
INSERT INTO timesheets (name, date, category, task, timeSpent, program, ecr, notes, FKname) VALUES ('Bhaumik Patel', '20/11/01', 'Non-Development', 'Meeting', 30, "99999", "19999", 'test note', 'Bhaumik Patel');
INSERT INTO timesheets (name, date, category, task, timeSpent, program, ecr, notes, FKname) VALUES ('Bhaumik Patel', '20/11/03', 'Development', 'Planning', 30, "5924", null, 'test note', 'Bhaumik Patel');
INSERT INTO timesheets (name, date, category, task, timeSpent, program, ecr, notes, FKname) VALUES ('Bhaumik Patel', '20/11/04', 'Non-Development', 'Emails', 30, "99999", "19999", 'test note', 'Bhaumik Patel');
