function townPopulation(arr) {
  let townObject = {};
  for (const line of arr) {
    let [town, population] = line.split(" <-> ");

    if (!townObject.hasOwnProperty(town)) {
      townObject[town] = Number(population);
    } else {
      townObject[town] += Number(population);
    }
  }
  for (const line in townObject) {
    console.log(`${line} : ${townObject[line]}`);
  }
}
townPopulation([
  "Sofia <-> 1200000",
  "Montana <-> 20000",
  "New York <-> 10000000",
  "Washington <-> 2345000",
  "Las Vegas <-> 1000000",
  "Las Vegas <-> 2000000",
]);
