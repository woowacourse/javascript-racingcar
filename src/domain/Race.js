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

  getRaceResult(randomNumbers) {
    const results = [];
    for (let i = 0; i < this.#tryCount; i++) {
      results.push(this.getGameRoundResult(randomNumbers[i]));
    }
    return results;
  }

  getGameRoundResult(randomNumbers) {
    const result = [];
    this.#cars.forEach((car, index) => {
      if (this.isMove(randomNumbers[index])) car.move();
      result.push({ name: car.getName(), position: car.getPosition() });
    });
    return result;
  }

  isMove(number) {
    if (number >= CAR.PROGRESS_CRITERIA) return true;
    return false;
  }
}
