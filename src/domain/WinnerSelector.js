class WinnerSelector {
  #winners = [];

  constructor() {}

  calculateWinners(cars) {
    const maxPosition = this.#getMaxPosition(cars);
    this.#selectWinners(cars, maxPosition);
  }

  #getMaxPosition(cars) {
    const carPositions = cars.map((car) => car.position);
    return Math.max(...carPositions);
  }

  #selectWinners(cars, maxPosition) {
    const winners = cars.filter((car) => car.position === maxPosition);

    this.#winners = winners;
  }

  get winners() {
    return this.#winners;
  }
}

export default WinnerSelector;
