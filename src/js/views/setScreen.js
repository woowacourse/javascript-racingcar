import { $ } from '../utils/dom.js';

const hideElement = (element) => {
  return element.setAttribute('hidden', true);
};

const showElement = (element) => {
  return element.removeAttribute('hidden');
};

export const showCountInput = () => {
  showElement($('#racing-count-form'));
};

export const showRacingResult = () => {
  showElement($('#result-screen'));
  showElement($('#final-winner'));
};

export const startUpScreen = () => {
  $('#car-names-input').value = '';
  $('#racing-count-input').value = '';
  $('#result-racing').innerHTML = '';

  hideElement($('#racing-count-form'));
  hideElement($('#result-screen'));
  hideElement($('#final-winner'));
};
