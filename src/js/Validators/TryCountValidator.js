export default class TryCountValidator {
  constructor(tryCount) {
    this.tryCount = tryCount;
  }

  isInteger() {
    return Number.isInteger(this.tryCount);
  }

  isPositiveNumber() {
    return this.tryCount > 0;
  }
}
