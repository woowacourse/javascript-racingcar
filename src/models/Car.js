class Car {
  #name;
  #count = 0;

  constructor(name) {
    this.#name = name;
  }

  move(randomNumber) {
    if (randomNumber >= 4) this.#count++;
  }

  get name() {
    return this.#name;
  }

  get count() {
    return this.#count;
  }
}

export default Car;
