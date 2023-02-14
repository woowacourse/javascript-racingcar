class Car {
  #name;
  #distance;

  constructor(name) {
    this.#name = name;
    this.#distance = 0;
  }

  move(condition) {
    if (condition) {
      this.#distance += 1;
      return true;
    }
    return false;
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
