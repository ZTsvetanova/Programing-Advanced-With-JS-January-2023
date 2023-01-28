function diagonal(matrix) {
  const matrixLength = matrix.length;
  let first = 0;
  let second = 0;

  for (let f = 0; f < matrixLength; f++) {
    first += matrix[f][f];
  }
  let count = matrixLength;
  for (let s = 0; s < matrixLength; s++) {
    count--;
    second += matrix[s][count];
  }
  console.log(`${first} ${second}`);
}
diagonal([
  [20, 40],
  [10, 60],
]);
diagonal([
  [3, 5, 17],
  [-1, 7, 14],
  [1, -8, 89],
]);
