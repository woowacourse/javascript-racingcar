import { createError } from "../utils/createError.js";
import { getRandomNumber } from "../utils/getRandomNumber.js";
import { CAR } from "../constants/constants.js";
import { ERROR_MESSAGE } from "../constants/message.js";

export default class Race {
  #cars;
  #tryCount;

  constructor(cars, tryCount) {
    this.#cars = cars;
    this.#tryCount = tryCount;

    this.validateTryCount();
  }

  validateTryCount() {
    if (this.#tryCount === "") createError(ERROR_MESSAGE.EMPTY_INPUT);

    if (isNaN(Number(this.#tryCount))) {
      createError(ERROR_MESSAGE.INVALID_TRY_COUNT);
    }
    if (this.#tryCount < 1) {
      createError(ERROR_MESSAGE.INVALID_TRY_COUNT);
    }
  }

  runRace() {
    for (let i = 0; i < this.#tryCount; i++) {
      this.gameRound();
    }
  }

  getRaceResult() {
    const results = [];
    for (let i = 0; i < this.#tryCount; i++) {
      results.push(this.getGameRoundResult());
    }
    return results;
  }

  getGameRoundResult() {
    const result = [];
    this.#cars.forEach((car) => {
      if (this.isMove(getRandomNumber(0, 9))) car.move();
      result.push({ name: car.getName(), position: car.getPosition() });
    });
    return result;
  }

  isMove(number) {
    if (number >= CAR.PROGRESS_CRITERIA) return true;
    return false;
  }
}
