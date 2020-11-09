INSERT INTO employees (id, name, dept, title, salary) VALUES ('rmingione', 'Rick Mingione', 'Program Management', 'Sr. Program Manager', 70000);
INSERT INTO employees (id, name, dept, title, salary) VALUES ('flucena', 'Fernando Lucena', 'Engineering', 'Engineer', 70000);
INSERT INTO employees (id, name, dept, title, salary) VALUES ('bpatel', 'Bhaumik Patel', 'Engineering', 'Engineering Manager', 70000);

INSERT INTO timesheet (employee_id, date, category, task, timeSpent, program, notes) VALUES ('rmingione', '20/11/07', 'Program Management', 'Admin', 30, 99999, 'test note');
INSERT INTO timesheet (employee_id, date, category, task, timeSpent, program, notes) VALUES ('rmingione', '20/11/04', 'Program Management', 'Meeting', 30, 99999, 'test note');
INSERT INTO timesheet (employee_id, date, category, task, timeSpent, program, notes) VALUES ('rmingione', '20/11/05', 'Program Management', 'Planning', 30, 99999, 'test note');
INSERT INTO timesheet (employee_id, date, category, task, timeSpent, program, notes) VALUES ('rmingione', '20/11/02', 'Program Management', 'Emails', 30, 99999, 'test note');
INSERT INTO timesheet (employee_id, date, category, task, timeSpent, program, notes) VALUES ('flucena', '20/11/06', 'ECR', 'Admin', 30, 99999, 'test note');
INSERT INTO timesheet (employee_id, date, category, task, timeSpent, program, notes) VALUES ('flucena', '20/11/06', 'Development', 'Meeting', 30, 99999, 'test note');
INSERT INTO timesheet (employee_id, date, category, task, timeSpent, program, notes) VALUES ('flucena', '20/11/04', 'Non-Development', 'Planning', 30, 99999, 'test note');
INSERT INTO timesheet (employee_id, date, category, task, timeSpent, program, notes) VALUES ('flucena', '20/11/04', 'Non-Development', 'Emails', 30, 99999, 'test note');
INSERT INTO timesheet (employee_id, date, category, task, timeSpent, program, notes) VALUES ('bpatel', '20/11/02', 'Non-Development', 'Admin', 30, 99999, 'test note');
INSERT INTO timesheet (employee_id, date, category, task, timeSpent, program, notes) VALUES ('bpatel', '20/11/01', 'Non-Development', 'Meeting', 30, 99999, 'test note');
INSERT INTO timesheet (employee_id, date, category, task, timeSpent, program, notes) VALUES ('bpatel', '20/11/03', 'Development', 'Planning', 30, 99999, 'test note');
INSERT INTO timesheet (employee_id, date, category, task, timeSpent, program, notes) VALUES ('bpatel', '20/11/04', 'Non-Development', 'Emails', 30, 99999, 'test note');