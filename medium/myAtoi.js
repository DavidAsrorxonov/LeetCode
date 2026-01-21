/**
 * @param {string} s
 * @return {number}
 */
s = "-87";

var myAtoi = function (s) {
  const arr = s.trim().split("");
  const newArr = [];
  let isNeg = false;

  for (let i = 0; i < arr.length; i++) {
    const ascii = arr[i].charCodeAt(0);

    if (arr[0].charCodeAt(0) < 48 || arr[0].charCodeAt(0) > 57) {
      return 0;
    } else {
      if (arr[0] == "-") {
        isNeg = true;
      }

      if (ascii >= 48 && ascii <= 57) {
        newArr.push(arr[i]);
      } else {
        return parseInt(newArr.join(""));
      }
    }
  }

  return isNeg ? parseInt(newArr.join("")) * -1 : parseInt(newArr.join(""));
};

console.log(myAtoi(s));
