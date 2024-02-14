class Car {
  #name;
  #location;

  constructor(name) {
    this.#name = name;
    this.#location = 0;
  }

  move() {
    this.#location += 1;
  }

  getName() {
    return this.#name;
  }

  getLocation() {
    return this.#location;
  }
}

export default Car;
