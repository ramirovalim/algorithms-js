export function containsDuplicate(nums) {
  // const appearances = new Map();

  // for (let i = 0; i < nums.length; i++) {
  //   if (appearances.has(nums[i])) {
  //     return true;
  //   } else {
  //     appearances.set(nums[i], 1);
  //   }
  // }
  // return false;

  // const seen = new Set();
  // for (let num of nums) {
  //   if (seen.has(num)) {
  //     return true;
  //   }
  //   seen.add(num);
  // }
  // return false;

  const uniqueNums = new Set(nums);

  return nums.length === uniqueNums.size ? false : true;
}
