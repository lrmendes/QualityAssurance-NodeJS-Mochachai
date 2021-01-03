const chai = require("chai");
const assert = chai.assert;

const server = require("../server");

const chaiHttp = require("chai-http");
chai.use(chaiHttp);

suite("Functional Tests", function () {
  suite("Integration tests with chai-http", function () {
  // #2
  test("Test GET /hello with your name", function (done) {
    chai
      .request(server)
      .get("/hello?name=xy_z")
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.text, "hello xy_z");
        done();
      });
  });
  });
});
