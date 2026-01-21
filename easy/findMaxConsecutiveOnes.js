/**
 * @param {number[]} nums
 * @return {number}
 */

const num1 = [1, 1, 0, 1, 1, 1]; // 6

var findMaxConsecutiveOnes = function (nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1 && nums[i + 1] === 1) {
      count = count + 1;
    } else {
      count = 0;
    }
  }

  return count;
};

console.log(findMaxConsecutiveOnes(num1));
