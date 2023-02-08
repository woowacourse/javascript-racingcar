const RandomGenerator = require('./RandomGenerator');
class Car {
  #name;
  #distance;

  constructor(name) {
    this.#name = name;
    this.#distance = 0;
  }

  move() {
    const randomNumber = RandomGenerator.getBetween0And9();
    if (randomNumber < 4) {
      return;
    }
    this.#distance += 1;
  }

  isFinish(winningDistance) {
    return this.#distance >= winningDistance;
  }

  getName() {
    return this.#name;
  }

  getDistance() {
    return this.#distance;
  }
}

module.exports = Car;
