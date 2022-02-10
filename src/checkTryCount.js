import { $ } from './util/dom.js';

export const getTryCount = e => {
  e.preventDefault();
  const tryCountInput = $('#try-count-input').value;
  console.log(tryCountInput);
};

export const checkTryCount = tryCountInput => {};
