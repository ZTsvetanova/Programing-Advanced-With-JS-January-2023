function towns(arr) {
  let newArr = [];

  let title = arr.shift();
  let titles = title.split(" | ");
  let townTitle = titles[0].split("| ")[1];
  let latitudeTitle = titles[1];
  let longitudeTitle = titles[2].split(" |")[0];

  for (const line of arr) {
    let [town, latitude, longitude] = line.split(" | ");
    town = town.split("| ")[1];
    longitude = longitude.split(" |")[0];
    latitude = Number(Number(latitude).toFixed(2));
    longitude = Number(Number(longitude).toFixed(2));
    let obj = {};
    obj[townTitle] = town;
    obj[latitudeTitle] = latitude;
    obj[longitudeTitle] = longitude;

    newArr.push(obj);
  }
  console.table(JSON.stringify(newArr));
}
towns([
  "| Town | Latitude | Longitude |",

  "| Sofia | 42.696552 | 23.32601 |",

  "| Beijing | 39.913818 | 116.363625 |",
]);
