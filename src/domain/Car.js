import {
  MIN_NAME_LENGTH,
  MOVING_DISTANCE,
  MOVING_THRESHOLD,
} from '../constants/configurations.js';
import { ERROR_MESSAGE } from '../constants/systemMessages.js';
import { NumberChecker, StringChecker } from '../utils/Checkers.js';

class Car {
  #name;
  #position;

  constructor(name, position) {
    this.#validate(name, position);
    this.#name = name;
    this.#position = position;
  }

  #validate(name, position) {
    if (StringChecker.isMoreThanValue(name, MIN_NAME_LENGTH))
      throw new Error(ERROR_MESSAGE.INVALID_NAME_LENGTH);
    if (StringChecker.isIncludeBlank(name))
      throw new Error(ERROR_MESSAGE.INVALID_NAME_SPACE);
    if (StringChecker.isNotRegString(name, /^[a-zA-Z]+$/))
      throw new Error(ERROR_MESSAGE.INVALID_NAME_CHARACTER);
    if (NumberChecker.isLessThanValue(position, 0))
      throw new Error(ERROR_MESSAGE.INVALID_POSITION_MIN);
    if (StringChecker.isNotRegString(String(position), /^[0-9]+$/))
      throw new Error(ERROR_MESSAGE.INVALID_POSITION_CHARACTER);
  }

  getCarStatus() {
    return { name: this.#name, position: this.#position };
  }

  move(value) {
    if (value >= MOVING_THRESHOLD) this.#position += MOVING_DISTANCE;
  }
}

export default Car;
