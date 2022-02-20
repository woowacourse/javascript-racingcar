class Car {
  #name = '';

  #distance = 0;

  constructor(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  getDistance() {
    return this.#distance;
  }

  moveForward() {
    this.#distance = this.#distance + 1;
  }
}

export default Car;
