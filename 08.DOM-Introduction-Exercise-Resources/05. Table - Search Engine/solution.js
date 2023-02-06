function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);
  let rowsElements = document.querySelectorAll("tbody tr");
  let input = document.getElementById("searchField");

  function onClick() {
    for (let row of rowsElements) {
      row.classList.remove("select");
      if (input.value !== "" && row.innerHTML.includes(input.value)) {
        row.className = "select";
      }
    }

    input.value = "";
  }
}
