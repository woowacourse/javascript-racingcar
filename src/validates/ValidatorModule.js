import { isStringEmpty } from '../utils/validations';

class ValidateModule {
  static validateCarInput(carNameInput) {
    if (isStringEmpty(carNameInput)) throw new Error('[ERROR] 자동차 이름을 입력해주세요.');
  }
}

export default ValidateModule;
