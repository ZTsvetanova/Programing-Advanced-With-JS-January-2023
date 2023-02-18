class CarDealership {
  constructor(name) {
    this.name = name;
    this.availableCars = [];
    this.soldCars = [];
    this.totalIncome = 0;
  }

  addCar(model, horsepower, price, mileage) {
    //проверяваме за невалиден инпут
    if (model === "" || horsepower < 0 || price < 0 || mileage < 0) {
      throw new Error(`Invalid input!`);
    }
    let car = { model, horsepower, price, mileage };
    this.availableCars.push(car);
    return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(
      2
    )} km - ${price.toFixed(2)}$`;
  }

  sellCar(model, desiredMileage) {
    let cheked = this.availableCars.find((a) => a.model === model);
    let index = this.availableCars.findIndex((a) => a.model === model);
    let soldPrice = 0;
    let diff = Number(cheked.mileage) - Number(desiredMileage);

    if (cheked === undefined) {
      throw new Error(`${model} was not found!`);
    }

    if (Number(cheked.mileage) <= Number(desiredMileage)) {
      soldPrice = Number(cheked.price);
    } else if (diff <= 40000) {
      soldPrice = Number(cheked.price) * 0.95;
    } else if (diff > 40000) {
      soldPrice = Number(cheked.price) * 0.9;
    }

    this.availableCars.splice(index, 1);
    cheked.price = soldPrice;
    delete cheked.mileage;
    this.soldCars.push(cheked);

    this.totalIncome += soldPrice;

    return `${model} was sold for ${soldPrice.toFixed(2)}$`;
  }
  currentCar() {
    if (this.availableCars.length === 0) {
      return `There are no available cars`;
    } else {
      let resultArr = ["-Available cars:"];
      for (const line of this.availableCars) {
        let str = `---${line.model} - ${
          line.horsepower
        } HP - ${line.mileage.toFixed(2)} km - ${line.price.toFixed(2)}$`;
        resultArr.push(str);
      }
      return resultArr.join("\n");
    }
  }
  salesReport(criteria) {
    if (criteria !== "horsepower" && criteria !== "model") {
      throw new Error("Invalid criteria!");
    }

    if (criteria === "horsepower") {
      this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
    } else if (criteria === "model") {
      this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
    }
    let result = [
      `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`,
      `-${this.soldCars.length} cars sold:`,
    ];
    for (const line of this.soldCars) {
      result.push(
        `---${line.model} - ${line.horsepower} HP - ${line.price.toFixed(2)}$`
      );
    }
    return result.join("\n");
  }
}

let dealership = new CarDealership("SoftAuto");
dealership.addCar("Toyota Corolla", 100, 3500, 190000);
dealership.addCar("Mercedes C63", 300, 29000, 187000);
dealership.addCar("Audi A3", 120, 4900, 240000);
dealership.sellCar("Toyota Corolla", 230000);
dealership.sellCar("Mercedes C63", 110000);
console.log(dealership.salesReport("horsepower"));
