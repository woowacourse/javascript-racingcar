import validateCarInstance from './utils/validateCarInstance';

class RaceResult {
  #result;
  #maxTryCount;
  #maxPosition;

  constructor() {
    this.#result = [];
    this.#maxTryCount = 0;
    this.#maxPosition = 0;
  }

  pushCar(car) {
    validateCarInstance(car);
    this.#result.push(car);
    this.#updateMaxTryCount(car.getLastTryCount());
    this.#updateMaxPosition(car.getLastPosition());
  }

  getAllProgressMap() {
    return Array.from({ length: this.#maxTryCount }).map((_, tryCount) =>
      this.#getProgressMapWhentryCount(tryCount)
    );
  }

  getWinnersNames() {
    return this.#getWinners().map(car => car.getName());
  }

  #getProgressMapWhentryCount(tryCount) {
    return this.#result.reduce(
      (map, car) => map.set(car.getName(), car.getPositionWhen(tryCount)),
      new Map()
    );
  }

  #getWinners() {
    return this.#result.filter(
      car => car.getLastPosition() === this.#maxPosition
    );
  }
  #updateMaxTryCount(tryCount) {
    this.#maxTryCount = Math.max(this.#maxTryCount, tryCount);
  }

  #updateMaxPosition(position) {
    this.#maxPosition = Math.max(this.#maxPosition, position);
  }
}

export default RaceResult;
