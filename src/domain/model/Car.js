const { GAME_STRING, GAME_NUMBER } = require('../../constants');

class Car {
  #name;

  #progress = [];

  constructor(name) {
    this.#name = name;
  }

  setProgress() {
    this.#progress.push(GAME_STRING.progress);
  }

  getProgress() {
    return this.#progress;
  }

  getName() {
    return this.#name;
  }

  static isMove(number) {
    return number >= GAME_NUMBER.moveStandard;
  }
}
module.exports = Car;
