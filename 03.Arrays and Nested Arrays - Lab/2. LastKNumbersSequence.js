function last(arrLength, numbersTSum) {
  const newArr = [];

  for (let index = 0; index < arrLength; index++) {
    let newArrLength = newArr.length;
    if (newArrLength < 2) {
      newArr.push(1);
    } else if (newArrLength >= 2) {
      let border = newArrLength - numbersTSum;

      let sum = 0;
      if (border < 0) {
        border = 0;
      }
      let sumArr = newArr.slice(border, newArrLength);
      for (const n of sumArr) {
        sum += n;
      }
      newArr.push(sum);
    }
  }
  //console.log(newArr);
  return newArr
}
last(6, 9);
last(8, 2);
