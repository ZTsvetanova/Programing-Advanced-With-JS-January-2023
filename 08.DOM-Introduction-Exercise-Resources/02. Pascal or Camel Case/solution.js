function solve() {
  let textElement = document.getElementById("text").value;
  let caseTypeElement = document.getElementById("naming-convention").value;
  let resultElement = document.getElementById("result");

  const toPaskal = (text) =>
    text
      .split(" ")
      .map((w) => w[0].toUpperCase() + w.slice(1).toLowerCase())
      .join("");

  const toCamel = (text) => {
    text = toPaskal(text);
    return text[0].toLowerCase() + text.slice(1);
  };

  if (caseTypeElement === "Pascal Case") {
    resultElement.textContent = toPaskal(textElement);
  } else if (caseTypeElement === "Camel Case") {
    resultElement.textContent = toCamel(textElement);
  } else {
    resultElement.textContent = "Error!";
  }
}
