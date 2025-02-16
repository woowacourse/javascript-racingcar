import { ERROR_MESSAGE } from '../constant/message.js';
import { isInteger, isNumber, isStringEmpty } from '../util/validations.js';

class ValidateModule {
  static validateCarInput(carNameInput) {
    if (isStringEmpty(carNameInput)) throw new Error(ERROR_MESSAGE.carNameInputEmpty);
  }

  static validateTryCountInput(tryCountInput) {
    const tryCount = Number(tryCountInput);

    if (!isNumber(tryCount)) throw new Error(ERROR_MESSAGE.tryCountNotNumber);
    if (!isInteger(tryCount)) throw new Error(ERROR_MESSAGE.tryCountNotInteger);
  }
}

export default ValidateModule;
