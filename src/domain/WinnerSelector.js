class WinnerSelector {
  #winners = [];

  constructor() {}

  calculateWinners(cars) {
    const maxPosition = this.#getMaxPosition(cars);
    this.#selectWinners(cars, maxPosition);
  }

  #getMaxPosition(cars) {
    const finalPosition = cars.map((car) => car.position);
    return Math.max(...finalPosition);
  }

  #selectWinners(cars, maxPosition) {
    const winner = cars.filter((car) => car.position === maxPosition).map((car) => car.name);

    this.#winners = winner;
  }

  get winners() {
    return this.#winners;
  }
}

export default WinnerSelector;
