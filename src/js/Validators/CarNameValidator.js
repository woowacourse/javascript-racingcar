import { NUMBERS } from '../Utils/constants.js';

export default class CarNameValidator {
  constructor(carNames) {
    this.carNames = carNames;
  }

  isValidLength() {
    return this.carNames.every(
      (carName) =>
        carName.length < NUMBERS.MAX_NAME_LENGTH + 1 && carName.length > NUMBERS.MIN_NAME_LENGTH - 1
    );
  }

  isIncludingBlank() {
    return this.carNames.some((carName) => carName.indexOf(' ') > -1);
  }

  isDuplicated() {
    return this.carNames.some(
      (carName) => this.carNames.indexOf(carName) !== this.carNames.lastIndexOf(carName)
    );
  }

  isCompleteWord() {
    return this.carNames.every((carName) => !/[^가-힣a-zA-Z0-9]/.test(carName));
  }
}
