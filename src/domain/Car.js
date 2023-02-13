class Car {
  #name;
  #position = 0;
  #roundPosition = [];

  constructor(name) {
    this.#name = name;
  }

  move() {
    this.#position += 1;
  }

  accumlateRoundPosition() {
    this.#roundPosition.push(this.#position);
  }

  getName() {
    return this.#name;
  }

  getRoundPosition(round) {
    return this.#roundPosition[round];
  }
}

module.exports = Car;
