const { expect, assert } = require("chai");

const movieTheater = {
  ageRestrictions(movieRating) {
    switch (movieRating) {
      case "G":
        return "All ages admitted to watch the movie";
      case "PG":
        return "Parental guidance suggested! Some material may not be suitable for pre-teenagers";
      case "R":
        return "Restricted! Under 17 requires accompanying parent or adult guardian";
      case "NC-17":
        return "No one under 17 admitted to watch the movie";
      default:
        return "There are no age restrictions for this movie";
    }
  },
  moneySpent(tickets, food, drinks) {
    if (
      typeof tickets !== "number" ||
      !Array.isArray(food) ||
      !Array.isArray(drinks)
    ) {
      throw new Error("Invalid input");
    }

    let bill = 0;

    bill += tickets * 15;

    food.forEach((element) => {
      switch (element) {
        case "Nachos":
          bill += 6;
          break;
        case "Popcorn":
          bill += 4.5;
          break;
      }
    });

    drinks.forEach((element) => {
      switch (element) {
        case "Soda":
          bill += 2.5;
          break;
        case "Water":
          bill += 1.5;
          break;
      }
    });

    if (bill > 50) {
      bill -= bill * 0.2;
      return `The total cost for the purchase with applied discount is ${bill.toFixed(
        2
      )}`;
    } else {
      return `The total cost for the purchase is ${bill.toFixed(2)}`;
    }
  },
  reservation(rowsArray, neededSeatsCount) {
    if (!Array.isArray(rowsArray) || typeof neededSeatsCount !== "number") {
      throw new Error("Invalid input");
    }

    let availableRows = [];
    rowsArray.forEach((row) => {
      if (row.freeSeats >= neededSeatsCount) {
        availableRows.push(row.rowNumber);
      }
    });

    return Math.max(...availableRows);
  },
};

describe("ageRestrictions", function () {
  it("Should return correct result", function () {
    expect(movieTheater.ageRestrictions("G")).to.equal(
      `All ages admitted to watch the movie`
    );
    expect(movieTheater.ageRestrictions("PG")).to.equal(
      `Parental guidance suggested! Some material may not be suitable for pre-teenagers`
    );
    expect(movieTheater.ageRestrictions("R")).to.equal(
      `Restricted! Under 17 requires accompanying parent or adult guardian`
    );
    expect(movieTheater.ageRestrictions("NC-17")).to.equal(
      `No one under 17 admitted to watch the movie`
    );
    expect(movieTheater.ageRestrictions(-2)).to.equal(
      `There are no age restrictions for this movie`
    );
    expect(movieTheater.ageRestrictions()).to.equal(
      `There are no age restrictions for this movie`
    );
    expect(movieTheater.ageRestrictions("a")).to.equal(
      `There are no age restrictions for this movie`
    );
  });
});
describe("moneySpent", function () {
  it("Should return Error", function () {
    expect(() => movieTheater.moneySpent("a", [], [])).to.throw(Error);
    expect(() => movieTheater.moneySpent("a", "a", [])).to.throw(Error);
    expect(() => movieTheater.moneySpent("a", "a", "a")).to.throw(Error);

    expect(() => movieTheater.moneySpent(1, 1, 1)).to.throw(Error);
    expect(() => movieTheater.moneySpent(1, 1, [])).to.throw(Error);
    expect(() => movieTheater.moneySpent(1, [], 1)).to.throw(Error);
    expect(() => movieTheater.moneySpent([], 1, 1)).to.throw(Error);
  });
  it("Check a discount", function () {
    expect(movieTheater.moneySpent(3, ["Nachos"], ["Soda"])).to.equal(
      `The total cost for the purchase with applied discount is 42.80`
    );
    expect(
      movieTheater.moneySpent(
        2,
        ["Nachos", "Nachos", "Nachos", "Nachos", "Popcorn", "Popcorn"],
        ["Soda", "Water"]
      )
    ).to.equal(
      `The total cost for the purchase with applied discount is 53.60`
    );
  });
  it("should be correct with money spend 50 with no discount", function () {
    expect(
      movieTheater.moneySpent(
        2,
        ["Nachos", "Nachos"],
        ["Water", "Water", "Soda", "Soda"]
      )
    ).to.equal("The total cost for the purchase is 50.00");
  });
  it("Check whitout discount", function () {
    expect(movieTheater.moneySpent(1, ["Nachos"], ["Soda"])).to.equal(
      `The total cost for the purchase is 23.50`
    );
    expect(
      movieTheater.moneySpent(2, ["Nachos", "Nachos"], ["Soda", "Water"])
    ).to.equal(`The total cost for the purchase is 46.00`);
  });
});
describe("reservation", function () {
  it("Should return Error", function () {
    // expect(() => movieTheater.reservation([], 1)).to.throw(Error);
    expect(() => movieTheater.reservation(1, 1)).to.throw(Error);
    expect(() => movieTheater.reservation(undefined, 1)).to.throw(Error);
    expect(() => movieTheater.reservation("a", 1)).to.throw(Error);

    expect(() => movieTheater.reservation([], "a")).to.throw(Error);
    expect(() => movieTheater.reservation([], undefined)).to.throw(Error);
    expect(() => movieTheater.reservation([], [])).to.throw(Error);

    expect(() => movieTheater.reservation("a", "a")).to.throw(Error);
    expect(() => movieTheater.reservation(undefined, undefined)).to.throw(
      Error
    );
  });
  it("should be correct", function () {
    expect(
      movieTheater.reservation(
        [
          { rowNumber: 1, freeSeats: 1 },
          { rowNumber: 2, freeSeats: 2 },
        ],
        2
      )
    ).to.equal(2);
  });
});
