import GAME_CONDITION from '../constants/configs/gameCondition.js';
import {
  isValidDuplication,
  isValidMaxLength,
  notIncludesSpecialCharacter,
  isValidMinValue,
  isValidMaxValue,
  isValidInteger,
  isValidRequireValue,
} from './validateFunctions.js';
import AppError from '../errors/AppError.js';
import ERROR_MESSAGE from '../constants/messages/errorMessage.js';

const Validator = {
  /**
   * 각 자동차의 이름에 대한 유효성을 검증합니다.
   * @param { string[] } carNames
   */
  validateCarNames(carNames) {
    this.validateDuplication(carNames);

    carNames.forEach((carName) => {
      this.validateMaxLength(carName, GAME_CONDITION.MIN_CAR_NAME_LENGTH);
      this.includesSpecialCharacter(carName);
    });
  },

  validateDuplication(carNames) {
    if (!isValidDuplication(carNames)) {
      throw new AppError(ERROR_MESSAGE.HAVE_DUPLICATION);
    }
  },

  validateMaxLength(carName, conditionValue) {
    if (!isValidMaxLength(carName, conditionValue)) {
      throw new AppError(ERROR_MESSAGE.OUT_OF_RANGE);
    }
  },

  includesSpecialCharacter(carName) {
    if (!notIncludesSpecialCharacter(carName)) {
      throw new AppError(ERROR_MESSAGE.HAVE_SPECIAL_CHARACTERS);
    }
  },

  /**
   * 시도횟수에 대한 유효성을 검증합니다.
   * @param { Number } countOfAttempts
   */
  validateCountOfAttempts(countOfAttempts) {
    this.validateMinValue(countOfAttempts, GAME_CONDITION.MIN_COUNT_OF_ATTEMPT);
    this.validateMaxValue(countOfAttempts, GAME_CONDITION.MAX_COUNT_OF_ATTEMPT);
    this.validateInteger(countOfAttempts);
  },

  validateMinValue(countOfAttempts, conditionValue) {
    if (!isValidMinValue(countOfAttempts, conditionValue)) {
      throw new AppError(ERROR_MESSAGE.NOT_NATURAL_NUMBER);
    }
  },

  validateMaxValue(countOfAttempts, conditionValue) {
    if (!isValidMaxValue(countOfAttempts, conditionValue)) {
      throw new AppError(ERROR_MESSAGE.OVER_LIMIT_COUNT);
    }
  },

  validateInteger(countOfAttempts) {
    if (!isValidInteger(countOfAttempts)) {
      throw new AppError(ERROR_MESSAGE.NOT_INTEGER);
    }
  },
};

export default Validator;
