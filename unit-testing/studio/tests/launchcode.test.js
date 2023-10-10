// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function() {

    test("Launchcode should return an object", () => {
      expect(launchcode).toBeInstanceOf(Object);
    });
});