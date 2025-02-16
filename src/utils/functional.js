/**
 * 여러 개의 함수를 왼쪽에서 오른쪽으로 실행하여 데이터를 변환하는 함수
 *
 * @param  {...Function} fns - 순차적으로 실행할 함수 목록
 * @returns {Function} - 첫 번째 입력값을 받아, 모든 함수를 순차적으로 적용한 결과를 반환하는 함수
 */
export const pipe =
  (...fns) =>
  (...args) =>
    fns.slice(1).reduce((acc, fn) => fn(acc), fns[0](...args));
