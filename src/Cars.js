const Car = require("./Car");

class Cars {
  #cars;

  constructor(carNames) {
    const carNamesArray = carNames.split(",");
    this.#cars = carNamesArray.map((name) => new Car(name));
  }
}

module.exports = Cars;
