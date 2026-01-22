/**
 * @param {number[]} nums
 * @return {number[]}
 */

const num = [5, 9, 8, 3, 10, 6, 7, 1, 10, 4];

var findErrorNums = function (nums) {
  const arr = [];
  const sorted = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (sorted[i] === sorted[i + 1]) {
      arr.push(sorted[i], sorted[i + 1] + 1);
    }
  }

  return arr;
};

console.log(findErrorNums(num));
