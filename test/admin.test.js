/* // unit testing with mocha and chai
// included the following dependencies because mocha/chai didn't like jquery $

// add this to corresponding js file
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM(`...`);
const { document } = new JSDOM(`...`).window;
global.$ = require('jquery')(window);
global.document = document; 

// add this to corresponding test file

const assert = require('chai').assert;
const R = require('../public/assets/js/admin');

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM(`...`);
const { document } = new JSDOM(`...`).window;
global.$ = require('jquery')(window);
global.document = document;


describe('field test for form submit handler', () => {
    it('does form submission to db work?', () => {
        //inside here Assert is used to see if test worked
        assert.isObject(R(), 'object');
    })
}) */