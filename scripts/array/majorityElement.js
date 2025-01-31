/**
 * The majority element is the element that appears
 * more than (n/2) times (>50%)
 *
 * @param {number[]} nums
 * @return {number}
 *
 */
export function majorityElementSort(nums) {
  // O(n log(n)) -> time complexity O(n) -> space complexity
  // if the element appears more than n/2 times
  // it will be the item at nums[n/2] if the array is sorted
  const sorted = nums.sort((a, b) => a - b);
  const middle = Math.floor(nums.length / 2);

  return sorted[middle];
}

export function majorityElementHash(nums) {
  // O(n) -> time complexity O(n) -> space complexity
  // because we are using a map to store the appearances (n) of each element
  // and we are iterating over the array (n) to count the appearances
  let appearances = new Map();

  for (let i = 0; i < nums.length; i++) {
    // O(n)
    if (appearances.has(nums[i])) {
      appearances.set(nums[i], appearances.get(nums[i]) + 1);
      if (appearances.get(nums[i]) > nums.length / 2) {
        return nums[i];
      }
    } else {
      appearances.set(nums[i], 1);
    }
  }
}

// Moore's voting algorithm
// if a number has the majority, it maintains its lead even if there are other elements
export function majorityElementVoting(nums) {
  // O(n) -> time complexity O(1) -> space complexity
  let candidate = null;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      candidate = nums[i];
      count++;
    } else if (nums[i] === candidate) {
      count++;
    } else {
      count--;
    }
  }

  return candidate;
}
