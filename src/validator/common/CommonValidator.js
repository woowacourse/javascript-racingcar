import { SYMBOLS } from '../../constants/symbols.js';
import { startValidation } from '../startValidation.js';

/**
 * @module CommonValidator
 * 입력 값에 대한 일반적인 유효성 검사를 수행하는 모듈
 */
const CommonValidator = Object.freeze({
  /**
   * @type {import('../../utils/jsDoc.js').CommonValidationTypes}
   */
  validationTypes: Object.freeze({
    emptyValues: Object.freeze({
      errorMessage: '아무것도 입력하지 않았으므로 다시 입력해주세요.',
      isValid(inputValue) {
        return inputValue !== SYMBOLS.emptyString;
      },
    }),

    existSpaces: Object.freeze({
      errorMessage: '입력한 값에 공백이 존재합니다.',
      isValid(inputValue) {
        return !inputValue.includes(SYMBOLS.space);
      },
    }),
  }),

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
