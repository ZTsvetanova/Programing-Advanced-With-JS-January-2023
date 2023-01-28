function firstLastSum(arr) {
  let first = Number(arr.shift());
  let last = Number(arr.pop());
  let sum = first + last;
  return sum;
}
firstLastSum(["20", "30", "40"]);
firstLastSum(["5", "10"]);
