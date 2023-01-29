function printElement(arr, step) {
  let newArr = [];
  newArr.shift(arr[0]);

  for (let index = 0; index < arr.length; index++) {
    if (index % step === 0) {
      newArr.push(arr[index]);
    }
  }
  //console.log(newArr);
  return newArr
}
printElement(["5", "20", "31", "4", "20", "7"], 2);
