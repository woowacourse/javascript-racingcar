export default class CarNameValidator {
  constructor(carNames) {
    this.carNames = carNames;
  }

  isNotValidLength() {
    return this.carNames.some((carName) => (carName.length > 5 || carName.length < 1));
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
