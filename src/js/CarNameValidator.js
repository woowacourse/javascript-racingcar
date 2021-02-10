export default class CarNameValidator {
  isNotValidLength(carNames) {
    return carNames.some((carName) => (carName.length > 5 || carName.length < 1));
  }

  isIncludingBlank(carNames) {
    return carNames.some((carName) => carName.indexOf(' ') > -1);
  }

  isDuplicated(carNames) {
    return carNames.some((carName) => carNames.indexOf(carName) !== carNames.lastIndexOf(carName));
  }

  isInCompleteWord(carNames) {
    return carNames.some((carName) => /[^가-힣a-z0-9]/.test(carName));
  }
}
