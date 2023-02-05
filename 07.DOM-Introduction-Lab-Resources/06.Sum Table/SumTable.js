function sumTable() {
  let pricesElements = document.querySelectorAll("table tr");
  let sum = 0;
  for (let index = 1; index < pricesElements.length - 1; index++) {
    let cols = pricesElements[index].children;
    let price = cols[1].textContent;
    sum += Number(price);
  }
  document.getElementById("sum").textContent = sum;
}
