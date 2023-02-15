class Car {
  #name;
  #position = 0;

  constructor(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  getPosition() {
    return this.#position;
  }

  move() {
    this.#position += 1;
  }

}

module.exports = Car;
