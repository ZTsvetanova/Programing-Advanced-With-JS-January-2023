function extract(arr) {
  let newArr = [];

  for (let index = 0; index < arr.length; index++) {
    if (index === 0) {
      newArr.push(arr[index]);
    }
    let el = arr[index];
    if (el >= arr[index - 1]) {
      newArr.push(el);
    }
  }
  //console.log(newArr);
  return newArr;
}
extract([1, 3, 8, 4, 10, 12, 3, 2, 24]);
