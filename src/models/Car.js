class Car {
  #name;

  #distance = 1;

  constructor(name) {
    this.#name = name;
  }

  move() {
    this.#distance += 1;
  }
}

module.exports = Car;
