const Word = require("../util/Word");

describe("Word", () => {
  describe("Success", () => {
    it("Should create a new word object with the word set to arguement", () => {
      const testWord = new Word("test");
      expect(testWord).toEqual({ word: "test" });
    });
  });

  describe("getWord", () => {
    it("Should return word", () => {
      const testWord = new Word("test");
      expect(testWord.getWord).toBe("test");
    });
  });

  describe("setWord", () => {
    it("Should set the word to the argument that was passed", () => {
      const testWord = new Word("test");
      testWord.setWord = "thing";
      expect(testWord).toEqual({ word: "thing" });
    });
  });

  describe("rev", () => {
    it("Should return a new object with the initial word reverse", () => {
      const testWord = new Word("test");
      expect(testWord.rev).toEqual({ word: "tset" });
    });
  });

  describe("cap", () => {
    it("Should return a new word with the text capitalized", () => {
      const testWord = new Word("test");
      expect(testWord.cap).toEqual({ word: "TEST" });
    });
  });

  describe("isPal", () => {
    it("Should return a word that can be reversed", () => {
      const testWord = new Word("dad");
      const testWord2 = new Word("test");

      expect(testWord.isPal).toBe(true);
      expect(testWord2.isPal).toBe(false);
    });
  });
});
