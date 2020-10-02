const combineArrays = require("../exercise-2");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 2", () => {
  expect(
    combineArrays(["crisp", "bacon"], ["zuchini", "apple"])
  ).toStrictEqual(["apple", "bacon", "crisp", "zuchini"]);
  // add more tests here...
  expect(
    combineArrays(["c", "b"], ["z", "a"])
  ).toStrictEqual(["a", "b", "c", "z"]);

  expect(
    combineArrays(["c", "b"], [23, "a"])
  ).toStrictEqual(undefined);

  expect(
    combineArrays(["c", "b"], true)
  ).toStrictEqual(undefined);

  expect(
    combineArrays(["mike", "frank"], ["baez", "a"])
  ).toStrictEqual([ 'a', 'baez', 'frank', 'mike' ] );
});
