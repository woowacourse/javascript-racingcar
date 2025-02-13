export default class Validator {
  carNamesAndCount(carNames) {
    this.#carNameLengthOverFive(carNames);
    this.#carNameLengthUnderOne(carNames);
    this.#carCountUnderTwo(carNames.length);
    this.#carCountOverHundred(carNames.length);
    this.#duplicateCarName(carNames);
  }

  tryNumber(tryNumber) {
    this.#tryNumberUnderOne(tryNumber);
    this.#tryNumberOverHundred(tryNumber);
    this.#tryNumberNotPositiveInteger(tryNumber);
  }

  // 자동차
  #carNameLengthOverFive = (carNames) => {
    carNames.forEach((carName) => {
      if (carName.length > 5) {
        Output.error(ERROR_MESSAGE.carNameLengthOverFive);
      }
    });
  };
  #carNameLengthUnderOne = (carNames) => {
    carNames.forEach((carName) => {
      if (carName.length > 1) {
        Output.error(ERROR_MESSAGE.carNameLengthUnderOne);
      }
    });
  };

  #carCountUnderTwo = (carCount) => {
    if (carCount < 2) {
      Output.error(ERROR_MESSAGE.carCountUnderTwo);
    }
  };

  #carCountOverHundred = (carCount) => {
    if (carCount > 100) {
      Output.error(ERROR_MESSAGE.carCountOverHundred);
    }
  };

  #duplicateCarName = (carNames) => {
    if (new Set(carNames).size !== carNames.length) {
      Output.error(ERROR_MESSAGE.duplicateCarName);
    }
  };

  //시도 횟수
  #tryNumberUnderOne = (tryNumber) => {
    if (tryNumber < 1) {
      Output.error(ERROR_MESSAGE.tryNumberUnderOne);
    }
  };

  #tryNumberOverHundred = (tryNumber) => {
    if (tryNumber > 100) {
      Output.error(ERROR_MESSAGE.tryNumberOverHundred);
    }
  };

  #tryNumberNotPositiveInteger = (tryNumber) => {
    if (!Number.isInteger(tryNumber)) {
      Output.error(ERROR_MESSAGE.tryNumberNotPositiveInteger);
    }
  };
}
