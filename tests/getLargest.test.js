const each = require("jest-each").default; // to get each to work

const getLargest = require("../getLargest");

// describe() does lots of other stuff :) & can be nested
describe("This is the getLargest() describe test", () => {
  test("getLargest is a function", () => {
    expect(typeof getLargest).toBe("function");
  });

  describe("it handles normal inputs successfully", () => {
    each([
      [[1, 2, 3], 3],
      [[9, 8, 7], 9],
      [[12, 36, 19], 36],
    ]).test("", (arr, expected) => {
      expect(getLargest(...arr)).toEqual(expected);
    });
  });
});
