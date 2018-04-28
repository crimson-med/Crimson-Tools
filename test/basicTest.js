const expect = require("chai").expect;
const crimsonTools = require("./../app.js")

describe("getProxies()", function() {

  it("Should return an ip (ip format) and a port (number max 5 length)", function(done) {
    this.timeout(10000);
    crimsonTools.getProxies(1, "us", false).then((result) => {
      expect(result[0].ip).to.match(/(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})/g);
      expect(result[0].port).to.match(/(\d{1,5})/g);
      done();
    });
  });
});
