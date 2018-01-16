global.chai = require('chai');
global.expect = global.chai.expect;

// Read index.html file and load it within the JSDOM element
const fs = require('fs');
const indexDocument = fs.readFileSync('./build/index.html', {encoding: 'utf-8'});

const jsdom = require('jsdom-global');

// Define global.window.
global.window = jsdom(indexDocument).parentWindow;
console.log(global.window);

// Load test suites
require('./js/main.spec');