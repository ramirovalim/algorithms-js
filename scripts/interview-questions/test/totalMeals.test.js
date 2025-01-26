import { expect } from "chai";
import calculate from "../totalMeals.js";

describe("totalMeals", () => {
  it("should return 0 if no initial money", () => {
    const result = calculate(0);
    expect(result).to.eql({ moneyLeft: 0, totalMeals: 0 });
  });
  it("should return the correct number of meals and money left", () => {
    const result = calculate(8);
    expect(result).to.eql({ moneyLeft: 1.9, totalMeals: 2 });
  });
  it("should return the correct number of meals and money left", () => {
    const result = calculate(14);
    expect(result).to.eql({ moneyLeft: 1.8, totalMeals: 4 });
  });
  it("should return the correct number of meals and money left", () => {
    const result = calculate(25);
    expect(result).to.eql({ moneyLeft: 0.6, totalMeals: 8 });
  });
});
