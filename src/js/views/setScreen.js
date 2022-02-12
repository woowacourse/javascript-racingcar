import $ from '../utils/dom.js';

export const hideElement = (element) => {
  return element.setAttribute('hidden', true);
};

export const showElement = (element) => {
  return element.removeAttribute('hidden');
};

export const showCountInput = () => {
  showElement($('#racing-count-form'));
};
