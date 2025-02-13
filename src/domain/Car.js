class Car {
  #name;
  #position;

  constructor(name) {
    this.#name = name;
    this.#position = 0;
  }

  move() {
    this.#position++;
  }

  get name() {
    return this.#name;
  }

  get position() {
    return this.#position;
  }

  set position(value) {
    this.#position = value;
  }
}

export default Car;
