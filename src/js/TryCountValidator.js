export default class TryCountValidator {
  constructor(tryCount) {
    this.tryCount = tryCount;
  }

  isNotInteger() {
    return !Number.isInteger(this.tryCount);
  }

  isNotPositiveNumber() {
    return this.tryCount < 1;
  }
}