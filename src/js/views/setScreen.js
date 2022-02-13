import $ from '../utils/dom.js';

// const hideElement = (element) => {
//   return element.setAttribute('hidden', true);
// };

const showElement = (element) => {
  return element.removeAttribute('hidden');
};

export const showCountInput = () => {
  showElement($('#racing-count-form'));
};

export const showRacingResult = () => {
  showElement($('#racing-result'));
  showElement($('#final-winner'));
};
