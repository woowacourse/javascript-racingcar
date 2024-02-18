import {
  validateMaxLength,
  validateDuplication,
  validateSpecialCharacter,
  validateMinValue,
  validateMaxValue,
  validateInteger,
} from '../utils/validate/validateFunctions.js';
import GAME_CONDITION from '../constants/configs/gameCondition.js';

const Validator = {
  /**
   * 각 자동차의 이름에 대한 유효성을 검증합니다.
   * @param { string[] } carNames
   */
  validateCarNames: (carNames) => {
    validateDuplication(carNames);

    carNames.forEach((carName) => {
      validateMaxLength(carName, GAME_CONDITION.MIN_CAR_NAME_LENGTH);
      validateSpecialCharacter(carName);
    });
  },

  /**
   * 시도횟수에 대한 유효성을 검증합니다.
   * @param { Number } countOfAttempts
   */

  validateCountOfAttempts: (countOfAttempts) => {
    validateMinValue(countOfAttempts, GAME_CONDITION.MIN_COUNT_OF_ATTEMPT);
    validateMaxValue(countOfAttempts, GAME_CONDITION.MAX_COUNT_OF_ATTEMPT);
    validateInteger(countOfAttempts);
  },
};

export default Validator;
