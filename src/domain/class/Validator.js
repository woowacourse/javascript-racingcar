import CONSTANTS from '../../CONSTANTS';

const { numeric, message } = CONSTANTS;

class Validator {
  static validateCarNames(carNames) {
    if (!this.#isValidCarNames(carNames))
      throw new Error(message.INVALID_CAR_NAME);
  }

  static validateMaxTryCountString(maxTryCount) {
    if (!this.#isValidMaxTryCountString(maxTryCount))
      throw new Error(message.INVALID_MAX_TRY_COUNT);
  }

  static #isValidCarNames(carNames) {
    return (
      carNames.every(name => this.#isValidCarName(name)) &&
      carNames.length === new Set(carNames).size
    );
  }

  static #isValidCarName(name) {
    return (
      name.length >= numeric.CAR_NAME_LENGTH_LOWER &&
      name.length <= numeric.CAR_NAME_LENGTH_UPPER
    );
  }

  static #isValidMaxTryCountString(maxTryCountString) {
    const isNumberString = this.#isNumberString(maxTryCountString);
    const isMaxTryCountInRange = this.#isMaxTryCountInRange(
      Number(maxTryCountString)
    );

    return isNumberString && isMaxTryCountInRange;
  }

  static #isNumberString(string) {
    return /^[0-9]+$/.test(string);
  }

  static #isMaxTryCountInRange(maxTryCount) {
    const isLargerThanMin = numeric.MIN_MAX_TRY_COUNT <= maxTryCount;
    const isSmallerThanMax = maxTryCount <= numeric.MAX_MAX_TRY_COUNT;

    return isLargerThanMin && isSmallerThanMax;
  }
}

export default Validator;
