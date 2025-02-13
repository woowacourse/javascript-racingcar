import Output from "./view/Output.js";
import { ERROR_MESSAGE } from "./constants/message.js";

export default class Validator {
  static carNamesAndCount(carNames) {
    this.#carNameLengthOverFive(carNames);
    this.#carNameLengthUnderOne(carNames);
    this.#carCountUnderTwo(carNames.length);
    this.#carCountOverHundred(carNames.length);
    this.#duplicateCarName(carNames);
  }

  static tryCount(tryNumber) {
    this.#tryNumberUnderOne(tryNumber);
    this.#tryNumberOverHundred(tryNumber);
    this.#tryNumberNotPositiveInteger(tryNumber);
  }

  // 자동차
  static #carNameLengthOverFive = (carNames) => {
    carNames.forEach((carName) => {
      if (carName.length > 5) {
        Output.error(ERROR_MESSAGE.carNameLengthOverFive);
      }
    });
  };
  static #carNameLengthUnderOne = (carNames) => {
    carNames.forEach((carName) => {
      if (carName.length < 1) {
        Output.error(ERROR_MESSAGE.carNameLengthUnderOne);
      }
    });
  };

  static #carCountUnderTwo = (carCount) => {
    if (carCount < 2) {
      Output.error(ERROR_MESSAGE.carCountUnderTwo);
    }
  };

  static #carCountOverHundred = (carCount) => {
    if (carCount > 100) {
      Output.error(ERROR_MESSAGE.carCountOverHundred);
    }
  };

  static #duplicateCarName = (carNames) => {
    if (new Set(carNames).size !== carNames.length) {
      Output.error(ERROR_MESSAGE.duplicateCarName);
    }
  };

  //시도 횟수
  static #tryNumberUnderOne = (tryNumber) => {
    if (tryNumber < 1) {
      Output.error(ERROR_MESSAGE.tryNumberUnderOne);
    }
  };

  static #tryNumberOverHundred = (tryNumber) => {
    if (tryNumber > 100) {
      Output.error(ERROR_MESSAGE.tryNumberOverHundred);
    }
  };

  static #tryNumberNotPositiveInteger = (tryNumber) => {
    if (!Number.isInteger(tryNumber)) {
      Output.error(ERROR_MESSAGE.tryNumberNotPositiveInteger);
    }
  };
}
