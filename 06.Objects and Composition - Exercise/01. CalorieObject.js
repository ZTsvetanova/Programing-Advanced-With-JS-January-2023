function calorie(arr) {
  let calorieObject = {};

  for (let i = 0; i < arr.length; i + 2) {
    let product = arr.shift();
    let calories = arr.shift();

    calorieObject[product] = Number(calories);
  }
  console.log(calorieObject);
}
calorie(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
