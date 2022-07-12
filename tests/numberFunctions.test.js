const each = require("jest-each").default; // to get each to work

const { getLargest, getSmallest } = require("../numberFunctions");
/*
  - same as above:
  const getLargest = numberFunctions.getLargest
  const getSmallest = numberFunctions.getSmallest 
*/

/* describe() does lots of other stuff & can be nested */

// test for getLargest()
describe("This is the getLargest() describe test", () => {
  test("getLargest() is a function", () => {
    expect(typeof getLargest).toBe("function");
  });

  describe("it handles normal inputs successfully", () => {
    test("it throws error if 1 of 3 inputs are undefined", () => {
      expect(() => {
        getLargest(1, 2);
      }).toThrow("ERROR: all inputs must have a value");
    });

    // test for getLargest()
    each([
      [[1, 2, 3], 3],
      [[9, 8, 7], 9],
      [[12, 36, 19], 36],
      /* 
        - "%s -> %s" for putting placeholders test in test outputs in terminal
        - (arr, expected) are placeholders whilst the arguments are above 
      */
    ]).test("%s -> %s", (arr, expected) => {
      expect(getLargest(...arr)).toEqual(expected);
    });

    /*    
      - same as using "each()" (as seen above):

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

// test for getSmallest()
describe("This is the getSmallest() describe test", () => {
  test("getSmallest() is a function", () => {
    expect(typeof getSmallest).toBe("function");
  });

  describe("This is the getSmallest() describe test", () => {
    each([
      [[1, 2, 3], 1],
      [[9, 8, 7], 7],
      [[12, 36, 19], 12],
    ]).test("%s -> %s", (arr, expected) => {
      expect(getSmallest(...arr)).toEqual(expected);
    });

    test("it throws error if 1 of 3 inputs are undefined", () => {
      expect(() => {
        getSmallest(1, 2);
      }).toThrow("ERROR: all inputs must have a value");
    });
  });
});
