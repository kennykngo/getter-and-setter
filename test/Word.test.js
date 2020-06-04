const Word = require("../util/Word");

describe("Word", () => {
  describe("Success", () => {
    it("Should create a new word object with the word set to arguement", () => {
      const testWord = new Word("test");
      expect(testWord).toEqual({ word: "test" });
    });

    describe("Word", () => {
      it("Should return word", () => {
        const testWord = new Word("test");
        expect(testWord.getWord).toBe("test");
      });
    });
  });

  describe("");
});
