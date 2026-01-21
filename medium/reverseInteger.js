/**
 * @param {number} x
 * @return {number}
 */

x = 1534236469;

// Not efficient way
var reverse = function (x) {
  if (x > 2 ** 31 - 1 || x < (-2) ** 31) {
    return 0;
  } else {
    if (x > 0) {
      return parseInt(x.toString().split("").reverse().join("")) > 2 ** 31 - 1
        ? 0
        : parseInt(x.toString().split("").reverse().join(""));
    } else {
      return parseInt(x.toString().split("").reverse().join("")) * -1 <
        (-2) ** 31
        ? 0
        : parseInt(x.toString().split("").reverse().join("")) * -1;
    }
  }
};

// Efficient Way

var reverse1 = function (x) {
  let sign = x < 0 ? -1 : 1;

  x = Math.abs(x);

  let rev = 0;

  while (x > 0) {
    digit = x % 10;
    rev = rev * 10 + digit;
    x = Math.floor(x / 10);
  }

  if (rev < -(2 ** 31) || rev > 2 ** 31) {
    return 0;
  } else {
    return rev * sign;
  }
};
