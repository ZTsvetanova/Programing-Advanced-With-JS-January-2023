function addAndReturnEl(arr) {
  let newArr = [];
  let count = 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "add") {
      newArr.push(count);
      count++;
    } else if (arr[i] === "remove") {
      newArr.pop();
      count++;
    }
  }
  if (newArr.length === 0) {
    console.log("Empty");
  } else {
    console.log(newArr.join("\n"));
  }
}
addAndReturnEl(["add", "add", "remove", "add", "add"]);
