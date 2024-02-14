class TryCountValidator {
  static isNaturalNumber(tryCount) {
    if (!Number.isInteger(tryCount) || tryCount < 1) {
      throw new Error('[ERROR] 시도 횟수는 자연수여야 합니다.');
    }
  }
}

export default TryCountValidator;
