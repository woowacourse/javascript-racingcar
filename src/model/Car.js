class Car {
  #name;
  #advance;

  constructor(carName) {
    this.#name = carName;
    this.#advance = 0;
  }

  getName() {
    return this.#name;
  }

  getAdvance() {
    return this.#advance;
  }

  updateAdvance(number) {
    if (number >= 4) this.#advance += 1;
  }
}

export default Car;
