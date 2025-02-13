const validateTryCount = (input) => {
  const tryCount = Number(input);

  if (Number.isNaN(tryCount)) {
    throw new Error("시도 횟수가 숫자가 아닙니다.");
  }

  if (!Number.isInteger(tryCount)) {
    throw new Error("시도 횟수가 정수가 아닙니다.");
  }
  if (tryCount <= 0) {
    throw new Error("시도 횟수는 0 이하가 될 수 없습니다.");
  }

  return tryCount;
};

export default validateTryCount;
