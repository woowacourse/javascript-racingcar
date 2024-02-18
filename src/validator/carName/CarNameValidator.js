import deepFreeze from '../../utils/deepFreeze.js';
import { SYMBOLS } from '../../constants/symbols.js';
import { startValidation } from '../startValidation.js';
import {
  CAR_NAME_RANGE,
  CAR_NAME_REGEX,
  CAR_LENGTH_RANGE,
  ERROR_MESSAGE_REGEX,
  ERROR_MESSAGE_DUPLICATE,
  ERROR_MESSAGE_CAR_LENGTH_MIN,
  ERROR_MESSAGE_CAR_NAME_RANGE,
} from './constant.js';

/**
 * @module CarNameValidator
 * 자동차 이름 입력에 대한 유효성 검사를 수행하는 모듈
 */
const CarNameValidator = deepFreeze({
  /**
   * @type {import('../../type/jsDoc.js').CarNameValidationTypes}
   */
  validationTypes: {
    notCommaSeparated: {
      errorMessage: ERROR_MESSAGE_REGEX,
      isValid(inputValue) {
        return CAR_NAME_REGEX.test(inputValue);
      },
    },
    duplicateCarNames: {
      errorMessage: ERROR_MESSAGE_DUPLICATE,
      isValid(inputValue) {
        const carNames = inputValue.split(SYMBOLS.comma);
        return new Set(carNames).size === carNames.length;
      },
    },
    invalidCarLength: {
      errorMessage: ERROR_MESSAGE_CAR_LENGTH_MIN,
      isValid(inputValue) {
        return inputValue.split(SYMBOLS.comma).length >= CAR_LENGTH_RANGE.min;
      },
    },
    invalidCarNameLength: {
      errorMessage: ERROR_MESSAGE_CAR_NAME_RANGE,
      isValid(inputValue) {
        return inputValue
          .split(`${SYMBOLS.comma}`)
          .every((name) => name.length >= CAR_NAME_RANGE.min && name.length <= CAR_NAME_RANGE.max);
      },
    },
  },

  /**
   * 사용자의 입력 값에 대한 유효성 검사를 수행하고 에러를 발생시킬 수 있음
   * @param {string} inputValue - 사용자의 입력 값
   * @throws {AppError} 유효성을 만족하지 않을 경우 에러 발생
   * @returns {void}
   */
  check(inputValue) {
    startValidation(this.validationTypes, inputValue);
  },
});

export default CarNameValidator;
