import { startValidation } from '../startValidation.js';

/**
 * @module TryCountValidator
 * 사용자 입력에 대한 자동차 이동 횟수의 유효성 검사를 수행하는 모듈
 */
const TryCountValidator = Object.freeze({
  /**
   * 자동차 이동 횟수 유효성 검사 유형
   */
  validationTypes: Object.freeze({
    typeOfNumber: Object.freeze({
      errorMessage: '정수만 입력 가능합니다.',
      isValid(inputValue) {
        return !Number.isNaN(inputValue) && Number.isInteger(inputValue);
      },
    }),

    outOfRange: Object.freeze({
      errorMessage: '시도 횟수는 1 ~ 10만 입력 가능합니다.',
      isValid(inputValue) {
        return inputValue >= 1 && inputValue <= 10;
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
    startValidation(this.validationTypes, Number(inputValue));
  },
});

export default TryCountValidator;
