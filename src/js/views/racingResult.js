import { $ } from '../utils/dom.js';
import { showElement, hideElement } from '../utils/attribute.js';

const carPlayerTemplate = (name, distance) => {
  return `
    <div class="car-name mr-2">
      <div class="car-player">${name}</div>
      ${'<div class="forward-icon mt-2">⬇️️</div>'.repeat(distance)}
    </div>
  `;
};

export const renderFinalWinner = (finalWinner) => {
  $('#winner-names').innerHTML = `🏆 최종 우승자: ${finalWinner} 🏆`;
};

export const renderRacingResult = (cars) => {
  cars.forEach(({ name, distance }) => {
    $('#result-racing').insertAdjacentHTML('beforeend', carPlayerTemplate(name, distance));
  });
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
