import deepFreeze from '../../utils/deepFreeze.js';
import { SYMBOLS } from '../../constants/symbols.js';
import { startValidation } from '../startValidation.js';
import { CAR_NAME_RANGE, CAR_NAME_REGEX, CAR_LENGTH_RANGE } from './constant.js';

/**
 * @module CarNameValidator
 * 자동차 이름 입력에 대한 유효성 검사를 수행하는 모듈
 */
const CarNameValidator = deepFreeze({
  /**
   * @type {import('../../utils/jsDoc.js').CarNameValidationTypes}
   */
  validationTypes: {
    notCommaSeparated: {
      errorMessage: `자동차 이름은 ${SYMBOLS.comma}로만 구분 가능합니다.`,
      isValid(inputValue) {
        return CAR_NAME_REGEX.test(inputValue);
      },
    },
    duplicateCarNames: {
      errorMessage: `중복된 자동차 이름이 존재합니다.`,
      isValid(inputValue) {
        const carNames = inputValue.split(SYMBOLS.comma);
        return new Set(carNames).size === carNames.length;
      },
    },
    invalidCarLength: {
      errorMessage: `자동차는 ${CAR_LENGTH_RANGE.min}대 이상 부터 가능합니다.`,
      isValid(inputValue) {
        return inputValue.split(SYMBOLS.comma).length >= CAR_LENGTH_RANGE.min;
      },
    },
    invalidCarNameLength: {
      errorMessage: `자동차 이름은 ${CAR_NAME_RANGE.min} ~ ${CAR_NAME_RANGE.max}자의 범위만 가능합니다.`,
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
