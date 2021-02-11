import { NUMBERS } from '../Utils/constants.js';

export default class CarNameValidator {
  constructor(carNames) {
    this.carNames = carNames;
  }

  isNotValidLength() {
    return this.carNames.some((carName) => (carName.length > NUMBERS.MAX_NAME_LENGTH || carName.length < NUMBERS.MIN_NAME_LENGTH));
  }

  isIncludingBlank() {
    return this.carNames.some((carName) => carName.indexOf(' ') > -1);
  }

  isDuplicated() {
    return this.carNames
      .some((carName) => this.carNames.indexOf(carName) !== this.carNames.lastIndexOf(carName));
  }

  isInCompleteWord() {
    return this.carNames.some((carName) => /[^가-힣a-zA-Z0-9]/.test(carName));
  }
}
