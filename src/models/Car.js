class Car {
  #name;

  #distance = 1;

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
