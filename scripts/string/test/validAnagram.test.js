import { expect } from "chai";
import { isAnagram } from "../validAnagram.js";

describe("isAnagram", () => {
  it("should return true if the strings are anagrams", () => {
    expect(isAnagram("anagram", "nagaram")).to.be.true;
  });
  it("should return false if the strings are not anagrams", () => {
    expect(isAnagram("rat", "car")).to.be.false;
  });
  it("should return false if the strings are not the same length", () => {
    expect(isAnagram("a", "ab")).to.be.false;
  });
  it.skip("should return false if the strings are empty", () => {
    expect(isAnagram("", "")).to.be.false;
  });
  it.skip("should return false if the strings are null", () => {
    expect(isAnagram(null, null)).to.be.false;
  });
  it.skip("should return false if the strings are undefined", () => {
    expect(isAnagram(undefined, undefined)).to.be.false;
  });
  it("should return false if the strings are not strings", () => {
    expect(isAnagram(1, 2)).to.be.false;
  });
  it("should return false if the strings are not strings", () => {
    expect(isAnagram([], [])).to.be.false;
  });
  it("should return false if the strings are not strings", () => {
    expect(isAnagram({}, {})).to.be.false;
  });
  it("should return false if the strings are not strings", () => {
    expect(isAnagram(true, false)).to.be.false;
  });
});
