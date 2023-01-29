function store(arr) {
  let sortedArr = arr.sort((a, b) => a.localeCompare(b));
  let firstLetter = "";
  let err = "";
  for (const line of sortedArr) {
    if (firstLetter !== line[0].toUpperCase()) {
      firstLetter = line[0].toUpperCase();
      console.log(firstLetter);
    }
    let [name, price] = line.split(' : ');
    if (err !== line) {
      console.log(`  ${name}: ${price}`);
    }
    err = line;
  }
}
store([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",

  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
