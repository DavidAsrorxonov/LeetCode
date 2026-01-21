/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  let newArr = [];

  const arr1 = nums.slice(0, n);
  const arr2 = nums.slice(n);

  for (let i = 0; i < n; i++) {
    newArr.push(arr1[i], arr2[i]);
  }
  return newArr;
};

console.log(shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4));
