import { expect } from "chai";
import { isPalindrome } from "../validPalindrome.js";

describe("isPalindrome", () => {
  it("should return true for a palindrome", () => {
    expect(isPalindrome("A man, a plan, a canal: Panama")).to.be.true;
  });
  it("should return false for a non-palindrome", () => {
    expect(isPalindrome("race a car")).to.be.false;
  });
  it("should return true for an empty string", () => {
    expect(isPalindrome("")).to.be.true;
  });
  it("should return true for a single character", () => {
    expect(isPalindrome("a")).to.be.true;
  });
  it("should return true for a string with spaces", () => {
    expect(isPalindrome(" ")).to.be.true;
  });
  it("should return true for a string with numbers", () => {
    expect(isPalindrome("12321")).to.be.true;
  });
});
