const { GAME_STRING } = require('../../constants');

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
}
module.exports = Car;
