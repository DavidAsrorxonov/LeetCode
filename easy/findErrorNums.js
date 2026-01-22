/**
 * @param {number[]} nums
 * @return {number[]}
 */

const num = [2, 2];

var findErrorNums = function (nums) {
  let dup = -1;
  const n = nums.length;
  const total = (n * (n + 1)) / 2;
  let totalNow = 0;

  for (let i = 0; i < nums.length; i++) {
    let index = Math.abs(nums[i]) - 1;
    totalNow += Math.abs(nums[i]);

    if (nums[index] < 0) {
      dup = Math.abs(nums[i]);
    } else {
      nums[index] *= -1;
    }
  }

  let missing = total + dup - totalNow;
  return [dup, missing];
};

console.log(findErrorNums(num));
