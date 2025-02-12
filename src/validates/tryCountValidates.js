export function checkTryCountRange(tryCount) {
  if (tryCount < 1 || tryCount > 20) throw new Error('[ERROR] 시도 횟수는 1 ~ 20 사이여야 합니다.');
}
