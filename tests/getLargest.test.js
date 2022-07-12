const getLargest = require("../getLargest");

// describe() does lots of other stuff :)
// can be nested
describe("getLargest describing test", () => {
  test("getLargest is a function", () => {
    expect(typeof getLargest).toBe("function");
  });

  describe("it handles normal inputs successfully", () => {
    each([
      [[1, 2, 3], 3],
      [[9, 8, 7], 9],
      [[12, 36, 19], 36],
    ]).test("", () => {
      expect(getLargest(arr).toEqual(expected));
    });

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

  test("getLargest func returns the largest value", () => {
    const result = getLargest(1, 2, 3);

    expect(result).toEqual(3);
  });

  test("getLargest func returns the largest value", () => {
    const result = getLargest(2, 2, 2);

    expect(result).toEqual(3);
  });
});
