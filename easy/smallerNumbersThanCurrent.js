/**
 * @param {number[]} nums
 * @return {number[]}
 */
const num = [8, 1, 2, 2, 3];

var smallerNumbersThanCurrent = function (nums) {
  const arr = [];
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        count++;
      }
    }
    arr.push(count);
    count = 0;
  }

  return arr;
};

console.log(smallerNumbersThanCurrent(num));
