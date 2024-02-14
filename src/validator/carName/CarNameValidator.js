import { SYMBOLS } from '../../constants/symbols.js';
import { startValidation } from '../startValidation.js';

/**
 * @module CarNameValidator
 * 자동차 이름 입력에 대한 유효성 검사를 수행하는 모듈
 */
const CarNameValidator = Object.freeze({
  /**
   * @type {import('../../utils/jsDoc.js').CarNameValidationTypes}
   */
  validationTypes: Object.freeze({
    notCommaSeparated: Object.freeze({
      errorMessage: `자동차 이름은 ${SYMBOLS.comma}로만 구분 가능합니다.`,
      isValid(inputValue) {
        const regex = /^[a-z0-9A-Z가-힣]+([,][a-z0-9A-Z가-힣]*)*[,]?$/;
        return regex.test(inputValue);
      },
    }),

    invalidCarLength: Object.freeze({
      errorMessage: '자동차는 2대 이상 부터 가능합니다.',
      isValid(inputValue) {
        return inputValue.split(`${SYMBOLS.comma}`).length >= 2;
      },
    }),

    invalidCarNameLength: Object.freeze({
      // TODO: 도메인 객체에 상수 값으로 분리 할 것
      errorMessage: `자동차 이름은 1 ~ 5자의 범위만 가능합니다.`,
      isValid(inputValue) {
        // 모든 이름이 1~5자인지 확인
        return inputValue.split(`${SYMBOLS.comma}`).every((name) => name.length >= 1 && name.length <= 5);
      },
    }),
  }),

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
