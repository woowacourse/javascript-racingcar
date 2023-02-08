const generateRandomNumber = require("../lib/generateRandomNumber.js");

class Car {
  #name;
  #position = [];

  constructor(carName) {
    this.#name = carName;
  }

  move(tryCount) {
    for (let sequence = 0; sequence < tryCount; sequence++) {
      const number = generateRandomNumber();

      number <= 4 ? this.#position.push(1) : this.#position.push(0);
    }
  }
}

module.exports = Car;
