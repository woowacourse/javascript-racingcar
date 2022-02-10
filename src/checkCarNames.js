import { $ } from './util/dom.js';

export const checkCarNames = e => {
  e.preventDefault();
  const carNamesInput = $('#car-names-input').value.split(',');

  console.log(carNamesInput);
};
