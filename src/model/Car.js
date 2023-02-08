const generateRandomNumber = require("../lib/generateRandomNumber.js");

class Car {
  #name;
  #position = 0;

  constructor(carName) {
    this.#name = carName;
  }

  move() {
    const number = generateRandomNumber();
    if (number <= 4) this.#position += 1;
  }
}

module.exports = Car;
