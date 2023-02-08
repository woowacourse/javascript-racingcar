class Car {
  #name;
  #distance;

  constructor(name) {
    this.#name = name;
    this.#distance = 1;
  }

  move() {
    this.#distance += 1;
  }

  getName() {
    return this.#name;
  }

  getDistance() {
    return this.#distance;
  }
}

export default Car;
