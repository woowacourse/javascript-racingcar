import { ERROR_MESSAGE } from "../constants/ErrorMessage.js";
import { NUMBER } from "../constants/Number.js";
class CarNameValidator {
  valiateNames(carNames) {
    for (let carName of carNames) {
      this.#valiateCarNameLength(carName);
      this.#validateSpecialSymbol(carName);
    }

    this.#validateDuplicateName(carNames);
    this.#validateCarNamesLength(carNames);
  }

  #valiateCarNameLength(carName) {
    if (
      carName.length < NUMBER.MIN_CAR_NAME_LENGTH ||
      carName.length > NUMBER.MAX_CAR_NAME_LENGTH
    ) {
      throw new Error(ERROR_MESSAGE.INVALID_NAME_LENGTH);
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
      throw new Error(ERROR_MESSAGE.DUPLICATED_NAME);
    }

    nameSet.add(carName);
  }

  #validateSpecialSymbol(carNames) {
    const regExp = /^[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]$/g;

    if (regExp.test(carNames)) {
      throw new Error(ERROR_MESSAGE.INVALID_NAME);
    }
  }

  #validateCarNamesLength(carNames) {
    if (
      carNames.length < NUMBER.MIN_CAR_LIST_LENGTH ||
      carNames.length > NUMBER.MAX_CAR_LIST_LENGTH
    ) {
      throw new Error(ERROR_MESSAGE.INVALID_CARS_LENGTH);
    }
  }
}

export default CarNameValidator;
