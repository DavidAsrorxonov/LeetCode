l1 = [2, 4, 3];
l2 = [5, 6, 4];

var addTwoNumbers = function (l1, l2) {
  const x = parseInt(l1.reverse().join("")) + parseInt(l2.reverse().join(""));

  return x.toString().split("").reverse();
};

console.log(addTwoNumbers(l1, l2));

//Not completed
