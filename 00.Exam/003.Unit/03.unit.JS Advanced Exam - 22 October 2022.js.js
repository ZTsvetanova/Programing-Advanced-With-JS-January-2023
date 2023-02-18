const { expect, assert } = require("chai");

const chooseYourCar = {
  choosingType(type, color, year) {
    if (year < 1900 || year > 2022) {
      throw new Error(`Invalid Year!`);
    } else {
      if (type == "Sedan") {
        if (year >= 2010) {
          return `This ${color} ${type} meets the requirements, that you have.`;
        } else {
          return `This ${type} is too old for you, especially with that ${color} color.`;
        }
      }
      throw new Error(`This type of car is not what you are looking for.`);
    }
  },

  brandName(brands, brandIndex) {
    let result = [];

    if (
      !Array.isArray(brands) ||
      !Number.isInteger(brandIndex) ||
      brandIndex < 0 ||
      brandIndex >= brands.length
    ) {
      throw new Error("Invalid Information!");
    }
    for (let i = 0; i < brands.length; i++) {
      if (i !== brandIndex) {
        result.push(brands[i]);
      }
    }
    return result.join(", ");
  },

  carFuelConsumption(distanceInKilometers, consumptedFuelInLiters) {
    let litersPerHundredKm = (
      (consumptedFuelInLiters / distanceInKilometers) *
      100
    ).toFixed(2);

    if (
      typeof distanceInKilometers !== "number" ||
      distanceInKilometers <= 0 ||
      typeof consumptedFuelInLiters !== "number" ||
      consumptedFuelInLiters <= 0
    ) {
      throw new Error("Invalid Information!");
    } else if (litersPerHundredKm <= 7) {
      return `The car is efficient enough, it burns ${litersPerHundredKm} liters/100 km.`;
    } else {
      return `The car burns too much fuel - ${litersPerHundredKm} liters!`;
    }
  },
};

describe("choosingType", function () {
  //expect(chooseYourCar.choosingType(type, color, year)).to.equal(check);
  it("Should return correct result with different type", function () {
    expect(() => chooseYourCar.choosingType("Comby", "Red", 2010)).to.throw(
      Error
    );
  });
  it("Should return correct result with old year", function () {
    expect(() => chooseYourCar.choosingType("Sedan", "Red", 1899)).to.throw(
      Error
    );
  });
  it("Should return correct result with invalid year", function () {
    expect(() => chooseYourCar.choosingType("Sedan", "Red", 2023)).to.throw(
      Error
    );
  });
  it("Should return correct answer whit correct year", function () {
    expect(chooseYourCar.choosingType("Sedan", "Red", 2010)).to.equal(
      "This Red Sedan meets the requirements, that you have."
    );
    expect(chooseYourCar.choosingType("Sedan", "Red", 2012)).to.equal(
      "This Red Sedan meets the requirements, that you have."
    );
    expect(chooseYourCar.choosingType("Sedan", "Red", 2022)).to.equal(
      "This Red Sedan meets the requirements, that you have."
    );
  });
  it("Should return correct answer whit old year", function () {
    expect(chooseYourCar.choosingType("Sedan", "Red", 2009)).to.equal(
      "This Sedan is too old for you, especially with that Red color."
    );
    expect(chooseYourCar.choosingType("Sedan", "Red", 1900)).to.equal(
      "This Sedan is too old for you, especially with that Red color."
    );
    expect(chooseYourCar.choosingType("Sedan", "Red", 2000)).to.equal(
      "This Sedan is too old for you, especially with that Red color."
    );
  });
});

describe("brandName", function () {
  it("Check input", function () {
    expect(() => chooseYourCar.brandName("a", 1)).to.throw(Error);
    expect(() => chooseYourCar.brandName(undefined, 1)).to.throw(Error);
    expect(() => chooseYourCar.brandName(1, 1)).to.throw(Error);

    expect(() => chooseYourCar.brandName([], [])).to.throw(Error);
    expect(() => chooseYourCar.brandName([], "a")).to.throw(Error);
    expect(() => chooseYourCar.brandName([], undefined)).to.throw(Error);

    expect(() => chooseYourCar.brandName(["a", "b", "c"], 3)).to.throw(Error);
    expect(() => chooseYourCar.brandName(["a", "b", "c"], -1)).to.throw(Error);
  });
  it("Should return correct result", function () {
    expect(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 0)).to.equal(
      "Toyota, Peugeot"
    );
    expect(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 1)).to.equal(
      "BMW, Peugeot"
    );
    expect(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 2)).to.equal(
      "BMW, Toyota"
    );
  });
});

describe("carFuelConsumption", function () {
  it("Check input", function () {
    expect(() => chooseYourCar.carFuelConsumption("a", 1)).to.throw(Error);
    expect(() => chooseYourCar.carFuelConsumption(undefined, 1)).to.throw(
      Error
    );
    expect(() => chooseYourCar.carFuelConsumption(-1, 1)).to.throw(Error);

    expect(() => chooseYourCar.carFuelConsumption(1, "a")).to.throw(Error);
    expect(() => chooseYourCar.carFuelConsumption(1, undefined)).to.throw(
      Error
    );
    expect(() => chooseYourCar.carFuelConsumption(1, -1)).to.throw(Error);

    expect(() => chooseYourCar.carFuelConsumption("a", "a")).to.throw(Error);
    expect(() =>
      chooseYourCar.carFuelConsumption(undefined, undefined)
    ).to.throw(Error);
    expect(() => chooseYourCar.carFuelConsumption(-1, -1)).to.throw(Error);
  });

  it("Should return correct result with seven or low", function () {
    expect(chooseYourCar.carFuelConsumption(100,7)).to.equal(
      "The car is efficient enough, it burns 7.00 liters/100 km."
    );
    expect(chooseYourCar.carFuelConsumption(100,5)).to.equal(
      "The car is efficient enough, it burns 5.00 liters/100 km."
    );

  });
  it("Should return correct result with hight", function () {
    expect(chooseYourCar.carFuelConsumption(100, 70)).to.equal(
      "The car burns too much fuel - 70.00 liters!"
    );
    expect(chooseYourCar.carFuelConsumption(100, 50)).to.equal(
      "The car burns too much fuel - 50.00 liters!"
    );

  });
});
