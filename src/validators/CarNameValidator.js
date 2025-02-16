import { ERROR } from '../constants/message.js';

class CarNameValidator {
  validateNames(carNames) {
    for (let carName of carNames) {
      this.#valdiateCarNameLength(carName);
      this.#validateSpecialSymbol(carName);
    }

    this.#validateDuplicateName(carNames);
    this.#validateCarNamesLength(carNames);
  }

  #valdiateCarNameLength(carName) {
    if (carName.length < 1 || carName.length > 5) {
      throw new Error(ERROR.CAR_NAME.INVALID_LENGTH);
    }
  }

  #validateDuplicateName(carNames) {
    const nameSet = new Set();

    for (let carName of carNames) {
      this.#checkDuplicate(carName, nameSet);
    }
  }

  #checkDuplicate(carName, nameSet) {
    if (nameSet.has(carName)) {
      throw new Error(ERROR.CAR_NAME.DUPLICATE);
    }

    nameSet.add(carName);
  }

  #validateSpecialSymbol(carNames) {
    const specialSymbolRegExp = /^[{}[\]/?.,;:|)*~`!^_+<>@#$%&\\=('"-]$/g;

    if (specialSymbolRegExp.test(carNames)) {
      throw new Error(ERROR.CAR_NAME.SPECIAL_SYMBOL);
    }
  }

  #validateCarNamesLength(carNames) {
    if (carNames.length <= 1 || carNames.length > 100) {
      throw new Error(ERROR.CAR.INVALID_COUNT);
    }
  }
}

export default CarNameValidator;
