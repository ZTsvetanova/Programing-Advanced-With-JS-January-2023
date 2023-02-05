function colorize() {
  let rowToChange = document.querySelectorAll("tr");
  for (let i = 0; i < rowToChange.length; i++) {
    if (i % 2 !== 0) {
      rowToChange[i].style.backgroundColor = "Teal";
    }
  }
}
