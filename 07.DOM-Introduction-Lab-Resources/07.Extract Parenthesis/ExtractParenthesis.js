function extract(content) {
  let textElement = document.getElementById(content).textContent;
  let pattern = /\(([^)]+)\)/g;
  let matches = textElement.matchAll(pattern);
  let resultArr = [];
  for (const match of matches) {
    resultArr.push(match[1]);
}
  //return resultArr.join("; ");
  console.log(resultArr.join());
}
// let text = document.getElementById(content).textContent;
// let pattern = /\(([^)]+)\)/g;
// let matches = text.matchAll(pattern);
// let res = [];

// for (const match of matches) {
//     res.push(match[1]);
// }
// return res.join("; ");
