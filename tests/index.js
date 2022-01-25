const supertest = require("supertest");
const test = require("unit.js");
const app = require("../app.js");

const request = supertest(app);

describe("GET /", function () {
  it("should respond with HTML", function (done) {
    request
      .get("/")
      .expect(200)
      .end(function (err, result) {
        test
          .value(result)
          .hasHeader("content-type", "text/html; charset=utf-8");
        done(err);
      });
  });
});
