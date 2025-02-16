class TryCountValidator {
  validateNumber(tryCount) {
    if (isNaN(tryCount) === true) {
      throw new Error('시도 횟수는 숫자여야 합니다.');
    }

    if (Number(tryCount) <= 0) {
      throw new Error('시도 횟수는 양의 정수여야 합니다.');
    }
  }
}

export default TryCountValidator;
