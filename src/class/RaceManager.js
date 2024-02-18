import CarInfo from "./CarInfo.js";
import CONSTANT from "../CONSTANTS/index.js";

const { MESSAGE } = CONSTANT;

class RaceManager {
  #carNames;
  #tryCount;
  #result;

  constructor(carNames, tryCount) {
    this.#carNames = carNames;
    this.#tryCount = tryCount;
  }

  getResultString() {
    return new Array(this.#tryCount)
      .fill(null)
      .map((_, nowTry) => this.#generateTryString(nowTry))
      .join(MESSAGE.resultLineBreakMarkInRace);
  }

  getWinnerString() {
    const maxPosition = this.#getMaxPosition();
    const winners = this.#result
      .filter(
        (carInfo) => carInfo.getPositionWhen(this.#tryCount - 1) === maxPosition
      )
      .map((carInfo) => carInfo.getName());
    return `${MESSAGE.winnerOutputHeader}${winners.join(
      MESSAGE.winnerConnectionMark
    )}`;
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

  #generateTryString(nowTry) {
    return this.#result
      .map(
        (carInfo) =>
          `${carInfo.getName()}${
            MESSAGE.resultConnectionMark
          }${MESSAGE.distanceMark.repeat(carInfo.getPositionWhen(nowTry))}`
      )
      .join(MESSAGE.resultLineBreakMarkInRound);
  }
}

export default RaceManager;
