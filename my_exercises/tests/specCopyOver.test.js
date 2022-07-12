// 5. Update to pass tests
const adoptionHelpers = require("../mainCopyOver");

describe("Adopt a Friend", () => {
  describe("catName", () => {
    const catName = adoptionHelpers.catName;

    it("should not be undefined", () => {
      expect(catName).toBeDefined();
    });

    it("should store a string", () => {
      expect(catName).toEqual(expect.any(String));
    });

    it('should be declared as "Zelda"', () => {
      expect(catName).toEqual("Zelda");
    });

    it("should not be able to be updated", () => {
      expect(() => adoptionHelpers.rename("Bob")).toThrow(TypeError);
    });
  });

  describe("takeMeHome", () => {
    it("updates the cat location", () => {
      expect(() => adoptionHelpers.takeMeHome()).not.toThrow(TypeError);
    });

    it("returns the cat's new location", () => {
      expect(adoptionHelpers.takeMeHome()).toEqual("Cornwall");
    });
  });
});
