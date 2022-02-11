import { $ } from '../util/dom.js';

export const getTryCount = e => {
  e.preventDefault();
  const tryCountInput = $('#try-count-input').value;
  if (!isTryCountPositiveNumber(tryCountInput)) {
    return tryCountInput;
  }
};

const isTryCountPositiveNumber = tryCountInput => {
  if (tryCountInput < 1) {
    window.alert('1이상의 수를 입력해 주세요.');
  }
  return tryCountInput < 1;
};
