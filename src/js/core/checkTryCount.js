import { $ } from '../util/dom.js';

export const getTryCount = e => {
  e.preventDefault();
  const tryCount = $('#try-count-input').value;
  if (!isTryCountPositiveNumber(tryCount)) {
    return tryCount;
  }
};

const isTryCountPositiveNumber = tryCount => {
  if (tryCount < 1) {
    window.alert('1이상의 수를 입력해 주세요.');
  }
  return tryCount < 1;
};
