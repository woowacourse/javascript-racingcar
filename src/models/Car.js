class Car {
  static #INIT_DISTANCE = 1;

  #name;

  #distance = Car.#INIT_DISTANCE;

  constructor(name) {
    this.#name = name;
  }

  move() {
    this.#distance += 1;
  }

  getInfo() {
    return [this.#name, this.#distance];
  }
}

module.exports = Car;
