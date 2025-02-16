import Output from "../view/Output.js";
import { TRY_NUMBER_SETTING } from "../constants/setting.js";
import { ERROR_MESSAGE } from "../constants/message.js";

export default class ValidateTryNumber {
  static tryNumber(tryNumber) {
    this.#tryNumberUnderOne(tryNumber);
    this.#tryNumberOverHundred(tryNumber);
    this.#tryNumberNotPositiveInteger(tryNumber);
  }

  static #tryNumberUnderOne = (tryNumber) => {
    if (tryNumber < TRY_NUMBER_SETTING.minTryNumber) {
      Output.error(ERROR_MESSAGE.tryNumberUnderOne);
    }
  };

  static #tryNumberOverHundred = (tryNumber) => {
    if (tryNumber > TRY_NUMBER_SETTING.maxTryNumber) {
      Output.error(ERROR_MESSAGE.tryNumberOverHundred);
    }
  };

  static #tryNumberNotPositiveInteger = (tryNumber) => {
    if (!Number.isInteger(tryNumber)) {
      Output.error(ERROR_MESSAGE.tryNumberNotPositiveInteger);
    }
  };
}
