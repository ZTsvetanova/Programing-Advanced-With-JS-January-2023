function printWithDelimiter(arr, del) {

    let result = arr.join(del);
    console.log(result);

}
printWithDelimiter(
  ["One", "Two", "Three", "Four", "Five"],
  "-"
);
