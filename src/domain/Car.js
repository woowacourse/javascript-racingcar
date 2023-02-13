class Car {
  #name;
  #currentDistance;

  constructor(name) {
    this.#name = name;
    this.#currentDistance = 0;
  }

  move() {
    this.#currentDistance += 1;
  }

  getName() {
    return this.#name;
  }

  getCurrentDistance() {
    return this.#currentDistance;
  }
}

export default Car;
