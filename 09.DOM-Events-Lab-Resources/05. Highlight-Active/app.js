function focused() {
  let allInputs = document.getElementsByTagName("input");

  for (let input of allInputs) {
    input.addEventListener("focus", focused);
    input.addEventListener("blur", blured);
  }

  function focused(event) {
    event.target.parentElement.classList.add("focused");
  }

  function blured(event) {
    event.target.parentElement.classList.remove("focused");
  }
}
