import { MIN_CAR_COUNT, MAX_CAR_NAME, MIN_CAR_NAME, MAX_TRY_COUNT, MIN_TRY_COUNT } from '../constants/common.js';
import { ERROR_MESSAGE } from '../constants/message.js';

class Validate {
  static checkIsEmpty(carName) {
    if (carName.trim().length === 0) throw new Error(ERROR_MESSAGE.CAR_NAME_EMPTY);
  }

  static checkCarNameLength(carName) {
    if (carName.length < MIN_CAR_NAME || carName.length > MAX_CAR_NAME) throw new Error(ERROR_MESSAGE.CAR_NAME_LENGTH);
  }

  static checkCarNameDuplicate(carNames) {
    const carNameSet = new Set(carNames);

    if (carNameSet.size !== carNames.length) throw new Error(ERROR_MESSAGE.CAR_NAME_DUPLICATED);
  }

  static checkCarCount(carNames) {
    if (carNames.length < MIN_CAR_COUNT) throw new Error(ERROR_MESSAGE.CAR_NAME_MIN);
  }

  static checkTryCountRange(tryCount) {
    if (tryCount < MIN_TRY_COUNT || tryCount > MAX_TRY_COUNT) throw new Error(ERROR_MESSAGE.TRY_COUNT_RANGE);
  }

  static checkIsInteger(tryCount) {
    if (!Number.isInteger(tryCount)) throw new Error(ERROR_MESSAGE.TRY_COUNT_INTEGER);
  }
}

export default Validate;
