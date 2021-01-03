const chai = require("chai");
const assert = chai.assert;

const server = require("../server");

const chaiHttp = require("chai-http");
chai.use(chaiHttp);

const Browser = require("zombie");

Browser.site = 'https://boilerplate-mochachai-1.USERNAME.repl.co'; // Your URL here
//Browser.localhost('127.0.0.1', process.env.PORT || 3000);

const browser = new Browser();

suiteSetup(function(done) {
  return browser.visit('/', done);
});

suite("Functional Tests with Zombie.js", function () {
  suite('"Famous Italian Explorers" form', function () {
    // #5
    test('submit "surname" : "Colombo" - write your e2e test...', function (done) {
      browser.fill("surname", "Colombo").pressButton("submit", function () {
        browser.assert.success();
        browser.assert.text('span#name', 'Cristoforo');
        browser.assert.text('span#surname', 'Colombo');
        browser.assert.element('span#dates', 1);

        done();
      });
    });
  });
});