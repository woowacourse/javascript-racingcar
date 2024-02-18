import CarInfo from "./CarInfo";

class RaceManager {
  #carNames;
  #tryCount;
  #result;

  constructor(carNames, tryCount) {
    this.#carNames = carNames;
    this.#tryCount = tryCount;
  }

  getTryCount() {
    return this.#tryCount;
  }

  getResult() {
    return [...this.#result];
  }

  getWinners() {
    const maxPosition = this.#getMaxPosition();
    const winners = this.#result
      .filter(
        (carInfo) => carInfo.getPositionWhen(this.#tryCount - 1) === maxPosition
      )
      .map((carInfo) => carInfo.getName());

    return winners;
  }

  setResult() {
    this.#result = this.#carNames.map((name) => {
      const carInfo = new CarInfo(name, this.#tryCount);
      carInfo.setPosition();
      return carInfo;
    });
  }

  #getMaxPosition() {
    return Math.max(
      ...this.#result.map((carInfo) =>
        carInfo.getPositionWhen(this.#tryCount - 1)
      )
    );
  }
}

export default RaceManager;
