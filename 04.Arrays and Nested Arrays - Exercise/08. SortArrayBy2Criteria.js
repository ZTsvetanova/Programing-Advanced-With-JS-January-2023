function sortByTwoCriteria(arr) {
  arr.sort((a, b) => a.length - b.length || a.localeCompare(b));

  for (const line of arr) {
    console.log(line);
  }
}
sortByTwoCriteria(["test", "Deny", "omen", "Default"]);
