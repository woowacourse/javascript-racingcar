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

      this.#position.push(number <= 4 ? 1 : 0);
    }
  }

  getStatus() {
    return { name: this.#name, position: this.#position };
  }
}

module.exports = Car;
