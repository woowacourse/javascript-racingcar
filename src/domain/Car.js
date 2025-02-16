export default class Car {
  #name;
  #position = 0;

  constructor(name) {
    this.#name = name;
  }

  move() {
    this.position += 1;
  }
}
