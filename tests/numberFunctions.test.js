const each = require("jest-each").default; // to get each to work

const numberFunctions = require("../numberFunctions");

// describe() does lots of other stuff :) & can be nested
describe("This is the numberFunctions() describe test", () => {
  test("numberFunctions is a function", () => {
    expect(typeof numberFunctions).toBe("function");
  });

  describe("it handles normal inputs successfully", () => {
    each([
      [[1, 2, 3], 3],
      [[9, 8, 7], 9],
      [[12, 36, 19], 36],
      // "%s -> %s" for putting placeholders test in test outputs in terminal
      // (arr, expected) are placeholders whilst the arguments are above
    ]).test("%s -> %s", (arr, expected) => {
      expect(numberFunctions(...arr)).toEqual(expected);
    });

    /*    
      - same as using "each()" as seen above:

    test("", () => {
      const result = numberFunctions(1, 2, 3);

      expect(result).toEqual(3);
    });

    test("", () => {
      const result = numberFunctions(3, 3, 3);

      expect(result).toEqual(3);
    });

    test("", () => {
      const result = numberFunctions(-1, -2, 3);

      expect(result).toEqual(3);
    });

    test("", () => {
      const result = numberFunctions(0.4, 1.5, 3);

      expect(result).toEqual(3);
    });
  });    
*/
  });

  /*
    - extra notes:
  test("numberFunctions func returns the largest value", () => {
    const result = numberFunctions(2, 2, 2);

    expect(result).toEqual(3);
  }); 
  */
});
