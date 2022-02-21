class Car {
  #name = '';

  #distance = 0;

  #isForwarded = false;

  constructor(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  getDistance() {
    return this.#distance;
  }

  getIsForwarded() {
    return this.#isForwarded;
  }

  moveForward() {
    this.#distance = this.#distance + 1;
    this.#isForwarded = true;
  }

  stop() {
    this.#isForwarded = false;
  }
}

export default Car;
