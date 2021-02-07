export default class Car {
  #name;
  #position;

  constructor(name) {
    this.#name = name;
    this.#position = 0;
  }

  go(value) {
    if (value >= 4) {
      this.#position++;
    }
  }

  get name() {
    return this.#name;
  }

  get position() {
    return this.#position;
  }
}
