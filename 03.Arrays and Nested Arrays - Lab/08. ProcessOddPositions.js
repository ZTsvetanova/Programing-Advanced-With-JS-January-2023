function processOddPosition(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    
    if (i % 2 !== 0) {
      newArr.push(arr[i] * 2);
    }
  }
  let result = newArr.reverse().join(" ");
  //console.log(result);
  return result;
}
processOddPosition([10, 15, 20, 25]);
processOddPosition([3, 0, 10, 4, 7, 3]);
