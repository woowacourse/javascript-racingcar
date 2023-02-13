/**
 * @param {number} inclusiveStart 생성할 랜덤 숫자 범위의 시작
 * @param {number} exclusiveEnd 생성할 랜덤 숫자 범위의 끝. 끝은 포함하지 않는다
 * @returns {number} 주어진 범위에서 생성된 랜덤 숫자
 */
export function randomNumberBetween(inclusiveStart, exclusiveEnd) {
  return inclusiveStart + Math.floor(Math.random() * exclusiveEnd);
}
