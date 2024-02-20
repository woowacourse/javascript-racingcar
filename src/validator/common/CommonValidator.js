import deepFreeze from '../../utils/deepFreeze.js';
import { SYMBOLS } from '../../constants/symbols.js';
import { startValidation } from '../startValidation.js';
import { ERROR_MESSAGE_EMPTY, ERROR_MESSAGE_SPACE } from './constant.js';

/**
 * @module CommonValidator
 * 입력 값에 대한 일반적인 유효성 검사를 수행하는 모듈
 */
const CommonValidator = deepFreeze({
  /**
   * @type {import('../../type/jsDoc.js').CommonValidationTypes}
   */
  validationTypes: {
    emptyValues: {
      errorMessage: ERROR_MESSAGE_EMPTY,
      isValid(inputValue) {
        return inputValue !== SYMBOLS.emptyString;
      },
    },

    existSpaces: {
      errorMessage: ERROR_MESSAGE_SPACE,
      isValid(inputValue) {
        return !inputValue.includes(SYMBOLS.space);
      },
    },
  },

  /**
   * @param {string} inputValue - 사용자의 입력 값
   * @throws {import('../../errors/AppError/module.js').default} 유효성을 만족하지 않을 경우 에러 발생
   * @returns {void}
   */
  check(inputValue) {
    startValidation(this.validationTypes, inputValue);
  },
});

export default CommonValidator;
