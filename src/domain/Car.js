export default class Car {
  #name;
  #position;

  constructor(name, position = 0) {
    this.#name = name;
    this.#position = position;
  }

  move() {
    this.#position += 1;
  }

  getName() {
    return this.#name;
  }

  getPosition() {
    return this.#position;
  }
}
