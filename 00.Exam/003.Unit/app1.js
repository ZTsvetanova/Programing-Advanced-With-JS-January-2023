// const { expect, assert } = require("chai");

// function test(a, b) {
//   return a + b;
// }

// describe('togava', function () {
//   it('kogato', function () {
//     expect(test(3, 5)).to.equal(8);
//   });
//   it('kogatrfo', () => {
//     expect(test(3, 5)).to.not.equal(8);
//   });
// });
// describe('vali', function () {
//   it('dali', function () {
//     assert.equal(test(0.1, 0.2), 0.3)
//   });
//   it('dalito', () => {
//     assert.equal(test(0.2, 0.2), 0.4)
//   });
// });

//npm test

const { expect, assert } = require("chai");

const numberOperations = {
  powNumber: function (num) {
    return num * num;
  },

  numberChecker: function (input) {
    input = Number(input);

    if (isNaN(input)) {
      throw new Error("The input is not a number!");
    }

    if (input < 100) {
      return "The number is lower than 100!";
    } else {
      return "The number is greater or equal to 100!";
    }
  },
  sumArrays: function (array1, array2) {
    const longerArr = array1.length > array2.length ? array1 : array2;
    const rounds =
      array1.length < array2.length ? array1.length : array2.length;

    const resultArr = [];

    for (let i = 0; i < rounds; i++) {
      resultArr.push(array1[i] + array2[i]);
    }

    resultArr.push(...longerArr.slice(rounds));

    return resultArr;
  },
};

describe("powNumber", function () {
  it("Should return correct result", function () {
    expect(numberOperations.powNumber(2)).to.equal(4);
    expect(numberOperations.powNumber(1)).to.equal(1);
    expect(numberOperations.powNumber(3)).to.equal(9);
    expect(numberOperations.powNumber(-1)).to.equal(1);
    expect(numberOperations.powNumber(-2)).to.equal(4);
  });
});
describe("numberChecker", function () {
  it("Should return error", function () {
    expect(() => numberOperations.numberChecker(undefined)).to.throw(Error);
    expect(() => numberOperations.numberChecker("a")).to.throw(Error);


    expect(numberOperations.numberChecker(99)).to.equal("The number is lower than 100!");
    expect(numberOperations.numberChecker(100)).to.equal("The number is greater or equal to 100!");
    expect(numberOperations.numberChecker(101)).to.equal("The number is greater or equal to 100!");

  });
});
describe("sumArrays", function () {
  it("Correct calculate", function () {

    expect(numberOperations.sumArrays([1,2,3],[1,2,3])).to.deep.equal([2,4,6]);
    expect(numberOperations.sumArrays([-1,-2,-3],[1,2,3])).to.deep.equal([0,0,0]);
    expect(numberOperations.sumArrays([1,2,3],[-1,-2,-3])).to.deep.equal([0,0,0]);
    expect(numberOperations.sumArrays([10,20,30],[1,2,3])).to.deep.equal([11,22,33]);
    expect(numberOperations.sumArrays([10,20,30],[10,20,30])).to.deep.equal([20,40,60]);
    expect(numberOperations.sumArrays([-1,2,-3],[1,-2,3])).to.deep.equal([0,0,0]);
    expect(numberOperations.sumArrays([-1,-2,-3],[-1,-2,-3])).to.deep.equal([-2,-4,-6]);
    
    expect(numberOperations.sumArrays([10, 20], [20])).to.deep.equal([30, 20,]);
    expect(numberOperations.sumArrays([10], [20, 30])).to.deep.equal([30, 30,]);
  });
});
