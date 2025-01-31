import { expect } from "chai";
import { majorityElementHash, majorityElementSort, majorityElementVoting } from "../majorityElement.js";

const testCase1 = [3, 2, 3]; // 3
const testCase2 = [2, 2, 1, 1, 1, 2, 2]; // 2

describe("majority element - sorting", () => {
  it("should return a number", () => {
    expect(majorityElementSort(testCase1)).not.NaN;
  });
  it("should return the majority element", () => {
    expect(majorityElementSort(testCase1)).to.deep.equal(3);
  });
  it("should return the majority element", () => {
    expect(majorityElementSort(testCase2)).to.deep.equal(2);
  });
});

describe("majority element - hash map", () => {
  it("should return a number", () => {
    expect(majorityElementHash(testCase1)).not.NaN;
  });
  it("should return the majority element", () => {
    expect(majorityElementHash(testCase1)).to.deep.equal(3);
  });
  it("should return the majority element", () => {
    expect(majorityElementHash(testCase2)).to.deep.equal(2);
  });
});

describe("majority element - Moore's voting algorithm", () => {
  it("should return a number", () => {
    expect(majorityElementVoting(testCase1)).not.NaN;
  });
  it("should return the majority element", () => {
    expect(majorityElementVoting(testCase1)).to.deep.equal(3);
  });
  it("should return the majority element", () => {
    expect(majorityElementVoting(testCase2)).to.deep.equal(2);
  });
});
