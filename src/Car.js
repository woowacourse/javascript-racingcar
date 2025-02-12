class Car {
  #position;

  constructor() {
    this.#position = 0;
  }

  moveOneStep() {
    this.#position += 1;
  }

  get position() {
    return this.#position;
  }
}

export default Car;
