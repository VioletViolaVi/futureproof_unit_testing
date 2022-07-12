const { fizzBuzz } = require("../exercises/fizzbuzz"); // imports fizzbuzz.js
const each = require("jest-each").default;

describe("This is the FizzBuzz test", () => {
  // tests FizzBuzz is a function
  test("To prove FizzBuzz is a function ", () => {
    expect(typeof fizzBuzz).toBe("function");
  });

  // The fizzbuzz function receives an argument of a number
  test("Ensures fizzbuzz() receives a num as argument", () => {
    expect(typeof 5).toBe("number");
  });

  // tests examples of parameter/arguments & their return values
  each([
    [15, "FizzBuzz"],
    [3, "Fizz"],
    [5, "Buzz"],
    [11, 11],
  ]).test("%s -> %s", (numPassed, expectedStr) => {
    expect(fizzBuzz(numPassed)).toEqual(expectedStr);
  });
});
