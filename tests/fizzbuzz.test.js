const { fizzBuzz } = require("../exercises/fizzbuzz"); // imports fizzbuzz.js
const each = require("jest-each").default;

describe("This is the FizzBuzz test", () => {
  // tests fizzBuzz() is a function
  describe("Proving to be a function", () => {
    test("To prove FizzBuzz is a function ", () => {
      expect(typeof fizzBuzz).toBe("function");
    });
  });

  // tests examples of parameter/arguments & their return values
  describe("Number argument examples for testing", () => {
    each([
      [15, "FizzBuzz"],
      [3, "Fizz"],
      [5, "Buzz"],
      [11, 11],
    ]).test("%s -> %s", (numPassed, expectedStr) => {
      expect(fizzBuzz(numPassed)).toEqual(expectedStr);
    });
  });

  // tests fizzBuzz() returns "FizzBuzz" when multiple of 3 & 5
  describe("Returning FizzBuzz Only", () => {
    test('1st test: ensures fizzbuzz() returns "FizzBuzz" when multiple of 3 & 5', () => {
      expect(fizzBuzz(15)).toEqual("FizzBuzz");
    });

    test('2nd test: Ensures fizzbuzz() returns "FizzBuzz" when multiple of 3 & 5', () => {
      expect(fizzBuzz(30)).toEqual("FizzBuzz");
    });

    test('3rd test: Ensures fizzbuzz() returns "FizzBuzz" when multiple of 3 & 5', () => {
      expect(fizzBuzz(45)).toEqual("FizzBuzz");
    });

    test('4th test: Ensures fizzbuzz() returns "FizzBuzz" when multiple of 3 & 5', () => {
      expect(fizzBuzz(90)).toEqual("FizzBuzz");
    });
  });

  // tests fizzBuzz() returns "“Fizz”" when multiple of 3
  describe("Returning Fizz Only", () => {
    each([3, 9, 12, 27]).test("%s can be divided by 3", (multipleOf3) => {
      expect(fizzBuzz(multipleOf3)).toEqual("Fizz");
    });
  });
});
