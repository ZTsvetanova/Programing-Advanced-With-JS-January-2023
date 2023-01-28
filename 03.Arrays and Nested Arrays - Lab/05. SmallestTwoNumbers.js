function smallest(arr) {
  let sortedArr = arr.sort((a, b) => a - b);
  let first = sortedArr.shift();
  let second = sortedArr.shift();
  console.log(`${first} ${second}`);
}
smallest([30, 15, 50, 5]);
smallest([3, 0, 10, 4, 7, 3]);
