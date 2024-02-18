import CarPosition from './Car.js';
import CONSTANTS from '../../CONSTANTS/index.js';

const { message } = CONSTANTS;

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
      .join(message.PROGRESS_LINE_BREAK_MARK_EACH_TRY);
  }

  getWinnerString() {
    const maxPosition = this.#getMaxPosition();
    const winners = this.#getCarInfosInFinish(maxPosition);
    return `${message.WINNER_OUTPUT_HEADER}${winners.join(
      message.WINNER_CONNECTION_MARK
    )}`;
  }

  #initResult(carNames) {
    this.#result = carNames.map(name => {
      const carInfo = new CarPosition(name, this.#maxTryCount);
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
            message.PROGRESS_CONNECTION_MARK
          }${message.DISTANCE_MARK.repeat(carInfo.getPositionWhen(tryCount))}`
      )
      .join(message.PROGRESS_LINE_BREAK_MARK_EACH_ROUND);
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
