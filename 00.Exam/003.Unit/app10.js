const { expect, assert } = require("chai");

const testNumbers = {
    sumNumbers: function (num1, num2) {
        let sum = 0;

        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        } else {
            sum = (num1 + num2).toFixed(2);
            return sum
        }
    },
    numberChecker: function (input) {
        input = Number(input);

        if (isNaN(input)) {
            throw new Error('The input is not a number!');
        }

        if (input % 2 === 0) {
            return 'The number is even!';
        } else {
            return 'The number is odd!';
        }

    },
    averageSumArray: function (arr) {

        let arraySum = 0;

        for (let i = 0; i < arr.length; i++) {
            arraySum += arr[i]
        }

        return arraySum / arr.length
    }
};



describe("sumNumbers", function () {
    it("Should return correct result with correct param", function () {
      expect(testNumbers.sumNumbers(1,1)).to.equal('2.00');
      expect(testNumbers.sumNumbers(3,3)).to.equal('6.00');
      expect(testNumbers.sumNumbers(-1,2)).to.equal('1.00');
      expect(testNumbers.sumNumbers(2,-2)).to.equal('0.00');
    });
    it("Should return correct result with uncorrect param", function () {
        expect(testNumbers.sumNumbers("a",2)).to.equal(undefined);
        expect(testNumbers.sumNumbers(1,"a")).to.equal(undefined);
        expect(testNumbers.sumNumbers([],3)).to.equal(undefined);
        expect(testNumbers.sumNumbers(-1,undefined)).to.equal(undefined);
        expect(testNumbers.sumNumbers(2,[])).to.equal(undefined);
      });
  });

  describe("numberChecker", function () {
    it("Should return correct result with correct param", function () {
      expect(testNumbers.numberChecker(-2)).to.equal('The number is even!');
      expect(testNumbers.numberChecker(3)).to.equal('The number is odd!');
      expect(testNumbers.numberChecker(-1)).to.equal('The number is odd!');
      expect(testNumbers.numberChecker(2)).to.equal('The number is even!');
      expect(testNumbers.numberChecker(0)).to.equal('The number is even!');
    });
 
    it("Should return correct result with uncorrect param", function () {
        expect(() => testNumbers.numberChecker('a')).to.throw(Error);
        expect(() => testNumbers.numberChecker(undefined)).to.throw(Error);
      });
})

describe("averageSumArray", function () {
    it("Should return correct result", function () {
      expect(testNumbers.averageSumArray([1])).to.equal(1);
      expect(testNumbers.averageSumArray([1, 2, 3])).to.equal(2);
      expect(testNumbers.averageSumArray([1,1,1])).to.equal(1);
      expect(testNumbers.averageSumArray([0,1,2])).to.equal(1);
      expect(testNumbers.averageSumArray([0,0])).to.equal(0);
    });
 
})