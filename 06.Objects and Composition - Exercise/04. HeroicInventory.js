function inventory(arr) {
  let herosArr = [];

  for (const line of arr) {
    let [name, level, items] = line.split(" / ");
    level = Number(level);
    items = items ? items.split(", ") : [];
    herosArr.push({name, level, items})
  }
  console.log(JSON.stringify(herosArr));
}
inventory([
  "Isacc / 25 / Apple, GravityGun",

  "Derek / 12 / BarrelVest, DestructionSword",

  "Hes / 1 / Desolator, Sentinel, Antara",
]);
