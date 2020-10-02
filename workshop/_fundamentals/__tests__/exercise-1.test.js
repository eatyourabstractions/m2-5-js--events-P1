const letterCount = require("../exercise-1");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 1", () => {
  expect(letterCount(["crisp", "bacon"])).toBe(10);
  // add more tests here...
  expect(letterCount(["mike", "francisco", "matos", "baez"])).toBe(22);
  expect(letterCount(42)).toBe(undefined);
  expect(letterCount(["mike", "francisco", true, "baez"])).toBe(undefined);
  
});
