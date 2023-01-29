function prices(arr) {
  let obj = {};

  for (const line of arr) {
    let [town, product, price] = line.split(" | ");
    price = Number(price);

    if (obj.hasOwnProperty(product)) {
      let currentPrice = obj[product]["price"];
      if (currentPrice > price) {
        obj[product] = { town, price };
      }
    } else {
      obj[product] = { town, price };
    }
  }
  for (let [key, value] of Object.entries(obj)) {
    console.log(`${key} -> ${value.price} (${value.town})`);
  }
}
prices([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Orange | 1",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);
