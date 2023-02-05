function extractText() {
    let elements = document.getElementById('items');
    let result = elements.textContent;
    let area = document.getElementById('result');
    area.textContent = result;

}
extractText()