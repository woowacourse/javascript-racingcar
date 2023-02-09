class Car {
  #name;
  #state;
  constructor(name) {
    this.#name = name;
    this.#state = 0;
  }

  move(moveNumber) {
    if (moveNumber >= 4) this.#state += 1;
    return this.#state;
  }

  getName() {
    return this.#name;
  }

  getState() {
    return this.#state;
  }
}

module.exports = Car;
