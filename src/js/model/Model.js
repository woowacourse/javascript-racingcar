export default class Model {
  constructor() {
    this.carNames = [];
    this.winnerNames = [];
  }

  get carList() {
    return this.carNames;
  }

  set carList(carNames) {
    this.carNames = carNames;
  }

  get winners() {
    const maxDistance = Math.max(...this.carNames.map((car) => car.distance));
    this.winnerNames = this.carNames
      .filter((car) => car.distance === maxDistance)
      .map((winner) => winner.name);

    return this.winnerNames;
  }

  set winners(winnerNames) {
    this.winnerNames = winnerNames;
  }

  init() {
    this.carNames = [];
    this.winnerNames = [];
  }
}
