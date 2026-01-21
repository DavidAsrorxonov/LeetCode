/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

num1 = [1, 3];
num2 = [2, 4];

var findMedianSortedArrays = function (nums1, nums2) {
  const sorted = [...nums1, ...nums2].sort((a, b) => a - b);
  const l = sorted.length - 1;
  const r = 0;

  if (sorted.length % 2 === 0) {
    const values =
      sorted[Math.floor((l + r) / 2)] + sorted[Math.ceil((l + r) / 2)];
    return values / 2;
  } else {
    return sorted[(l + r) / 2];
  }
};

console.log(findMedianSortedArrays(num1, num2));
