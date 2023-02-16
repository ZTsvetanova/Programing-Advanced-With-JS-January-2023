function subSum(arr, startIndex, endIndex) {
  if (Array.isArray(arr) === false) {
    return NaN;
  }
  if (startIndex < 0) {
    startIndex = 0;
  }
  if (endIndex > arr.length - 1) {
    endIndex = arr.length - 1;
  }

  if (arr != NaN) {
    let subNumbers = arr.slice(startIndex, endIndex + 1);
    return sum = subNumbers.reduce((a, x) => a + Number(x), 0);

    // if (sum == NaN) {
    //   return NaN;
    // } else {
    //   return sum;
    // }
  }
}
subSum([10, 20, 30, "a", 50, 60], 3, 300);
