import CarInfo from './CarInfo.js';
import CONSTANT from '../../CONSTANTS/index.js';

const { hello: MESSAGE } = CONSTANT;

class RaceManager {
  #maxTryCount;
  #result;

  constructor(carNames, maxTryCount) {
    this.#maxTryCount = maxTryCount;
    this.#initResult(carNames);
  }

  getProgressString() {
    return Array.from({ length: this.#maxTryCount })
      .map((_, nowTryCount) => this.#generateTryString(nowTryCount))
      .join(MESSAGE.resultLineBreakMarkInRace);
  }

  getWinnerString() {
    const maxPosition = this.#getMaxPosition();
    const winners = this.#getCarInfosInFinish(maxPosition);
    return `${MESSAGE.winnerOutputHeader}${winners.join(
      MESSAGE.winnerConnectionMark
    )}`;
  }

  #initResult(carNames) {
    this.#result = carNames.map(name => {
      const carInfo = new CarInfo(name, this.#maxTryCount);
      return carInfo;
    });
  }

  #getMaxPosition() {
    return Math.max(
      ...this.#result.map(carInfo =>
        carInfo.getPositionWhen(this.#maxTryCount - 1)
      )
    );
  }

  #generateTryString(tryCount) {
    return this.#result
      .map(
        carInfo =>
          `${carInfo.getName()}${
            MESSAGE.resultConnectionMark
          }${MESSAGE.distanceMark.repeat(carInfo.getPositionWhen(tryCount))}`
      )
      .join(MESSAGE.resultLineBreakMarkInRound);
  }

  #getCarInfosInFinish(position) {
    return this.#result
      .filter(
        carInfo => carInfo.getPositionWhen(this.#maxTryCount - 1) === position
      )
      .map(carInfo => carInfo.getName());
  }
}

export default RaceManager;
