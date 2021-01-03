const chai = require("chai");
const assert = chai.assert;

const server = require("../server");

const chaiHttp = require("chai-http");
chai.use(chaiHttp);

suite("Functional Tests", function () {
  suite("Integration tests with chai-http", function () {
    // #4
    test('send {surname: "da Verrazzano"}', function (done) {
      chai
        .request(server)
        .put("/travellers")
        .send({"surname": "da Verrazzano"})
        .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.type, 'application/json');
            assert.equal(res.body.name, 'Giovanni');
            assert.equal(res.body.surname, 'da Verrazzano');

            assert.typeOf(res.body.name, 'string');
            assert.typeOf(res.body.surname, 'string');
        })

      done();
    });
  });
});
