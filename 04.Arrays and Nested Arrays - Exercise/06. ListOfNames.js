function list(arr) {
  let sortedArr = arr.sort((a, b) => a.localeCompare(b));

  for (let index = 0; index < sortedArr.length; index++) {
    let num = index + 1;
    console.log(`${num}.${sortedArr[index]}`);
  }
}
list(["John", "Bob", "ani", "Christina", "Ema"]);
