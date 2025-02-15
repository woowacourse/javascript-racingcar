export default class Car {
  #name;
  #position;

  constructor(name) {
    this.#name = name;
    this.#position = 0;
  }

  go() {
    this.#position++;
  }

  get name() {
    return this.#name;
  }

  get position() {
    return this.#position;
  }
}
