function search() {
  let towns = document.querySelectorAll("#towns li");
  let input = document.getElementById("searchText").value;
  let result = document.getElementById("result");
  let count = 0;

  for (let i = 0; i < towns.length; i++) {
    let town = towns[i].textContent.toLowerCase();
    if (town.includes(input.toLowerCase())) {
      towns[i].style.textDecoration = "underline";
      towns[i].style.fontWeight = "bold";
      count++;
    } else {
      towns[i].style.textDecoration = "none";
      towns[i].style.fontWeight = "none";
    }
  }

  let line = `${count} matches found`;
  result.textContent = line;

  input.value = "";
}
