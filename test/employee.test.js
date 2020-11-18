//unit testing with mocha and chai
//included the following dependencies because mocha/chai didn't like jquery $
const assert = require('chai').assert;
const R = require('../models/employee');

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM(`...`);
const { document } = new JSDOM(`...`).window;
global.$ = require('jquery')(window);
global.document = document;


describe('field testing for employee entry', () => {
    let Employees = R;
    it('can employee function be generated for adding employee to db?', () => {
        //inside here Assert is used to see if test worked
       assert.isNotNull(Employees, "employee is not null")
    })
});