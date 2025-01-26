import { expect } from "chai";
import { maxProfit, slidingWindowMaxProfit } from "../bestPriceOfStock.js";

describe("maxProfit", () => {
  it("should return max profit", () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).to.equal(5);
  });
  it("should return 0 if array is sorted in descending order", () => {
    expect(maxProfit([7, 6, 4, 3, 1])).to.equal(0);
  });
  it("should return 0 if array has one element", () => {
    expect(maxProfit([1])).to.equal(0);
  });
  it("should return 0 if array is empty", () => {
    expect(maxProfit([])).to.equal(0);
  });
  it("should return max profit if array is sorted in ascending order", () => {
    expect(slidingWindowMaxProfit([1, 2, 3, 4, 5])).to.equal(4);
  });
});
describe("slidingWindowMaxProfit", () => {
  it("should return max profit", () => {
    expect(slidingWindowMaxProfit([7, 1, 5, 3, 6, 4])).to.equal(5);
  });
  it("should return 0 if array is sorted in descending order", () => {
    expect(slidingWindowMaxProfit([7, 6, 4, 3, 1])).to.equal(0);
  });
  it("should return 0 if array has one element", () => {
    expect(slidingWindowMaxProfit([1])).to.equal(0);
  });
  it("should return 0 if array is empty", () => {
    expect(slidingWindowMaxProfit([])).to.equal(0);
  });
  it("should return max profit if array is sorted in ascending order", () => {
    expect(slidingWindowMaxProfit([1, 2, 3, 4, 5])).to.equal(4);
  });
});
