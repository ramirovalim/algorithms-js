// import { expect } from "chai";
// import repetitionCounter from "../bit-complete-interview.js";

// /*
//   Test cases
//   - repetitionCounter("");
//   - empty string
//   - non alphanumerical character
//   - number
//   - very long text
//   - string with spaces between
//   - null or undefined -> objects, functions
//   - no repeating characters, abababa
//   - unique repeating character
//   - a single character
// */

// describe("repetitionCounter", () => {
//   it("should return the number of times each element appears in the array", () => {
//     const input = "aaabbdcccaaaa";
//     const expectedOutput = "3a2b1d3c4a";
//     expect(repetitionCounter(input)).to.deep.equal(expectedOutput);
//   });
//   it("should handle an empty array", () => {
//     const input = " ";
//     const expectedOutput = "";
//     expect(repetitionCounter(input)).to.deep.equal(expectedOutput);
//   });
//   it("should handle an array with one element", () => {
//     const input = "a";
//     const expectedOutput = "1a";
//     expect(repetitionCounter(input)).to.deep.equal(expectedOutput);
//   });
//   it("should handle an array with all unique elements", () => {
//     const input = "abcde";
//     const expectedOutput = "1a1b1c1d1e";
//     expect(repetitionCounter(input)).to.deep.equal(expectedOutput);
//   });
// });
