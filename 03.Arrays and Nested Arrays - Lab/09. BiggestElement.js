function biggest(arr) {
  let newArr = [];

  for (const miniArr of arr) {
    newArr = newArr.concat(miniArr);
  }
  let sortedArr = newArr.sort((a, b) => a - b);
  let biggestNumber = sortedArr.pop();
  //console.log(biggestNumber);
  return biggestNumber;
}
biggest([
  [20, 50, 10],
  [8, 33, 145],
]);
biggest([
  [3, 5, 7, 12],
  [-1, 4, 33, 2],
  [8, 3, 0, 4],
]);
