import { expect } from "chai";
import { canConstruct } from "../ransomNote.js";

describe("canConstruct", () => {
  it("should return false", () => {
    const magazine = "a";
    const ransomNote = "b";
    expect(canConstruct(ransomNote, magazine)).to.be.false;
  });
  it("should return false", () => {
    const magazine = "aa";
    const ransomNote = "ab";
    expect(canConstruct(ransomNote, magazine)).to.be.false;
  });
  it("should return true", () => {
    const magazine = "aab";
    const ransomNote = "aa";
    expect(canConstruct(ransomNote, magazine)).to.be.true;
  });
});
