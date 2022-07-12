const each = require("jest-each").default; // to get each to work

const getLargest = require("../numberFunctions");

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
      // "%s -> %s" for putting placeholders test in test outputs in terminal
      // (arr, expected) are placeholders whilst the arguments are above
    ]).test("%s -> %s", (arr, expected) => {
      expect(getLargest(...arr)).toEqual(expected);
    });

    /*    
      - same as using "each()" as seen above:

    test("", () => {
      const result = getLargest(1, 2, 3);

      expect(result).toEqual(3);
    });

    test("", () => {
      const result = getLargest(3, 3, 3);

      expect(result).toEqual(3);
    });

    test("", () => {
      const result = getLargest(-1, -2, 3);

      expect(result).toEqual(3);
    });

    test("", () => {
      const result = getLargest(0.4, 1.5, 3);

      expect(result).toEqual(3);
    });
  });    
*/
  });

  /*
    - extra notes:
  test("getLargest func returns the largest value", () => {
    const result = getLargest(2, 2, 2);

    expect(result).toEqual(3);
  }); 
  */
});
