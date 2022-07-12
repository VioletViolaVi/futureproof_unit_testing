const { fizzBuzz } = require("../fizzbuzz"); // imports fizzbuzz.js
const each = require("jest-each").default;

describe("This is the FizzBuzz test", () => {
  // checks fizzBuzz() is a function
  describe("Proving to be a function", () => {
    test("To prove FizzBuzz is a function ", () => {
      expect(typeof fizzBuzz).toBe("function");
    });
  });

  // checks examples of parameter/arguments & their return values
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

  // checks fizzBuzz() returns "FizzBuzz" when multiple of 3 & 5
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

  // checks fizzBuzz() returns "“Fizz”" when multiple of 3
  describe("Returning Fizz Only", () => {
    each([3, 9, 12, 27]).test("%s can be divided by 3", (multipleOf3) => {
      expect(fizzBuzz(multipleOf3)).toEqual("Fizz");
    });
  });

  // checks fizzBuzz() returns "Buzz" when multiple of 5
  describe("Returning Buzz Only", () => {
    each([[5], [115], [85], [55]]).test(
      "%s can be divided by 5",
      (multipleOf5) => {
        expect(fizzBuzz(multipleOf5)).toEqual("Buzz");
      }
    );
  });

  // checks fizzBuzz() returns num passed through when not a multiple of 3 and/or 5
  describe("Returning the num itself", () => {
    test("11 is not a multiple of 3 or 4", () => {
      expect(fizzBuzz(11)).toBe(11);
    });

    test("43 is not a multiple of 3 or 4", () => {
      expect(fizzBuzz(43)).toEqual(43);
    });
  });

  // checks fizzBuzz() returns anything else which is not a number stating such
  describe("Returning data that are not numbers", () => {
    test("apple is not a number", () => {
      expect(fizzBuzz("apple")).toBe("Not valid, please use a number");
    });

    test("happy is not a number", () => {
      expect(fizzBuzz("happy")).toEqual("Not valid, please use a number");
    });
  });
});
