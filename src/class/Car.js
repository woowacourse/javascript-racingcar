export default class Car {
  #racingCount = 0;
  #name;

  constructor(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  getRacingCount() {
    return this.#racingCount;
  }

  move() {
    this.#racingCount += 1;
  }
}
