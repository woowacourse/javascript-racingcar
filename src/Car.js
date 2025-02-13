class Car {
  #name;

  #position;

  constructor(name) {
    this.#name = name;
    this.#position = 0;
  }

  move() {
    this.#position += 1;
  }

  getCarPosition() {
    return this.#position;
  }

  getName() {
    return this.#name;
  }
}

export default Car;
