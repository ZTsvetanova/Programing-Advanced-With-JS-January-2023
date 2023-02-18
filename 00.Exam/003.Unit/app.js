const { expect, assert } = require("chai");

const library = {
  calcPriceOfBook(nameOfBook, year) {
    let price = 20;
    if (typeof nameOfBook != "string" || !Number.isInteger(year)) {
      throw new Error("Invalid input");
    } else if (year <= 1980) {
      let total = price - price * 0.5;
      return `Price of ${nameOfBook} is ${total.toFixed(2)}`;
    }
    return `Price of ${nameOfBook} is ${price.toFixed(2)}`;
  },

  findBook: function (booksArr, desiredBook) {
    if (booksArr.length == 0) {
      throw new Error("No books currently available");
    } else if (booksArr.find((e) => e == desiredBook)) {
      return "We found the book you want.";
    } else {
      return "The book you are looking for is not here!";
    }
  },
  arrangeTheBooks(countBooks) {
    const countShelves = 5;
    const availableSpace = countShelves * 8;

    if (!Number.isInteger(countBooks) || countBooks < 0) {
      throw new Error("Invalid input");
    } else if (availableSpace >= countBooks) {
      return "Great job, the books are arranged.";
    } else {
      return "Insufficient space, more shelves need to be purchased.";
    }
  },
};

describe("calcPriceOfBook ", function () {
  it("Should return error", function () {
    expect(() => library.calcPriceOfBook(1, 1)).to.throw(Error);
    expect(() => library.calcPriceOfBook("a", "a")).to.throw(Error);
    expect(() => library.calcPriceOfBook(1.1, 1.1)).to.throw(Error);
    expect(() => library.calcPriceOfBook("a", 1.1)).to.throw(Error);
  });
  it("Should return correct", function () {
    expect(library.calcPriceOfBook("a", 1979)).to.equal(`Price of a is 10.00`);
    expect(library.calcPriceOfBook("a", 1980)).to.equal(`Price of a is 10.00`);
    expect(library.calcPriceOfBook("a", 1981)).to.equal(`Price of a is 20.00`);
  });
});
describe("findBook ", function () {
  it("Should return error", function () {
    expect(() => library.findBook([], "a")).to.throw(Error);
  });
  it("Should return correct", function () {
    expect(library.findBook(["a", "b", "c"], "a")).to.equal(
      "We found the book you want."
    );
    expect(library.findBook(["a", "b", "c"], "b")).to.equal(
      "We found the book you want."
    );
    expect(library.findBook(["a", "b", "c"], "c")).to.equal(
      "We found the book you want."
    );
    expect(library.findBook(["a", "b", "c"], "d")).to.equal(
      "The book you are looking for is not here!"
    );
  });
});
describe("arrangeTheBooks ", function () {
    it("Should return error", function () {
      expect(() => library.arrangeTheBooks(-1)).to.throw(Error);
      expect(() => library.arrangeTheBooks(1.1)).to.throw(Error);
    });
    it("Should return correct", function () {
      expect(library.arrangeTheBooks(39)).to.equal("Great job, the books are arranged.");
      expect(library.arrangeTheBooks(40)).to.equal("Great job, the books are arranged.");
      expect(library.arrangeTheBooks(41)).to.equal("Insufficient space, more shelves need to be purchased.");
    });
  });
