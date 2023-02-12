/* eslint-disable lines-between-class-members */

class Car {
  #name;
  #distance = 0;

  constructor(name) {
    this.#name = name;
  }

  move() {
    this.#distance += 1;
  }

  getName() {
    return this.#name;
  }

  getCurrentDistance() {
    return this.#distance;
  }
}

module.exports = Car;
