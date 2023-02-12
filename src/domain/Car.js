const { MOVE_SETTING } = require("../util/Constant.js");
const GenerateRandomNumber = require("../util/GenerateRandomNumber.js");

class Car {
  #name;
  #position = [];

  constructor(carName) {
    this.#name = carName;
  }

  move(tryCount) {
    for (let sequence = 0; sequence < tryCount; sequence++) {
      const number = GenerateRandomNumber.generator();

      this.#position.push(this.makeNumberMove(number));
    }
  }

  makeNumberMove(number) {
    const move =
      number >= MOVE_SETTING.advanceBoundary
        ? MOVE_SETTING.advance
        : MOVE_SETTING.stop;

    return move;
  }

  getStatus() {
    return { name: this.#name, position: this.#position };
  }
}

module.exports = Car;
