function neighbors(matrix) {
  let count = 0;
  let secondArr = [];

  for (let line = 1; line < matrix.length; line++) {
    let firstArr = matrix[line - 1];
    secondArr = matrix[line];
    for (let col = 0; col < firstArr.length; col++) {
      if (firstArr[col] === secondArr[col]) {
        count++;
      }
      if (firstArr[col] === firstArr[col + 1]) {
        count++;
      }
    }
  }
  for (let index = 0; index < secondArr.length; index++) {
    if (secondArr[index] === secondArr[index + 1]) {
      count++;
    }
  }

  console.log(count);
  return count;
}

neighbors([
  ["2", "3", "5", "5", "0"],
  ["4", "0", "5", "5", "4"],
  ["2", "3", "5", "5", "2"],
  ["9", "8", "7", "5", "4"],
]);
neighbors([
  ["test", "yes", "yo", "ho"],
  ["well", "done", "yo", "6"],
  ["not", "done", "yet", "5"],
]);
