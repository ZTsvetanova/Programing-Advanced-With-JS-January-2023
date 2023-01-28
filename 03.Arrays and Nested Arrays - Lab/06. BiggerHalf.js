function biggerHalf(arr) {
  let sortedArr = arr.sort((a, b) => a - b);
  const sortedArrLength = sortedArr.length;
  let border = Math.floor(sortedArrLength/2);
  let result = sortedArr.slice(border)
  //console.log(result);
  return result;
}
biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6]);
