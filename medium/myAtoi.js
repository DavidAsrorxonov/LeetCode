/**
 * @param {string} s
 * @return {number}
 */
s = "words and 987";

var myAtoi = function (s) {
  const arr = s.trim().split("");
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    const ascii = arr[i].charCodeAt(0);

    if (arr[0].charCodeAt(0) <= 48 || arr[0].charCodeAt(0) >= 57) {
      return 0;
    } else {
      if (ascii >= 48 && ascii <= 57) {
        newArr.push(arr[i]);
      } else {
        return parseInt(newArr.join(""));
      }
    }
  }

  return parseInt(newArr.join(""));
};

console.log(myAtoi(s));
