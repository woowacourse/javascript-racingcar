import { isInRange, isInteger, isNumber, isStringEmpty } from '../utils/validations.js';

class ValidateModule {
  static validateCarInput(carNameInput) {
    if (isStringEmpty(carNameInput)) throw new Error('[ERROR] 자동차 이름을 입력해주세요.');
  }

  static validateTryCountInput(tryCountInput) {
    const tryCount = Number(tryCountInput);

    if (!isNumber(tryCount)) throw new Error('[ERROR] 시도 횟수는 숫자여야 합니다.');
    if (!isInteger(tryCount)) throw new Error('[ERROR] 시도 횟수는 정수여야 합니다.');
    if (!isInRange(tryCount, 1, 20)) throw new Error('[ERROR] 시도 횟수는 1 ~ 20 사이여야 합니다.');
  }
}

export default ValidateModule;
