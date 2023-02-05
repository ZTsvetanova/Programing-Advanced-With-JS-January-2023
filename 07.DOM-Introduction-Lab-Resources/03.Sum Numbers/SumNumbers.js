function calc() {
    let firstNumber = document.getElementById('num1').value;
    let secondNumber = document.getElementById('num2').value;
    let resultArea = document.getElementById('sum');
    resultArea.value = Number(firstNumber)+Number(secondNumber);
}

