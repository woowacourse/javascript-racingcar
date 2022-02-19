import Car from './Car.js';

export default class Model {
  #carNames = [];
  #winnerNames = [];

  get carList() {
    return this.#carNames;
  }

  setCarList(carNameList) {
    this.#carNames = carNameList.map((name) => new Car(name));
  }

  get winners() {
    const maxDistance = Math.max(...this.#carNames.map((car) => car.distance));
    this.#winnerNames = this.#carNames
      .filter((car) => car.distance === maxDistance)
      .map((winner) => winner.name);

    return this.#winnerNames;
  }

  set winners(winnerNames) {
    this.#winnerNames = winnerNames;
  }

  init() {
    this.#carNames = [];
    this.#winnerNames = [];
  }
}
