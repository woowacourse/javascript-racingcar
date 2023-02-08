class Car {
  #name;
  #currentPosition;

  constructor(name) {
    this.#name = name;
    this.#currentPosition = 0;
  }

  move(number) {
    if (number < 4) return;
    this.#currentPosition += 1;
  }

  getName() {
    return this.#name;
  }

  getCurrentPosition() {
    return this.#currentPosition;
  }
}

module.exports = Car;
