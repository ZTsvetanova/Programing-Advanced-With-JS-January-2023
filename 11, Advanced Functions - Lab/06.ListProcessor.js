function listProcessor(commandArr) {
  let result = [];

  let obj = {
    add(word) {
      result.push(word);
    },
    remove(word) {
      result = result.filter(function (item) {
        return item !== word;
      });
    },
    print() {
      console.log(result.join(","));
    },
  };

  commandArr.forEach((el) => {
    if (el === "print") {
      obj[el]();
    } else {
      let [command, arg] = el.split(" ");
      obj[command](arg);
    }
  });
}

listProcessor(["add hello", "add again", "remove hello", "add again", "print"]);
