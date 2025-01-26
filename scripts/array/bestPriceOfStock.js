/**
 * @param {number[]} prices
 * @return {number}
 */
export const maxProfit = function (prices) {
  let maxProfit = 0;
  let bestBuy = Infinity;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] - bestBuy > maxProfit) {
      maxProfit = prices[i] - bestBuy;
    }

    if (prices[i] < bestBuy) {
      bestBuy = prices[i];
    }
  }

  return maxProfit;
};

// Sliding window technique -> two pointers and a variable
export const slidingWindowMaxProfit = function (prices) {
  let p1 = 0;
  let p2 = 1;
  let maxDiff = 0;
  while (p2 < prices.length) {
    if (prices[p1] > prices[p2]) {
      p1 = p2;
    } else {
      let diff = prices[p2] - prices[p1];
      if (diff > maxDiff) maxDiff = diff;
    }
    p2 = p2 + 1;
  }

  return maxDiff;
};
