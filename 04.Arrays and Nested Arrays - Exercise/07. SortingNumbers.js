function sortNumbers(arr) {
  let sortedArr = arr.sort((a, b) => a - b);
  let half = Math.ceil(arr.length / 2);

  let resultArr = [];

  for (let index = 0; index < half; index++) {
    if (sortedArr.length > 1) {
      let max = sortedArr.pop();
      let min = sortedArr.shift();
      resultArr.push(min);
      resultArr.push(max);
    } else {
      resultArr.push(sortedArr[0]);
    }
  }
  //console.log(resultArr);
  return resultArr;
}
sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56, 99]);
