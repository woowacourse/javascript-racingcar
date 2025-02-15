export default class Race {
  #cars;

  #gameCount;

  constructor(gameCount, cars) {
    this.#gameCount = gameCount;
    this.#cars = cars;
  }
}
