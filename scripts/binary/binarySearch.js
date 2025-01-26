/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 *
 * @description Given an array of integers nums which is sorted in ascending order,
 * and an integer target, write a function to search target in nums.
 * If target exists, then return its index. Otherwise, return -1.
 * You must write an algorithm with O(log n) runtime complexity.
 *
 * Example 1:
 * Input: nums = [-1,0,3,5,9,12], target = 9
 * Output: 4
 * Explanation: 9 exists in nums and its index is 4
 *
 * Example 2:
 * Input: nums = [-1,0,3,5,9,12], target = 2
 * Output: -1
 * Explanation: 2 does not exist in nums so return -1
 *
 * Constraints:
 * 1 <= nums.length <= 10^4
 * -10^4 < nums[i], target < 10^4
 * All the integers in nums are **unique**.
 * nums is sorted in ascending order.
 */
export const binarySearch = function (nums, target) {
  if (nums.length === 0) return -1;
  const middle = Math.floor(nums.length / 2);
  if (target === nums[middle]) return middle;

  if (target > nums[middle]) {
    const result = binarySearch(nums.slice(middle + 1), target);
    return result === -1 ? -1 : middle + 1 + result;
  }
  if (target < nums[middle]) {
    return binarySearch(nums.slice(0, middle), target);
  }
};
