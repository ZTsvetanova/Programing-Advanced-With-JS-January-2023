function calculator() {
  let numOne;
  let numTwo;
  let result;

  let action = {
    init: (one, two, ress) => {
      numOne = document.querySelector(one);
      numTwo = document.querySelector(two);
      result = document.querySelector(ress);
    },
    add: () => {
      let first = Number(numOne.value);
      let second = Number(numTwo.value);
      let res = first + second;
      result.value = res;
    },
    subtract: () => {
      let first = Number(numOne.value);
      let second = Number(numTwo.value);
      let res = first - second;
      result.value = res;
    },
  };
  return action;
}
const calculate = calculator();
calculate.init("#num1", "#num2", "#result");
