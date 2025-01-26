/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Brute force
export const twoSumBruteForce = function (nums, target) {
  // O(n^2)
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return [];
};

// Sorting and Two Pointers
export const twoSumSortAndPointers = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  // O(n log n)
  const sortedNums = nums.slice().sort((a, b) => a - b);

  // O(n)
  for (let i = 0; i < sortedNums.length; i++) {
    const sum = sortedNums[left] + sortedNums[right];

    if (sum === target) {
      const leftIndex = nums.indexOf(sortedNums[left]);
      const rightIndex = nums.lastIndexOf(sortedNums[right]);
      return [leftIndex, rightIndex];
    }

    if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return [];
  // O(n log n) + O(n) = O(n log n)
};

// Two-pass Hash Table
export const twoSumTwoPassHashTable = function (nums, target) {
  const map = new Map();
  // O(n)
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }

  // O(n)
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement) && map.get(complement) !== i) {
      return [i, map.get(complement)];
    }
  }

  return [];
  // O(n) + O(n) = O(n)
};

// One-pass Hash Table
export const twoSumOnePassHashTable = function (nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const numberWeNeed = target - nums[i];
    if (map.has(numberWeNeed)) {
      return [map.get(numberWeNeed), i];
    }

    map.set(nums[i], i);
  }

  return [];
  // O(n)
};
