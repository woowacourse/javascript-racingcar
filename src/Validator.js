import Output from "./view/Output.js";
import { ERROR_MESSAGE } from "./constants/message.js";
import { CAR_SETTING } from "./constants/setting.js";

export default class Validator {
  static carNamesAndCount(carNames) {
    this.#carNameLengthOverFive(carNames);
    this.#carNameLengthUnderOne(carNames);
    this.#carCountUnderTwo(carNames.length);
    this.#carCountOverHundred(carNames.length);
    this.#duplicateCarName(carNames);
  }

  static tryNumber(tryNumber) {
    this.#tryNumberUnderOne(tryNumber);
    this.#tryNumberOverHundred(tryNumber);
    this.#tryNumberNotPositiveInteger(tryNumber);
  }

  static #carNameLengthOverFive = (carNames) => {
    carNames.forEach((carName) => {
      if (carName.length > CAR_SETTING.maxCarName) {
        Output.error(ERROR_MESSAGE.carNameLengthOverFive);
      }
    });
  };

  static #carNameLengthUnderOne = (carNames) => {
    carNames.forEach((carName) => {
      if (carName.length < CAR_SETTING.minCarName) {
        Output.error(ERROR_MESSAGE.carNameLengthUnderOne);
      }
    });
  };

  static #carCountUnderTwo = (carCount) => {
    if (carCount < CAR_SETTING.minCarCount) {
      Output.error(ERROR_MESSAGE.carCountUnderTwo);
    }
  };

  static #carCountOverHundred = (carCount) => {
    if (carCount > CAR_SETTING.maxCarCount) {
      Output.error(ERROR_MESSAGE.carCountOverHundred);
    }
  };

  static #duplicateCarName = (carNames) => {
    if (new Set(carNames).size !== carNames.length) {
      Output.error(ERROR_MESSAGE.duplicateCarName);
    }
  };

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
