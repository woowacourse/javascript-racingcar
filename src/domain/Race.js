const Random = require('../utils/Random');

class Race {
  #cars;

  #trial;

  constructor() {
    this.#cars = [];
    this.#trial = 0;
  }

  getCars() {
    return this.#cars;
  }

  getTrial() {
    return this.#trial;
  }
}

module.exports = Race;
