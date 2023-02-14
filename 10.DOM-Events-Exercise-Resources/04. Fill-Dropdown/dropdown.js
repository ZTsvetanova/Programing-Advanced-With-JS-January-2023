function addItem() {
  let inputText = document.getElementById("newItemText");
  let inputValue = document.getElementById("newItemValue");
  let line = document.createElement("option");
  line.textContent = inputText.value;
  line.value = inputValue.value;
  document.getElementById("menu").appendChild(line);
  inputText.value = "";
  inputValue.value = "";
}
