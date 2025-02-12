export function checkTryCountRange(tryCount) {
  if (tryCount < 1 || tryCount > 20) throw new Error('[ERROR] 시도 횟수는 1 ~ 20 사이여야 합니다.');
}

export function checkIsInteger(tryCount) {
  if (!Number.isInteger(tryCount)) throw new Error('[ERROR] 시도 횟수는 자연수로 입력되어야 합니다.');
}
